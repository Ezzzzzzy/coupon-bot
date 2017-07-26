const express = require('express')
const bodyParser = require('body-parser');
const app = express();
var GoogleSpreadsheet = require('google-spreadsheet');
var doc = new GoogleSpreadsheet('130bzP9pcdpHWyJv3p__F1wBQGTqcjPdgtA62-0YbUHs');
var sheet;
const async = require('async');
var gsjson = require('google-spreadsheet-to-json');
var rando = require('random-number-in-range')
http = require('http'),
server = http.createServer(app),

server.listen(3000);
console.log('listening to 3000')
var counter = 0
app.use(bodyParser.urlencoded({ extended: true }));
async.series([
setAuth = (step) => {
    // see notes below for authentication instructions!
    var creds = {
      "type": "service_account",
      "project_id": "bold-ally-174706",
      "private_key_id": "48166617e5c8e06b1636310a19d9a2a012d3dc6e",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQClcnc7r62lSfL6\npQadlf7h4LHkKJ6Eb24dFCAnkoZEKtFXExkJquSkl8IcpJ+e7rtiE6KQJBhKRZlC\nhxUJoCG5L70YZSidFLCpCpVxypumvGTRXRg80pBWZ83WaiKUz9Low7avyM2GXAUi\nqCQZ6TYfiUWwz24d+nfcuKHRSzXVRUODSzLFsdsvb/ryAyteYonTuiJxzy7k8ff8\n6MjFVbtCcvdhPJ59+sKTKNAD23jD6szRZDAxDTeNtsjAUK3XyWzHyV/RnTJwvktE\nfzj4hSAEAz85my2OOtNkiRBKqIe84RxQOyNttHBo3Im7Tr0QPDWRqFdDNOjemZCk\npmT8C7pPAgMBAAECggEAOxP2s5912DHhy9Kl3Bu1mh7MJvbCM/Q+U6/eE4Nk4m6P\nthIhvKwDXSq7q9K1FOGWk90DDYl2Cv9zTKhDwN4nbKM5WL62k/DRbGtVFf8NOarI\nLWKaxw1BcTk77TaVBqJ3Y5qPX5HKohG127xCt+Xo57Xy5sILRjUsG+rqDXxXysGP\n6qUb0VmJhtlMiXcd3SrYfTWZinr2a6C5hdRDgehP0Mjuk0jdW8UOVXX2bscnyPh7\nXucwXRPkr+mbWX/ijNdamPExwhrhhdYkP2y905NiLLlSMUtVvr76qOjYd3WL1HzN\nflKsL/cN7mJA2AssMk82vB1vezIJ06rQJZIwXkKMUQKBgQDR0SceGGpBN97s/lYs\nuzm6deO637B6b/RNefWZY9A4qMQhWBOv+y15aW0vXxS1bOpeVVsBbSx/gNPEFeFP\ngDCOgumWMIjSSLT/fI9UQCGBY7uSvKQQj35scRWiF7gqsoUYIEW5fkKipaeiUOEC\nRKK/+QVcbmN6fwBcQ9a5EZi0RQKBgQDJ3SSOmb/QZX81WLx4WBvGMuk2O+QxKGdZ\nLuUrEarFsImr6terAkiBFChSKFB1weWgcJZZwOCtgc1YQFUzijmX+GOp01ltmpLj\niOqQM0RsdSQiFAT5DD+5Jk1H/u8DxqN+WCth5iHyzxWrgl0OPtb9+Ns2PxCxR/Da\nD0Q4BUi/gwKBgD7DJcRm4UHpCJIz8msnBjm0kg6QYyX830NdvA3KQbrxINookpsN\ns6ih1Lta4cLzdZgKSFLA6ZKqYq5BLUiuu9elaWI32nWsshfKlsVI+bzOrIlUTG93\nvQWLPkFifwCmrhFtde3qytwEWYTAVM5s4ZIzV1sy2icGXoE6+bwae2dRAoGBAK59\nk/4X9PBk68LnQ3MbZla651BUEPpVHJDAsqO6D832vep3g5l0zcuV6wypgHNp+d3n\ntG89BHm2vBPO+Fcm4oX01eGUqbbOaK56SZgAWOMPlv5GI85LwkF/VEopmd2/tM+f\n01A6p5nFW8v3UgzgUOMUXBjWBs3Xi+BSVfu+xZWVAoGBALegkc5SyK0muIYuaGii\nbmNSY918rq7h4bCXqaZIr6Iqlwomu3AG5yDzBaoyLV+0S4oWllkxZxeXQPOnRsQd\nhPKRSkE9D//mCs+YseM5DzrrlyADqjjw9cGadwvDoHES/OLwoZUJ9pc0uThPilsm\nJvdd29ZA/ov5+LuJb3lROoN5\n-----END PRIVATE KEY-----\n",
      "client_email": "cbot-332@bold-ally-174706.iam.gserviceaccount.com",
      "client_id": "104494933857665732468",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cbot-332%40bold-ally-174706.iam.gserviceaccount.com"
    }
    doc.useServiceAccountAuth(creds, step);
  }

])

var count = {
  "now": 0
}



var trigger = {
  "set_attributes":{
    "num": 0
  }
}

const coupon = {
  "set_attributes":{
    "coupon": 0
  }
}

// var question = function(n) {
//
// }
//
// var insertList = function(msg) {
//   return {
//   "title": msg.code,
//   "image_url": img(msg.service),
//   "subtitle": 'Valid until '+ msg.ends+'. '+ msg.description,
//   "buttons": [
//   {
//       "set_attributes":
//         {
//           "details": msg.description,
//           "validUntil": msg.ends,
//           "code": msg.code
//         },
//       "type": "show_block",
//       "block_names": ["Details"],
//       "title": "View Info"
//     }
//     ]
// };
var samplearr = ["lala","lulu"]
var iyak = function(array)
{
  var string = '{';
  var number = array.length;
  for(var i=0 ; i!=array.length; i++)
  {
    var ii = i+1
    string= string+' \"Q'+ ii +'\": \"'+ array[i] +'\"';
    if(i!=array.length-1)
    {
      string=string+','
    }

  }
  string= string+'}'
  console.log(string)
  return JSON.parse(string)
}

var userAttributeSet = {
   "set_attributes":
     {
       "trigger": 0
     }
 }
   var arr = {
     "arr":[]
   }

var json = {
  "Q1 Ans": "haha",
  "Q2 Ans": "huhu"
}

app.get('/test', function(req,res){
  console.log("pasok")
 res.send(iyak(samplearr))
})

app.get('/add', (req, res)=>{
  arr.arr.push(req.query.input)
  console.log(arr);
  res.send(arr)
})

app.get('/results',(req,res)=>{
  doc.addRow(2,iyak(arr.arr)
  ,(err,result)=>{
      console.log(err)
      res.send(result)
  })
})

app.get('/read', function(req,res){
    gsjson({
        spreadsheetId: '130bzP9pcdpHWyJv3p__F1wBQGTqcjPdgtA62-0YbUHs',
        // other options...
    })
    .then(function(result) {
      if(count.now < Object.keys(result[0]).length){
        count.now = trigger.set_attributes.num
        var message ={
             "messages": [
               {"text": result[0][Object.keys(result[0])[count.now]] }
             ]
            }
          console.log(result[0][Object.keys(result[0])[count.now]])
          count.now++;
          console.log(count.now)
          trigger.set_attributes.num = count.now
          console.log(trigger.set_attributes.num)
          res.send(message)
        // res.send(row[0][Object.keys(row[0])[count.now+3]])
      }
      else{
        userAttributeSet.set_attributes.trigger = 1
        trigger.set_attributes.num = 0;
        res.send(userAttributeSet)
      }
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });
})

app.get('/outputcoupon',function(req,res){
  gsjson({
      spreadsheetId: '130bzP9pcdpHWyJv3p__F1wBQGTqcjPdgtA62-0YbUHs',
      worksheet: 2
  })
  .then(function(result) {
    console.log(coupon.set_attributes.coupon)
    console.log(Object.keys(result).length)
    var message ={
         "messages": [
           {"text": "YAAY Thank you for your feed back, here is the coupon code for you ! '"+result[req.query.coupon]["code"]+"'" }
         ]
        }
        res.send(message)
  })
  .catch(function(err) {
      console.log(err.message);
      console.log(err.stack);
  });
})

app.get('/random',function(req,res){
  gsjson({
      spreadsheetId: '130bzP9pcdpHWyJv3p__F1wBQGTqcjPdgtA62-0YbUHs',
      worksheet: 2
  }).then(function(result) {
  coupon.set_attributes.coupon = rando(0,Object.keys(result).length)
  res.send(coupon)
  }).catch(function(err) {
      console.log(err.message);
      console.log(err.stack);
  });
})

app.get('/readcoupon', function(req,res){
  gsjson({
      spreadsheetId: '130bzP9pcdpHWyJv3p__F1wBQGTqcjPdgtA62-0YbUHs',
      worksheet: 2
  })
  .then(function(result) {
    console.log(req.query.coupon)
  //  coupon.set_attributes.coupon = rando(0,Object.keys(result).length)
    // console.log(coupon.set_attributes.coupon)
    // console.log(Object.keys(result).length)
      var message = {
 "messages": [
    {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "elements":[
            {
              "title":  result[req.query.coupon].title,
              "image_url": result[req.query.coupon].url,
              "subtitle": result[req.query.coupon].subtitle,
              "buttons":[
                {
                  "type": "show_block",
                  "block_name": "go",
                  "title": "GO! "
                },
              ]
            }
          ]
        }
      }
    }
  ]
}
res.send(message)
  })
  .catch(function(err) {
      console.log(err.message);
      console.log(err.stack);
  });

})


module.exports = app;
