"use strict";

// let val;


// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;


// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');


// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//     console.log(script.getAttribute('src'));
// });
// console.log(val);


// //--document.getElementById()
// console.log(document.getElementById('task-title'));

// //--get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className); //kung nag declare sa html mugawas ang class

// const taskTitle = document.getElementById('task-title');
// //-- Change styling i call lang ang taskTitle
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// // document.getElementById('task-title').style.textAlign = 'center';

// //-- change content
// taskTitle.textContent ='Task list';
// document.getElementById('task-title').innerText ='My list';
// document.getElementById('task-title').innerHTML ='<span style="color:red">Task list</span></span>';


// //--document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));


// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').innerHTML = 'Hello  world';
// document.querySelector('li:nth-child(odd)').style.background = 'grey';


// //--document.getElementsbyClassname
// const items = document.getElementsByClassName('collection-item');
// console.log(items)
// console.log(items[0])
// items[0].style.color = 'red';
// items[3].innerHTML =  'Hello';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);



// //--document.getElementsbyTagName
// const lis = document.getElementsByTagName('li');
// console.log(lis)
// console.log(lis[0]);
// lis[1].style.color = 'pink';
// lis[0].innerHTML = 'Hello ang pogi mo ';

// // convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// for (let li in lis){
//     console.log (`${lis} : ${lis[li]}`);
// }
// // console.log(lis);

// //--document.querySelectorAll()
// const items  = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item , index){
//     item.textContent = `${index} : hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// // for each ang pag loop
// liOdd.forEach(function(li , index){
//     li.style.background = '#ccc';
    
// });


// -- for loop
// for (let  i = 0 ; i < liEven.length ; i++){
//     liEven[i].style.background = 'wheat';
// }

// for (let i in liEven){
// liEven[i].innerHTML = 'Hello good moring';
// }
// ---pwede for off
// for (let i of liEven){
//     i.style.background = 'wheat';
//     i.innerHTML = 'OK PO'
// }
// console.log(items);


/// --Traversing The DOM
let val ;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//-- Get child nodes 
// val = list.childNodes;


// --Get  children element nodes mas ok ni gamiton kesa sa childNodes
// val  = list.children;
// val  = list.children[1];
// list.children[3].textContent = 'Hello'

// //-- Children of children
// // list.children[3].children[0].id = 'test-link';
// // val = list.children[3].children[0];

// //--first child
// val = list.firstChild;
// val = list.firstElementChild;

// //--last child
// val = list.lastChild;
// val = list.lastElementChild;

// //--Count child elements
// val  = list.childElementCount;

// //-- Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;


// // -- get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;


// // -- get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;


// console.log(val);


//--Create element
const li = document.createElement('li');

// -- add class
li.className = 'collection-item';
// -- add id
li.id = 'new-item';

// -- set attribute
li.setAttribute('Tittle', 'New item');

//- create text node and append
li.appendChild(document.createTextNode('hello world'));

// create new link element
const link = document.createElement('a')
// add claseses
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '  <i class="fa fa-remove"></i>';

//append link into li
li.appendChild(link);

//-- append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);