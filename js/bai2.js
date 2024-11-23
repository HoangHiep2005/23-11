function calculateRectangle() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const area = length * width;
    document.getElementById('rectangleResult').textContent = 
        `Diện tích hình chữ nhật: ${area}`;
}

function calculateTriangle() {
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    const area = (base * height) / 2;
    document.getElementById('triangleResult').textContent = 
        `Diện tích hình tam giác: ${area}`;
}

function calculateSquare() {
    const side = document.getElementById('side').value;
    const area = side * side;
    document.getElementById('squareResult').textContent = 
        `Diện tích hình vuông: ${area}`;
}
