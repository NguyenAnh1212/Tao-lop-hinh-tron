// tạo lớp
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        return Math.PI * radius * radius;
    }
}
// Tạo đối tượng.
let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);