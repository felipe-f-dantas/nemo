"use strict";
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'felipepaladino95@hotmail.com', // generated ethereal user
      pass: '5QTGVxXjFZEDM20d', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Teste SendBlue 👻" <felipepaladino95@hotmail.com>', // sender address
    to: "felipedantas1995@gmail.com, felipe.dantas@mobs2com, luccagioia@gmail.com , roberto.andrade@mobs2.com, de.castro12@outlook.com,michellycampello@yahoo.com.br", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Felipe", // plain text body
    html: `<h1>Lorem Ipsum</h1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempor mollis. Sed sed lectus metus. Curabitur massa lacus, ultricies at efficitur vitae, aliquam vel velit. Nulla nec odio non velit mollis tempus nec faucibus dui. Nam bibendum consectetur tellus, nec fringilla mauris. Maecenas dolor eros, tempus eget dui quis, malesuada eleifend diam. Aliquam mi est, tincidunt ut posuere non, tempor eget libero. Donec luctus metus eget dui cursus, eu ultricies ex semper.
    
    Integer condimentum purus imperdiet fermentum scelerisque. Fusce hendrerit, mi ut rutrum feugiat, eros nisl pharetra purus, dignissim pellentesque justo tellus sed arcu. Phasellus gravida lacinia tempor. In sit amet massa quam. In in scelerisque mi, in tincidunt diam. Nullam placerat diam dui, vitae laoreet ex placerat et. Nullam a leo eget felis blandit sodales nec id tortor. Fusce semper, eros a lacinia condimentum, mi nisi tempor justo, et faucibus libero diam interdum tortor. Proin faucibus tristique urna vel mattis. Vestibulum sed faucibus mi. Duis rhoncus tortor sit amet est auctor, eu porttitor magna ultrices. Phasellus auctor nisl eu orci feugiat tristique. Aliquam et imperdiet velit. In pretium leo ac nulla venenatis, sed dapibus urna venenatis.
    
    Praesent tempor augue sapien, tempus condimentum erat condimentum sed. Aenean nunc eros, vestibulum non luctus at, molestie interdum libero. Donec vehicula aliquet augue non blandit. Aenean arcu lacus, porttitor ac diam eu, dictum malesuada massa. Ut vitae mi vel lectus tempor semper at id ipsum. In sit amet erat et orci ullamcorper dictum quis quis sem. Aenean hendrerit pretium ante, et finibus massa bibendum elementum.
    
    Curabitur tristique magna vitae mattis ultricies. Suspendisse nisi lacus, vestibulum sed leo sit amet, euismod porttitor lacus. Curabitur hendrerit auctor turpis lobortis aliquet. Duis gravida nulla at diam sagittis faucibus. Donec nec augue in neque sollicitudin dignissim vitae in ante. Curabitur semper et augue sed eleifend. Vestibulum libero purus, accumsan a ultricies et, maximus accumsan nisl. Donec ullamcorper suscipit arcu quis tempor. Aenean efficitur gravida viverra. Donec nec nibh et libero interdum fermentum. Praesent sagittis lectus vitae lacus facilisis lobortis. Vestibulum quis ante nulla. Cras cursus tortor lacus, non interdum metus tempus quis. Suspendisse vel mattis diam. Integer gravida rutrum urna eget porta. Donec sit amet risus sit amet purus mattis porttitor ut sit amet metus.
    
    Donec ligula ex, rutrum at faucibus in, sodales vitae tortor. Aenean vehicula varius arcu eget sagittis. Mauris felis eros, vestibulum rutrum lorem laoreet, dignissim pellentesque ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In lacinia dolor eu nulla consequat, id lobortis lacus imperdiet. Cras ornare sit amet leo et mattis. Duis quis leo sit amet leo vestibulum porta. Vivamus eget pharetra ante, quis pulvinar mi.`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);{}