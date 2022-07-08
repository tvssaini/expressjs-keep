import bodyParser from "body-parser";
import express from "express";
const axios = require('axios')
const cron = require('node-cron');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

cron.schedule('*/25 * * * *', () => {
   axios.get(`https://boiling-hamlet-92721.herokuapp.com/`)
  .then(function (response: any) {
    console.log('success');
  })
  .catch(function (error: any) {
    console.log('Failed Moodstack ',new Date());
  })

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
