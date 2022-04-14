const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
require("dotenv").config();

const { SerialPort } = require("serialport");
const serialPort = new SerialPort({
  path: process.env.ARDUINO_KEY,
  baudRate: 9600,
});

app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`);
  console.log("access");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(port);
});

// シリアル通信
serialPort.on("open", () => {
  console.log("Port Open");
  app.post("/", (req, res) => {
    const json = req.body;
    console.log(json);
    write(json.rotate);
  });
});

const write = (data) => {
  serialPort.write(`${data}`, (error, results) => {
    if (error) {
      console.log("Error : " + error);
    }
  });
};
