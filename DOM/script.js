//instructing the console to output the properties of the document object in a structured manner.
console.dir(document);

//Verifying the type
console.log(typeof(document));

//to see the title
console.log(document.title);

//to access the domain
console.log(document.domain);

//to access the URL
console.log(document.URL);

//to show the head section, type of head is object
console.log(document.head);

//can change any object(every element of html)
document.title = 'Play with DOM';
console.log(document.title);

//to show all the object
for(let element of document.all)
{
    console.log(element);
}

//to access all the images/links/forms of the document
console.log(document.images);
console.log(document.links);
console.log(document.forms);

//Get element by ID
console.log(document.getElementById('new-task'));

//want to change the textContent of the id of header
let headerElement = document.getElementById('header');
//headerElement.textContent = 'To-Do-Apps';
headerElement.innerText = 'To-Do-App';

//shows the same output but
//innerText prints the way it's showing in browser
console.log(headerElement.innerText);

//testContent prints the way it has been set
console.log(headerElement.textContent);

//to find the full html in the type of text
console.log(headerElement.innerHTML);

//we can also change the style of the element
headerElement.style.fontStyle = 'italic';

//access all the items class and change the color of them
let items = document.getElementsByClassName('item');
for(let i = 0; i < items.length; i++)
{
    items[i].style.color = 'blue';
}

//get element by tag name
let item1 = document.getElementsByTagName('li');
console.log(item1);


//query selector
