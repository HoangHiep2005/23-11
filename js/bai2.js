function calculateRectangle() {
    const dai = document.getElementById('dai').value;
    const rong = document.getElementById('rong').value;
    const area = dai * rong;
    document.getElementById('rectangleResult').textContent = 
        `Diện tích hình chữ nhật: ${area}`;
}

function calculateTriangle() {
    const canhday = document.getElementById('canhday').value;
    const cao = document.getElementById('cao').value;
    const area = (canhday * cao) / 2;
    document.getElementById('triangleResult').textContent = 
        `Diện tích hình tam giác: ${area}`;
}

function calculateSquare() {
    const canh = document.getElementById( 'canh').value;
    const area = canh * canh;
    document.getElementById('squareResult').textContent = 
        `Diện tích hình vuông: ${area}`;
}
