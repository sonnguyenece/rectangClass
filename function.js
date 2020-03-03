function rectangle(length, width, color) {
    this.length = length;
    this.width = width;
    this.color = color;
    this.getPeri = function () {
        return 2 * (length + width);
    };
    this.getArea = function () {
        return length * width;
    };
    this.getColor = function () {
        return color;
    };
    this.setLength = function (length) {
        this.length = length;
    };
    this.setWidth = function (width) {
        this.width = width;
    };
    this.display = function (length, width, color) {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(50, 50, width, length);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

let length = parseFloat(prompt("Input length "));
let width = parseFloat(prompt("Input width "));
let color = prompt("Input color");
let rec = new rectangle(width, length, color);
rec.display(width, length, color);
setTimeout(function() {alert("Perimeter: " + rec.getPeri() + " Area: " + rec.getArea())},200)
