let errorImg = document.getElementById("errorImg");

email.addEventListener("input", (e) => {
    mail = e.target.value;
    if(mail.length > 0){
        if (mail.match(/^[.\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
            errorImg.style.display = 'block';
        }
    }
})