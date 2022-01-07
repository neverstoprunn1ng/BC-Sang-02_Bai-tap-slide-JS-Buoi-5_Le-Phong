/* 
    Input: Điểm chuẩn, điểm 3 môn, điểm khu vực ưu tiên, điểm đối tượng ưu tiên

    Các bước xử lý:
         Bước 1: tạo biến diemChuan, diemTongKet, diem1, diem2, diem3, diemKhuVuc, diemDoiTuong, ketQuaBtnEl, xuatKetQuaEl   
         Bước 2: nhập và gán giá trị cho diemChuan, diem1, diem2, diem3, diemKhuVuc, diemDoiTuong, ketQuaBtnEl, xuatKetQuaEl
         Bước 3: tạo hàm và gắn sự kiện click cho nút kết quả
         Bước 4: tính điểm tổng kết theo công thức: diemTongKet = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong
         Bước 5: so sánh điểm tổng kết với điểm chuẩn
         Bước 6: xuất ra kết quả theo yêu cầu
        

    Output: Cho biết thí sinh đậu hay rớt
            Tổng điểm đạt được
*/

var diemChuanEl = document.getElementById("diemChuanTxt")
var diem1El = document.getElementById("diem1Txt")
var diem2El = document.getElementById("diem2Txt")
var diem3El = document.getElementById("diem3Txt")
var diemKhuVucEl = document.getElementById("diemKhuVuc")
var diemDoiTuongEl = document.getElementById("diemDoiTuong")
var ketQuaBtnEl = document.getElementById("ketQuaBtn")
var xuatKetQuaEl = document.getElementById("xuatKetQua")


ketQuaBtnEl.addEventListener('click', function(){

var diemChuan = diemChuanEl.value * 1
var diem1 = diem1El.value * 1
var diem2 = diem2El.value * 1
var diem3 = diem3El.value * 1
var diemKhuVuc = diemKhuVucEl.value * 1
var diemDoiTuong = diemDoiTuongEl.value * 1     
var diemTongKet = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong

     if (diemTongKet>=diemChuan && diem1>0 && diem2>0 && diem3>0){
          xuatKetQuaEl.innerText = "Đậu" + " - " + "Tổng điểm: " + diemTongKet 
     }
     else{
          xuatKetQuaEl.innerText = "Rớt" + " - " + "Tổng điểm: " + diemTongKet 
     }
})