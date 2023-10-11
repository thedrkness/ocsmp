const accordion = document.getElementsByClassName('accordionItem');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('is-open')
  })
}