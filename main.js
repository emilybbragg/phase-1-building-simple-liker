// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads

//When a user clicks on an EMPTY_HEART:
//Invoke mimicServerCall to simulate making a server request
//When the "server" returns a failure status:
//Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
//Display the error modal by removing the .hidden class
//Display the server error message in the modal
//Use setTimeout to hide the modal after 3 seconds (add the .hidden class)


document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll('span.like-glyph')
  console.log(hearts)

  hearts.forEach(hearts => hearts.addEventListener('click', heartCallback))

  function heartCallback(hearts) {
    console.log(hearts.target)
    mimicServerCall()
    .then(() => {
      if (hearts.target.innerText === EMPTY_HEART) {
        hearts.target.classList.add('activated-heart')
        hearts.target.innerText = FULL_HEART
      }
      else {
        hearts.target.classList.remove('activated-heart')
        hearts.target.innerText = EMPTY_HEART
      }
    })
    .catch(() => {
      const errorMessage = document.getElementById('modal')
      console.log(errorMessage);
      errorMessage.className = 'show'

    setTimeout(() => {
      const errorMessage = document.getElementById('modal')
      console.log(errorMessage);
      errorMessage.className = 'hidden'}, 3000)}
    )}
  })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
