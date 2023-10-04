let checkotp = JSON.parse(localStorage.getItem('otp'));

if(!checkotp){
    window.location.href="forget.html";
}