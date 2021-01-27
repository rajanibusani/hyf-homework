//One by one
const red = document.querySelector("ul.marks li:nth-child(1)");
const blue = document.querySelector("ul.marks li:nth-child(2)");
const green = document.querySelector("ul.marks li:nth-child(3)");

function translateOneByOne() {
  moveElement(red, { x: 20, y: 300 })
    .then(() => {
      console.log('Red circle moved');
      return moveElement(blue, { x: 400, y: 300 });
    })
    .then(() => {
      console.log('Blue circle moved');
      return moveElement(green, { x: 400, y: 20 });
    })
    .then(() => {
      console.log('Green circle moved');
    });
}

translateOneByOne();


//All at once : Using Promise.all

async function translateAllAtOnce() {
  try {
    await Promise.all([moveElement(red, { x: 20, y: 300 }), moveElement(blue, { x: 400, y: 300 }), moveElement(green, { x: 400, y: 20 })])
    console.log("All color circles moved and reached at a time");
  } catch (error) {
    console.log(error);
  }
}
//translateAllAtOnce();

