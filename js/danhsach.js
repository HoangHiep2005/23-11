function renderClassList() {
    const classList = [
        { name: "Ngô Hoàng Hiệp", gender: "Nam", birthplace: "Hà Tây" },
        { name: "Nguyễn Gia Bảo", gender: "Nam", birthplace: "Bắc Giang" },
        { name: "Hoàng Minh Quyết", gender: "Nam", birthplace: "Hà Tây" },
        { name: "Vũ Đức Thắng", gender: "Nam", birthplace: "Quảng Ninh" },
        { name: "Trần Trường Giang", gender: "Nam", birthplace: "Hà Tây" },
        { name: "Lưu Đức Anh Dũng", gender: "Nam", birthplace: "Hải Dương" },
        { name: "Nguyễn Đình Đức Thịnh", gender: "Nam", birthplace: "Thanh Hóa" },
        { name: "Bùi Viết Đạt", gender: "Nam", birthplace: "Hà Nội" },
        { name: "Nguyễn Ngọc Phước", gender: "Nam", birthplace: "Hà Nam" }
    ];
    const listContainer = document.getElementById("baobebong");
    if (!listContainer) {
        console.error("Không tìm thấy phần tử HTML để hiển thị danh sách.");
        return;
    }
    classList.forEach((member) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${member.name} - ${member.gender} - ${member.birthplace}`;
        listContainer.appendChild(listItem);
    });
}
document.addEventListener("DOMContentLoaded", renderClassList);