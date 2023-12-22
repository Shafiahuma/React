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