var nhaDan = "nhaDan"
var doanhNghiep = "doanhNghiep"

var maKhachHangEl = document.getElementById("maKhachHang")
var loaiKhachHangEl = document.getElementById("loaiKhachHang")
var soKetNoiEl = document.getElementById("soKetNoi")
var soKenhEl = document.getElementById("soKenh")
var tinhTienBtnEl = document.getElementById("tinhTienBtn")
var ketQuaEl = document.getElementById("ketQua")


function disableSoKetNoiInput() {
    var loaiKhachHang = loaiKhachHangEl.value
    if(loaiKhachHang == nhaDan){
        soKetNoiEl.disabled = true
    }
    else{
        soKetNoiEl.disabled = false
    }
}
  

function getPhiXuLyHoaDon(loaiKhachHang){
    if (loaiKhachHang == nhaDan){
        return 4.5
    }
    if (loaiKhachHang == doanhNghiep){
        return 15
    }
}
function getPhiDichVuCoBan(loaiKhachHang){
    var soKetNoi = soKetNoiEl.value * 1
    if (loaiKhachHang == nhaDan){
        return 20.5
    }
    if (loaiKhachHang == doanhNghiep){
        if(soKetNoi<=10){
            return 75
        }
        else{
            return (75 + (soKetNoi - 10) * 5)
        }
    }
}
function getPhiThueKenhCaoCap(loaiKhachHang){
    var soKenh = soKenhEl.value * 1
    if (loaiKhachHang == nhaDan){
        return (7.5 * soKenh)
    }
    if (loaiKhachHang == doanhNghiep){
        return (50 * soKenh)
    }
}



tinhTienBtnEl.addEventListener('click', function(){
    var maKhachHang = maKhachHangEl.value
    var customerValue = document.getElementById('loaiKhachHang').value

    var phiXuLyHoaDon = getPhiXuLyHoaDon(customerValue)
    var phiDichVuCoBan = getPhiDichVuCoBan(customerValue)
    var phiThueKenhCaoCap = getPhiThueKenhCaoCap(customerValue)

    var tienPhaiTra = phiDichVuCoBan + phiXuLyHoaDon + phiThueKenhCaoCap
    ketQuaEl.innerText = "Khách hàng" + " " + maKhachHang + " " + "cần thanh toán số tiền: " + tienPhaiTra + "$"
})