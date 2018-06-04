// Put an article DOM element in your index.html with the id attribute value of messages.

// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
const artMess = document.querySelector("#messages")
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
let paraMess = document.createElement("p")
paraMess.className = "message"
paraMess.textContent = "Hello World"

let paraMess2 = document.createElement("p")
paraMess2.className = "message"
paraMess2.textContent = "Hiya"

let paraMess3 = document.createElement("p")
paraMess3.className = "message"
paraMess3.textContent = "Aloha"

let paraMess4 = document.createElement("p")
paraMess4.className = "message"
paraMess4.textContent = "Howdy"

let paraMess5 = document.createElement("p")
paraMess5.className = "message"
paraMess5.textContent = "Hey"

// Using appendChild(), attach each message as a child to the messages element.
artMess.appendChild(paraMess);
artMess.appendChild(paraMess2);
artMess.appendChild(paraMess3);
artMess.appendChild(paraMess4);
artMess.appendChild(paraMess5);

// Update your code from the previous exercise to add the chat messages to the messages elements via a document fragment.
const fragment = document.createDocumentFragment()
const hw = document.createElement('p')
hw.textContent = "Goodbye World"
fragment.appendChild(hw)
document.querySelector("#messages p").appendChild(fragment)

const hiya = document.createElement('p')
hiya.textContent = "Goodbye"
fragment.appendChild(hiya)
document.querySelector("#messages > p:nth-child(2)").appendChild(fragment)

const aloha = document.createElement('p')
aloha.textContent = "Aloha"
fragment.appendChild(aloha)
document.querySelector("#messages > p:nth-child(3)").appendChild(fragment)

const howdy = document.createElement('p')
howdy.textContent = "Later"
fragment.appendChild(howdy)
document.querySelector("#messages > p:nth-child(4)").appendChild(fragment)

const hey = document.createElement('p')
hey.textContent = "Later Gator"
fragment.appendChild(hey)
document.querySelector("#messages > p:nth-child(5)").appendChild(fragment)

