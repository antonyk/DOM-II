// Your code goes here
// console.log("something!")



// IDEAS:
// analytics - user hovers over a mouse, save data
// 


function clickEventHandler(event) {
  event.preventDefault();
  // event.stopPropagation();
  console.log(`${event.type} !!!`);
  console.log(event.target);
  console.log(event.currentTarget);
}

homeLink.addEventListener(
  'click', // string with the name of the event
  clickEventHandler
);

document.querySelector('nav').addEventListener(
  'click',
  clickEventHandler, true
);
document.querySelector('nav').addEventListener(
  'click',
  clickEventHandler
);
document.querySelector('nav').addEventListener(
  'click',
  clickEventHandler
);

document.querySelector('header').addEventListener(
  'click',
  clickEventHandler
);

// document.body.addEventListener(
//     'click',
//     clickEventHandler
// );
  
// document.addEventListener(
//   'click',
//   clickEventHandler
// );

// window.addEventListener(
//   'click',
//   clickEventHandler
// );



// javascript pocket edition by o'reiley
//

