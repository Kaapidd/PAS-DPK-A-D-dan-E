const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach((button) => {
  button.addEventListener('click', function () {
    this.classList.toggle('liked');

    if (this.classList.contains('liked')) {
      this.textContent = '❤'; 
    } else {
      this.textContent = '❤'; 
    }
  });
});
