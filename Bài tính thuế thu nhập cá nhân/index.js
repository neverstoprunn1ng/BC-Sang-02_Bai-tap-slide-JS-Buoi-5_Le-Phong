
var hoTenEl = document.getElementById("hoTen")
var tongThuNhapNamEl = document.getElementById("tongThuNhapNam")
var soNguoiPhuThuocEl = document.getElementById("soNguoiPhuThuoc")
var tinhThueBtnEl = document.getElementById("tinhThueBtn")
var ketQuaEl = document.getElementById("ketQua")


tinhThueBtnEl.addEventListener('click', function(){
    var tongThuNhapNam = tongThuNhapNamEl.value * 1
    var soNguoiPhuThuoc = soNguoiPhuThuocEl.value * 1
    var hoTen = hoTenEl.value
    var thuNhapChiuThue = tongThuNhapNam - 4000000 - (soNguoiPhuThuoc*1600000)
    var thueSuat

    if(thuNhapChiuThue<=60000000){
        thueSuat = 5/100
    }
    if(thuNhapChiuThue>60000000 && thuNhapChiuThue<=120000000){
        thueSuat = 10/100
    }
    if(thuNhapChiuThue>120000000 && thuNhapChiuThue<=210000000){
        thueSuat = 15/100
    }
    if(thuNhapChiuThue>210000000 && thuNhapChiuThue<=384000000){
        thueSuat = 20/100
    }
    if(thuNhapChiuThue>384000000 && thuNhapChiuThue<=6240000000){
        thueSuat = 25/100
    }
    if(thuNhapChiuThue>624000000 && thuNhapChiuThue<=960000000){
        thueSuat = 30/100
    }
    if(thuNhapChiuThue>960000000){
        thueSuat = 35/100
    }
    

    var thueThuNhapCaNhan = thuNhapChiuThue * thueSuat
    ketQuaEl.innerText = "Thuế thu nhập cá nhân bạn " + hoTen + " phải trả là: " + thueThuNhapCaNhan + " vnd"














})
