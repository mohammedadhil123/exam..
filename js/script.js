
logo = document.getElementById("logo")
left = document.getElementById("left")
hide  = document.getElementById("hide_logo")

hide.addEventListener("click", ()=> {
    left.style.display = "block"
    hide.style.display  ="none"

    logo.addEventListener("click", () => {
        left.style.display = "none";
    })
    logo.addEventListener("click", () => {
        hide.style.display = "block"
    })
})