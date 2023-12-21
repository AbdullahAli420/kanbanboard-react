module.exports.todoValidator = (req, res, next) => {
  const { task, description, date, time } = req.body;
  if (!task || task == "") {
    res.status(404).send("Please write name!");
  }
  if (!date || date == "") {
    res.status(404).send("Please write date!");
  } else {
    let newDate = new Date(date);
    // console.log(newDate);
    if (newDate == "Invalid Date") {
      res.status(404).send("Please write valid date in YYYY-MM-DD format!");
    }
  }
  next();
};
