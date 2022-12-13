window.onload = () => {
    var btn = document.getElementById("create-account-button");
    var close_register = document.getElementById("close-register");
    var overlay = document.getElementById("overlay");
    
    var popup = document.getElementById("register-popup");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.style.display = "block";
        popup.style.display = "block";
    })

    close_register.addEventListener("click", () =>{
        popup.style.display = "none";
        overlay.style.display = "none";
    })
    overlay.addEventListener("click", () =>{
        popup.style.display = "none";
        overlay.style.display = "none";
    })

    
}
