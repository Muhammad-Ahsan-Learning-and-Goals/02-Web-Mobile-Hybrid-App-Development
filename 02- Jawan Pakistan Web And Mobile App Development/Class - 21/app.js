function saveData() {
  let name = document.getElementById("name");

  let roll = document.getElementById("roll");

  var student = {
    name: name.value,
    roll: roll.value,
  };

  console.log(student);
}

console.log(firebase);
