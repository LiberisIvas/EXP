//Nodemailer
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'Hotmail',
  secure: false,
  port: 25,
  auth:{
    user: 'seinfeld001@hotmail.com',
    pass: 'Breakcore123'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// let mailOptions = {
//   from: 'seinfeld001@hotmail.com',
//   to: 'liberis.ivas@gmail.com',
//   subject: 'subject',
//   text: 'text from form'
// };

let mailOptions = {
    from: (function showData() {var field =$('#email').val();} ),
    to: 'liberis.ivas@gmail.com',
    subject: (function showData() {var field =$('#subject').val();} ),
    text: (function showData() {var field =$('#text').val();} )
  };


// verify connection configuration
transporter.sendMail(mailOptions, (error, success)=> {
  if (error) {
    return console.log(error);
  } else {
       console.log('Server is ready to take our messages');
       console.log(success);
  }
});