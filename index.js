const express = require("express");
const bodyParser = require("body-parser");
const { twiml } = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/twilio-voice", (req, res) => {
  const response = new twiml.VoiceResponse();
  response.say(
    {
      voice: "Polly.Joanna"
    },
    "Hello, this is Astra. Welcome to DiviScanOS. Your executive health interface is active."
  );
  res.type("text/xml");
  res.send(response.toString());
});

app.listen(process.env.PORT || 3000, () => {
  console.log("🚀 Astra voice server is live");
});
