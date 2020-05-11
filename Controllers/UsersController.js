const bcrypt = require("bcryptjs");
const tab = require("../Models");
module.exports = {
  findUsers: async (req, res, next) => {
    const data = req.body;
    console.log(req.body);
    console.log(data);
    let checkEmail = await tab.Users.findOne({ email: data.email });
    !checkEmail &&
      res.json({ status: 400, message: "Unvalid Email  or password" });

    // console.log(">>>> emali", checkEmail);
    let pass = await bcrypt.compare(data.password, checkEmail.password);
    !pass && res.json({ status: 400, message: "Unvalid Email or password" });

    // console.log(">>>> reslult", pass);
    pass &&
      res.json({
        status: 200,
        message: "Success",
        name: checkEmail.name,
      });
  },
  addAdmines: async (req, res, next) => {
    const data = req.body;
    let CheckEmail = await tab.Users.findOne({ email: data.email });
    if (CheckEmail) {
      res.json({ status: 400, message: "The email exists please try again" });
    } else {
      bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(data.password, salt, (err, hash) => {
          data.password = hash;
          console.log(data);

          const newUser = new tab.Users(data);
          newUser
            .save()
            .then((result) => res.status(200).json({ message: "Success" }))
            .catch((err) => res.status(500).json({ error: err }));
        });
      });
    }
  },
};
