const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListerner('click', () => container.classList.add('show-nav'))

close.addEventListerner('click', () => container.classList.remove('show-nav'))
