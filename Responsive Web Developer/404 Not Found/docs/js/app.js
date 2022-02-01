const icon = document.getElementById("icon")
const css = document.getElementById('style')

let lightMode = true;

const lightIcon = '<i class="far fa-sun"></i>';
const darkIcon = '<i class="far fa-moon"></i>';

if (lightMode) {
    icon.innerHTML = darkIcon
} else {
    icon.innerHTML = lightIcon
}

const styleChange = (sheet) => {
    css.setAttribute("href", sheet)
}

const toggle = () => {
    icon.addEventListener("click", () => {
        lightMode = !lightMode;
        if (lightMode) {
            icon.innerHTML = darkIcon
            styleChange("css/style.css")
        } else {
            icon.innerHTML = lightIcon
            styleChange("css/darkStyles.css")
        }
    })
    
}

toggle()