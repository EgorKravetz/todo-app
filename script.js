const main = document.querySelector('main');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const list = document.querySelector('ul');
const btn = document.querySelector('button');

/*
0) Git, Webpack
1) Создать туду из форм ввода
2) Внести данные в отдельный объект
3) Продумать доступ к каждому отдельному объекту (через array)
4) Добавить кнопку удаления с экрана и БД для каждого туду
5) Добавить приоритетность (изменение положения в списке)
6)
*/
function createTodo() {
    const paragraphTitle = document.createElement('p');
    paragraphTitle.textContent = title.value;
     main.appendChild(paragraphTitle);

     const paragraphDesc = document.createElement('p');
    paragraphDesc.textContent = description.value;
     main.appendChild(paragraphDesc);

     const paragraphDate = document.createElement('p');
    paragraphDate.textContent = date.value;
     main.appendChild(paragraphDate);

     title.value = '';
     description.value = '';
     date.value = '';
    }

 btn.addEventListener('click', createTodo)

