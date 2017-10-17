// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button, Returns the first Element within the document that matches the specified selector
var closeBtn = document.querySelector(".closeBtn");

// self invoking function
(function waitForEvents(){
    // open click
    modalBtn.addEventListener('click', openModal);
    // close click
    closeBtn.addEventListener('click', closeModal);
    // outside click
    window.addEventListener('click', outsideClick);
})();

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}