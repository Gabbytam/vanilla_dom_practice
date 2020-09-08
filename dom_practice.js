console.log('Tootie fruity');

const popHeader= document.getElementById('pop');
console.log(popHeader);

const h2= document.querySelector('h2');
console.log(h2);

//to add text to an existing DOM element, you first have to create the text node and save it to a variable and then use appendChild to add it to the element of your choice
const excited= document.createTextNode('!!!');
h2.appendChild(excited);

const divs= document.getElementsByClassName('container');
console.log(divs);

//in order to be able to set style or maniplate an element, set element of choice to a variable 
//changing style (color) of an existing element using .style.color and setting it equal to color of choice, in ''
const listItems= document.querySelectorAll('li'); //need query selector ALL so that we can later choose, using [] and index number for the specific item
listItems[2].style.color= '#6495ED'; //cornflower blue 
listItems[4].innerText= 'Jamboree sandwich at the Jambo-ree';