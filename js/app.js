let title = document.getElementById('title');
title.style.color = '#ff0000';
let content = document.querySelector('.content');
content.innerText += ' Sed vitae justo nec mauris sodales viverra.';
let list = document.querySelector('ul');
list.insertAdjacentHTML('beforeend', '<li class="list-item">Item 4</li>');
let listItem = document.querySelector('.list-item');
listItem.insertAdjacentHTML('beforebegin', '<li class="list-item">Item 0</li>');
let listItems = document.querySelectorAll('.list-item');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = 'bold';
}
