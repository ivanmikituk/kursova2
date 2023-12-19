window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollButton = document.getElementById("scrollBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
  } else {
      scrollButton.style.display = "none";
  }
}

// Плавний скролл вгору при кліці на кнопку
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    disableScroll: true, // [5]
    disableFocus: false, // [6]
    awaitCloseAnimation: false, // [7]
    debugMode: true // [8]
  });

var button = document.querySelector('.myButton');
button.addEventListener('click', function(){
  MicroModal.show('modal-1');    
});
 

