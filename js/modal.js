var buttonAdd = document.querySelector('#open-modal')
var modal = document.querySelector('#modal')
var close = document.querySelector('#modal .header a')

buttonAdd.addEventListener('click', function () {
  modal.classList.remove('hide')
})

close.addEventListener('click', function () {
  modal.classList.add('hide')
})
