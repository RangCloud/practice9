let errorImg = document.getElementById("errorImg");
let msg = document.getElementById("Msg");

email.addEventListener("input", (e) => {
    mail = e.target.value;
    if(mail.length > 0){
        if (mail.match(/^[.\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
            errorImg.style.display = 'none';
            msg.style.display = 'none';
        } else {
            errorImg.style.display = 'block';
            msg.style.display = "block";
        }
    } else {
        errorImg.style.display = 'none';
            msg.style.display = 'none';
    }
})