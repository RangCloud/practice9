let errorImg = document.getElementById("errorImg");
let msg = document.getElementById("Msg");

email.addEventListener("input", (e) => {
    mail = e.target.value;
    if(mail.length > 0){
        if (mail.match(/^[.\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
            
        } else {
            errorImg.style.display = 'block';
            msg.style.display = "block";
        }
    }
})