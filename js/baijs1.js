function chuyenDoi() {
    const C = document.getElementById('inputC').value; 
    const F = (C * 9 / 5) + 32;
    document.getElementById('outputF').value = F;

}