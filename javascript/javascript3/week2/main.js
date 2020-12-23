//One by one
function translateOneByOne() {
  const promise1 = new Promise(resolve => {
    setTimeout(() => resolve(moveElement(document.querySelector("ul.marks li:nth-child(1)"), { x: 20, y: 300 })), 1000)
  })
    .then(() => {      
      console.log("Red circle element has been moved");
    });
  const promise2 = new Promise(resolve => {
    setTimeout(() => resolve(moveElement(document.querySelector("ul.marks li:nth-child(2)"), { x: 400, y: 300 })), 3000)
  })
    .then(() => {
      console.log("Blue circle element has been moved");
    });
  const promise3 = new Promise(resolve => {
    setTimeout(() => resolve(moveElement(document.querySelector("ul.marks li:nth-child(3)"), { x: 400, y: 20 })), 5000)
  })
    .then(() => {
      console.log("Green circle element has been moved");
    });
}

translateOneByOne();

//All at once : Using Promise.all

async function translateAllAtOnce() {
  try {
  await Promise.all(
    [moveElement(document.querySelector("ul.marks li:nth-child(1)"), { x: 20, y: 300 }), 
     moveElement(document.querySelector("ul.marks li:nth-child(2)"), { x: 400, y: 300 }), 
     moveElement(document.querySelector("ul.marks li:nth-child(3)"), { x: 400, y: 20 })])
   console.log("all color circles moved and reached at a time");
  } catch (error) {
    console.log(error);
  }
}
//translateAllAtOnce();


