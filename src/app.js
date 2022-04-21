'use strict;'

// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here



//Load contacts:

let displayAllArea = document.querySelector('#display_all_contacts');
//create an ul element and append it underneath the displayAllArea (display_all_contacts id)
let listOfContacts = displayAllArea.appendChild(document.createElement('ul'));
listOfContacts.id = "contact_list_container"

//for loop that will ensure every object inside the contactsList array will call the createContactCard function
for (let i=0; i < contactsList.length; i++) {
  createContactCard(contactsList[i].image, contactsList[i].name);
}

//function that creates a list element for each contact and includes the contact's name and image
function createContactCard(source, name) {  
  let cardName = document.createElement("li");
  cardName.innerText = name;
  //adding this to use a check later to ensure only li elements result in contact page showing up.
  cardName.className = "contact";
  listOfContacts.appendChild(cardName);

  let cardImage = document.createElement("img");
  cardImage.src = "./img/" + source;
  cardName.appendChild(cardImage);
} 

//Display a Single Contact:
let displaySingleContactArea = document.querySelector('#display_single_contact');

listOfContacts.addEventListener('click', function (e) {
  if (e.target.classList.contains("contact")) {
    console.log(e.target.innerHTML);
    removeArea();
    let contactImage = document.createElement("img");
    contactImage.src = "./img/" + e.target.innerHTML;
  }
});

function removeArea() {
  if (displayAllArea.style.visibility === "hidden") {
    displayAllArea.style.visiblity = "visible";
  } else {
    displayAllArea.style.visibility = "hidden";
  }
}

//close a contact:
