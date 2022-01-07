var soKwTieuThuEl = document.getElementById("soKwTieuThu")
var tienPhaiTraBtnEl = document.getElementById("tienPhaiTraBtn")
var ketQuaEl = document.getElementById("ketQua")
var tenKhachHangEl = document.getElementById("tenKhachHang")

var giaCuoc50KwFirst = 500
var giaCuoc50KwSecond = 650
var giaCuoc100KwThird = 850
var giaCuoc150KwFourth = 1100
var giaCuocLast = 1300


tienPhaiTraBtnEl.addEventListener('click', function(){
    var tienPhaiTra
    var soKwTieuThu = soKwTieuThuEl.value * 1
    var tenKhachHang = tenKhachHangEl.value
    if(soKwTieuThu<=50){
        tienPhaiTra = soKwTieuThu * giaCuoc50KwFirst
    }
    if(soKwTieuThu>50 && soKwTieuThu<=100){
        tienPhaiTra = 50 * giaCuoc50KwFirst + (soKwTieuThu - 50) * giaCuoc50KwSecond
    }
    if(soKwTieuThu>100 && soKwTieuThu<=200){
        tienPhaiTra = 50 * giaCuoc50KwFirst + 50 * giaCuoc50KwSecond + (soKwTieuThu - 100) * giaCuoc100KwThird
    }
    if(soKwTieuThu>200 && soKwTieuThu<=350){
        tienPhaiTra = 50 * giaCuoc50KwFirst + 50 * giaCuoc50KwSecond + 100 * giaCuoc100KwThird + (soKwTieuThu - 200) * giaCuoc150KwFourth
    }
    if(soKwTieuThu>350){
        tienPhaiTra = 50 * giaCuoc50KwFirst + 50 * giaCuoc50KwSecond + 100 * giaCuoc100KwThird + 150 * giaCuoc150KwFourth + (soKwTieuThu - 350) * giaCuocLast
    }

    ketQuaEl.innerText = "Khách hàng " + tenKhachHang + " cần thanh toán số tiền là: " + tienPhaiTra + " d" 

}













)