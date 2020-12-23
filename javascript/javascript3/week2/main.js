//One by one

const redCirclePromise = moveElement(document.querySelector("ul.marks li:nth-child(1)"), { x: 20, y: 300 });
const blueCirclePromise = moveElement(document.querySelector("ul.marks li:nth-child(2)"), { x: 400, y: 300 });
const greenCirclePromise = moveElement(document.querySelector("ul.marks li:nth-child(3)"), { x: 400, y: 20 });

function translateOneByOne() {
  const promise1 = new Promise(resolve => {
    setTimeout(() => resolve(redCirclePromise), 1000)
  })
    .then(() => {
      console.log("Red circle element has been moved");
    });
  const promise2 = new Promise(resolve => {
    setTimeout(() => resolve(blueCirclePromise), 3000)
  })
    .then(() => {
      console.log("Blue circle element has been moved");
    });
  const promise3 = new Promise(resolve => {
    setTimeout(() => resolve(greenCirclePromise), 5000)
  })
    .then(() => {
      console.log("Green circle element has been moved");
    });
}

translateOneByOne();

//All at once : Using Promise.all

async function translateAllAtOnce() {
  try {
    await Promise.all([redCirclePromise, blueCirclePromise, greenCirclePromise])
    console.log("all color circles moved and reached at a time");
  } catch (error) {
    console.log(error);
  }
}
translateAllAtOnce();


