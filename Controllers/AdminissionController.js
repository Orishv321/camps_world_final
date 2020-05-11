const tab = require("../Models/index");
const nodemailer = require("nodemailer");
module.exports = {
  postAdminission: async (req, res, next) => {
    let data = req.body;
    let newAdminission = new tab.Adminission(data);

    await newAdminission
      .save()
      .then((result) => {
        // console.log(">>>Success", result);
        res.json({ status: 200, message: "Success" });
      })
      .catch((err) => {
        console.log("???", err);
        res.json({ status: 400, message: "Errors", data: err });
      });
  },
  getAdminission: async (req, res, next) => {
    await tab.Adminission.find()
      .then((result) => {
        // console.log(result);
        res.json({ status: 200, message: "Success", data: result });
      })
      .catch((err) => {
        console.log("????", err);
        res.json({ status: 400, message: "Error", data: err });
      });
  },

  rejectOrAccept: async (req, res, next) => {
    const data = req.body;
    let success = (result) => res.json({ status: 200, message: "Accepted" });
    let error = (err) =>
      res.json({ status: 500, message: "Rejected", error: err });
    let sendMail = (output) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.email,
          pass: process.env.password,
        },
      });
      var mailOprions = {
        from: process.env.email,
        to: data.email,
        subject: "Feed back from users",
        html: output,
      };
      transporter.sendMail(mailOprions, async (err, info) => {
        if (err) {
          console.log(err);
          res.json({ status: 400, message: "Message not send Invalid Email" });
        } else {
          console.log("Message send ");
          if (data.type == 1) {
            await tab.Adminission.updateOne(
              { _id: data.id },
              { $set: { accepted: true } },
            )
              .then((result) => success(result))
              .catch((err) => error(err));
          } else if (data.type == 2) {
            await tab.Adminission.updateOne(
              { _id: data.id },
              { $set: { accepted: false } },
            )
              .then((result) => success(result))
              .catch((err) => error(err));
          } else {
            res.json({ status: 500, message: "Error" });
          }
        }
      });
    };
    if (data.type == 1) {
      console.log("Accept");
      let output = `<div>
      <p>Your adminission applicatoin was accepted in Champs World<br/>
      Please conatct us By 9849180494/9808581308 or Visit us 
      </p>
    </div>`;
      sendMail(output);
    } else if (data.type == 2) {
      console.log("reject");
      let output = `<div>
      <p>Your adminission applicatoin was rejected in Champs World<br/>
      you may contact us By 9849180494/9808581308 or Visit us
      </p>
    </div>`;
      sendMail(output);
    } else {
      console.log("error");
      error(null);
    }
  },
};
