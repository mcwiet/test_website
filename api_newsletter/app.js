//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/failure", function(req, res){
  res.redirect("/");
});

app.post("/", function(req, res) {
  var first = req.body.firstName;
  var last = req.body.lastName;
  var email = req.body.email;

  var data = {
    email_address: email,
    status: "subscribed",
    "merge_fields": {
      "FNAME": first,
      "LNAME": last,
    },
  };

  var json_data = JSON.stringify(data);

  var options = {
    url: "https://us5.api.mailchimp.com/3.0/lists/f12eb6f870/members/",
    method: "POST",
    headers: {
      "Authorization": "m.cwiet@vt.edu e0722ad1eaf12b347cc0fd924a6272a2-us5",
    },
    body: json_data
  };

  request(options, function(error, response, body) {
    if (error) {
      res.sendFile(__dirname + "/failure.html");
    } else {
      if (response.statusCode == 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port 3000");
});



// e0722ad1eaf12b347cc0fd924a6272a2-us5
// f12eb6f870
