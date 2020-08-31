// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName('LI');
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false,
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('myInput').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('Напишите что-нибудь!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    };
  }
}

//Добавил дату. Автоизменение на текущую дату.
const option = {
  year: 'numeric',
  weekday: 'long',
  month: 'long',
  day: 'numeric',
};
const dateElement = document.getElementById('date');
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('ru', option);

//Сохранение/получение текущего ToDo листа. Кнопка button_save
const button_save = document.getElementById('button_save');
button_save.onclick = () => {
  localStorage.setItem('SAVE', t);
  localStorage.getItem('SAVE');
};

//Удаление текущего ToDo листа. Кнопка button_delete
const button_delete = document.getElementById('button_delete');
button_delete.onclick = () => {
  localStorage.clear();
};
