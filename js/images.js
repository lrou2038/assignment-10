colors.events('container', {

// the list of colors
const colors = ['#e0fbfc', '#f0544f', '#d8f793', '#ffdc5e',
  '#ff69eb', '#16001e', '#4d90789', '#b4436c', '#c589e8',
  '#4c191b', '#92b4f4', '#0e402d'
]

// designate the div
const div = document.querySelector('#colors');

// the event listener
div.onclick = (e) => {
  // get a new random number
  let num = Math.floor(Math.random() * colors.length);
  // change box color
  e.target.style.backgroundColor = colors[num];
}
}

// second interactive event //

pictures.events('container2') {

let firstImage = document.querySelector('#candle');
let secondImage = document.querySelector('#fire');

div.onclick = () => {
   candle.setAttribute('src','/images/fire.jpg');
};

candle.onclick = () => {
   candle.setAttribute('src','/images/fire.jpg');
};

firstImage.onclick = () => {
  if (firstImage.getAttribute('src') === '/images/candle.jpg')
  {
      firstImage.setAttribute('src','/images/fire.jpg');
  } else {
    firstImage.setAttribute('src', '/images/candle.jpg');
  }
}
}
