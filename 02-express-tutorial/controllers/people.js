const data = require("../data");

const getPeople = (req, res) => {
  const people = data.people;
  console.log(people);
  res.status(200).json({ success: true, data: people });
};

const postPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).json({
      success: false,
      msg: "please provide value",
    });
  }
  res.status(201).json({ success: true, person: name });
};

const putPerson = (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;
  if (!newName) {
    res.status(400).json({
      success: false,
      msg: "please add the newName you want to put",
    });
  }
  oldPerson = data.people.find((person) => {
    return person.id === Number(id);
  });
  if (!oldPerson) {
    return res.status(401).json({
      success: false,
      msg: "please provide a right id",
    });
  }
  console.log(oldPerson);
  res.status(200).json({ success: `${oldPerson.name} is now ${newName}` });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  oldPerson = data.people.find((person) => {
    return person.id === Number(id);
  });
  if (!oldPerson) {
    return res.status(401).json({
      success: false,
      msg: "please provide a right id",
    });
  }

  res.status(200).json({
    success: `deleted user ${oldPerson.id} (${oldPerson.name})`,
  });
};

module.exports = {
  getPeople,
  postPerson,
  putPerson,
  deletePerson,
};
