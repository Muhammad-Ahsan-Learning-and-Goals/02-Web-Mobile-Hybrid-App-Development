function saveData() {
  let name = document.getElementById("name");

  let roll = document.getElementById("roll");

  var student = {
    name: name.value,
    roll: roll.value,
  };

  firebase.database().ref(student).set(student);
  //   console.log(student);
}

// console.log(firebase.database);
