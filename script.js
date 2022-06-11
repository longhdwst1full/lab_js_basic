// let name_ = document.querySelector("#name1");
//     let email_ = document.querySelector(".email")
//     let sdt_ = document.querySelector(".sdt")
//     let user_ = document.querySelector(".user")
//     let passer_ = document.querySelector(".pass__")
//     let repass_ = document.querySelector(".Repass")
//     let contact = document.querySelectorAll("input[type='radio']")
// document.querySelector(".form_btn").addEventListener("submit",function() {
//     // e.preventDefault();
    
//     let flage = true;
//     // name
//     if(name_.value == "") {
//     errol_loi("error_name", "Bạn chưa nhập họ tên")
//     flage = false;
// } else {
//     errol_loi("error_name", "")
// }
// // email

// if (email_.value == "") {
//     errol_loi("error_email", "Bạn chưa nhập email")
//     flage = false;
// } else {
//     errol_loi("error_email", "")
// }

// // sđt
// if (sdt_.value == "") {
//     errol_loi("error_sđt", "Bạn chưa nhập vào số điện thoại")
//     flage = false;
// } else {
//     errol_loi("error_sdt", "")
// }
// // user
// if (user_.value == "") {
//     errol_loi("error_user", "Bạn chưa nhập User")
//     flage = false;
// }
// else if (user_.value.length < 8) {
//     errol_loi("error_user", "User phải ít nhất 8 kí tự")
//     flage = false;
// }
// else {
//     errol_loi("error_user", "")
// }
// // pass
// if (passer_.value == "") {
//     errol_loi("error_pass", "Bạn chưa nhập Passwork")
//     flage = false;
// }
// else {
//     errol_loi("error_pass", "")
// }
// //repas pass
// if (repass_.value == "") {
//     errol_loi("error_Repass", "Bạn chưa nhập Repass")
//     flage = false;
// }
// else if (repass_.value !== pass_.value) {
//     errol_loi("error_Repass", "Bạn  nhập lại mật khẩu sai rồi")
//     flage = false;
// }
// else {
//     errol_loi("error_Repass", "")
// }


// if (flage == false) {
//     return false
// } else {
//     alert("Đăng kí thành công");
//     return true;
// }
// }
// )
// function errol_loi(element, msg) {
//     document.getElementById(element) = msg;
//     document.getElementById(element).style.color = "red";
// }

// document.querySelector(".form_btn").onSubmit = function(e){
//     e.preventDefault();
//     let name_hoten= document.querySelector("#name1");
//     if(name_hoten.value==""){
//         alert("lỗi")
//     }
// }
function kiemtra(){
    let name_hoten= document.querySelector("#name1");
    if(name_hoten.value.length==0){
        alert("lỗi");
        return false;
    }
}kiemtra()