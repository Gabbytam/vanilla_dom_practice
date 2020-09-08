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
//change inner text of an element using .innerText
listItems[4].innerText= 'Jamboree sandwich at the Jambo-ree';

//create a NEW element 
//ex. create an image element, set to variable and use document.createElement('__elementtagname__')
const newPic= document.createElement('img');
//to give source for the new img element, use setAttribute and giving it a source
newPic.setAttribute('src', 'https://i.pinimg.com/originals/7b/88/c0/7b88c0a83d7cba04b5890e024a05ba28.jpg');
//to add element to your page, append it to an existing element, that is set to a variable, using appendChild
//console.log(divs[1]); //testing to see if you can gain access to second element set to variable divs
divs[1].appendChild(newPic);

//extra: when playing with CSS I was curious if I could style the size of the burrito image but I first set a class name to the new image and then in CSS I was able to use .burrito to style it
newPic.className= 'burrito';

//my attempt at the bonus: get all list items to change to color of choice
for(let i=0; i<listItems.length; i++){
    listItems[i].style.color= '#FFA07A'; //light salmon color
}

//removing an element: choose element to remove and set to a variable then using .remove()
const paragraph= document.querySelector('p');
//paragraph.remove();
