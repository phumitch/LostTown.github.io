// ฟังก์ชันแสดงป๊อปอัพ
function showPopup(message) {
    var popup = document.getElementById('popup');
    var popupMessage = document.getElementById('popup-message');
    
    popupMessage.textContent = message;  // เปลี่ยนข้อความในป๊อปอัพ
    popup.style.display = 'block';  // แสดงป๊อปอัพ

    // ซ่อนป๊อปอัพหลังจาก 3 วินาที (3000 มิลลิวินาที)
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
}

// เพิ่ม event listener สำหรับปุ่มที่ไม่มีลิงก์
document.getElementById('doctor').addEventListener('click', function(event) {
    event.preventDefault();  // ป้องกันไม่ให้เกิดการทำงานอะไรหลังจากคลิก
    showPopup("ปุ่มหมอยังไม่ได้ตั้งลิงก์");
});

document.getElementById('technician').addEventListener('click', function(event) {
    event.preventDefault();  // ป้องกันไม่ให้เกิดการทำงานอะไรหลังจากคลิก
    showPopup("ปุ่มช่างยังไม่ได้ตั้งลิงก์");
});

document.getElementById('chef').addEventListener('click', function(event) {
    event.preventDefault();  // ป้องกันไม่ให้เกิดการทำงานอะไรหลังจากคลิก
    showPopup("ปุ่มเชฟยังไม่ได้ตั้งลิงก์");
});
