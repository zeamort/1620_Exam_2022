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

//Load contacts
/*Add functions to the app.js file that will create a card for every contact in the contact list provided in app.js.
Although you don’t have to add functionality to create a new contact, your functions should be able to load a variable number of contacts. So if a new contact were added, your code would still create and display cards for all of the contacts. 
contact cards should be added to the section with an id of “display_all_contacts”.*/


let displayAllArea = document.querySelector('#display_all_contacts');
//create an ul element and append it underneath the displayAllArea (display_all_contacts id)
let listOfContacts = displayAllArea.appendChild(document.createElement('ul'));

//for loop that will ensure every object inside the contactsList array will call the createContactCard function
for (let i=0; i < contactsList.length; i++) {
  createContactCard(contactsList[i].image, contactsList[i].name);
}

//function that creates a list element for each contact and includes the contact's name and image
function createContactCard(source, name) {  
  let cardName = document.createElement("li");
  cardName.innerText = name;
  listOfContacts.appendChild(cardName);

  let cardImage = document.createElement("img");
  cardImage.src = "./img/" + source
  cardName.appendChild(cardImage)
} 