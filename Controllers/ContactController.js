const tab = require("../Models");
const nodemailer = require("nodemailer");
module.exports = {
  getContacts: async (req, res) => {
    await tab.Contact.find()
      .then((result) => {
        // console.log(">>>>>", result);
        res.json({ status: 200, message: "Success", data: result });
      })
      .catch((err) => {
        console.log("????", err);
        res.json({ status: 400, message: "Error", error: err });
      });
  },
  postContacts: (req, res) => {
    const data = req.body;
    console.log(data);

    const output = `<div>
    <p>U have just received the mail from "${data.email}" n d msg is..... <p>"${data.message}"</p></p>
  </div>`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
    });
    var mailOprions = {
      from: data.email,
      to: process.env.email,
      subject: "Feed back from users",
      html: output,
    };

    transporter.sendMail(mailOprions, async (err, info) => {
      if (err) {
        console.log(err);
        res.json({ status: 400, message: "Message not send Invalid Email" });
      } else {
        console.log("Message send ");
        const newContact = new tab.Contact(data);
        newContact
          .save()
          .then((result) => {
            // console.log("????????Saved info");
            res.json({ status: 200, message: "Success" });
          })
          .catch((err) => {
            console.log("????", err);
            res.json({ status: 400, message: "Invalid : Email not send " });
          });
      }
    });
  },
};
