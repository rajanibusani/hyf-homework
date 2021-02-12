console.log("inside warmup file");
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getDiameter(){
        const diameter = 2* this.radius;
        return diameter;
    }
    getCircumference(){
       const circumference = 2*Math.PI*this.radius;
       return circumference.toFixed(2);
    } 
    getArea(){
        const area= Math.PI*Math.pow(this.radius, 2);
        return area.toFixed(2);
    }
}

const circle1 = new Circle(10);
console.log(`circle1 with radius ${circle1.radius}, Diameter : ${circle1.getDiameter()}, 
        circumference : ${circle1.getCircumference()},
        area : ${circle1.getArea()}`)
const circle2 = new Circle(15);
console.log(`circle2 with radius ${circle2.radius},Diameter : ${circle2.getDiameter()}, 
        circumference : ${circle2.getCircumference()},
        area : ${circle2.getArea()}`)        




