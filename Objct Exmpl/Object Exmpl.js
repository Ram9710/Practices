///////Object Example
let person = {
    name: "Ram", // properties
    place: "chn", // properties
    greetUser() {
      // method
      return `Hello my name is ${this.name} and i'm coming from ${this.place}.`;
    },
  };
  
  console.log(person.greetUser());
  
  // Challenge: Dynamic simple program to get name & place automatically from the user.
  const nameInput = prompt("What is your name?");
  const placeInput = prompt("Where are you coming from?");
  
  person.name = nameInput;
  person.place = placeInput;
  
  
  document.writeln(`"Hello my name is ${nameInput}  Im cmg frm ${placeInput}`);
  
  // Additionally you can also do this.
  // document.body.innerHTML = `<h1>${person.greetUser()}</h1>`;
