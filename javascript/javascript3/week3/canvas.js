const canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        const ctx = canvas.getContext("2d")
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, this.fillColor)
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill()
    }

}
//To create random circles around the cursor
document.body.addEventListener('mousemove', function (event) {
    //console.log(event)
    let x = Math.floor(event.clientX);
    let y = Math.floor(event.clientY);  
    let r = Math.floor(Math.random() * 100);
        
    //randomizing colors values
    let redValue = Math.floor(Math.random() * 255);
    let greenValue = Math.floor(Math.random() * 255);
    let blueValue = Math.floor(Math.random() * 255);
    const circleColor = `rgb(${redValue},${greenValue},${blueValue})`
    const circle = new Circle(x, y, r, 0, Math.PI * 2, circleColor);    
    circle.draw();    
})