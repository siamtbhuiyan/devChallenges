const plus1 = document.querySelector(".item1-plus"),
minus1 = document.querySelector(".item1-minus"),
num1 = document.querySelector(".item1-num");
curr1 = document.querySelector(".current1-price")
prev1 = document.querySelector(".previous1-price")
ship = document.querySelector(".priceS")
total = document.querySelector(".priceT")
const plus2 = document.querySelector(".item2-plus"),
minus2 = document.querySelector(".item2-minus"),
num2 = document.querySelector(".item2-num");
curr2 = document.querySelector(".current2-price")
prev2 = document.querySelector(".previous2-price")
let a1 = 1;
curr1Val = 54.99
prev1Val = 94.99
let shipping = 9.5
let a2 = 1;
curr2Val = 74.99
prev2Val = 124.99
plus1.addEventListener("click", ()=>{
    a1++;
    a1 = (a1 < 10) ? "0" + a1 : a1;
    num1.innerText = a1;
    ship.innerText = "$" + (shipping * (parseFloat(a1) + parseFloat(a2)));
    total.innerText = "$" + (parseFloat((ship.innerText).slice(1)) + (curr1Val * a1) + (curr2Val * a2)).toFixed(2)
});

minus1.addEventListener("click", ()=>{
    if(a1 > 1){
        a1--;
        a1 = (a1 < 10) ? "0" + a1 : a1;
        num1.innerText = a1;
        ship.innerText = "$" + (shipping * (parseFloat(a1) + parseFloat(a2)));
        total.innerText = "$" + (parseFloat((ship.innerText).slice(1)) + (curr1Val * a1) + (curr2Val * a2)).toFixed(2)
    }
});

plus2.addEventListener("click", ()=>{
    a2++;
    a2 = (a2 < 10) ? "0" + a2 : a2;
    num2.innerText = a2;
    ship.innerText = "$" + (shipping * (parseFloat(a1) + parseFloat(a2)));
    total.innerText = "$" + (parseFloat((ship.innerText).slice(1)) + (curr1Val * a1) + (curr2Val * a2)).toFixed(2)
    });

minus2.addEventListener("click", ()=>{
    if(a2 > 1){
    a2--;
    a2 = (a2 < 10) ? "0" + a2 : a2;
    num2.innerText = a2;
    ship.innerText = "$" + (shipping * (parseFloat(a1) + parseFloat(a2)));
    total.innerText = "$" + (parseFloat((ship.innerText).slice(1)) + (curr1Val * a1) + (curr2Val * a2)).toFixed(2)
    }
});

const form = document.querySelector("#form");
const message = document.querySelector(".message")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form[0].value) {
        message.style.display = "block"
        message.innerText = "Please Enter An E-mail"
        message.style.color = "#dc3545"
        message.style.backgroundColor = "#f8d7da"
        message.style.padding = "20px 30px"
        setTimeout(() => {
            message.style.display = "none"
        }, 5000)
    } else if (!form[1].value) {
        message.style.display = "block"
        message.innerText = "Please Enter A Phone Number"
        message.style.color = "#dc3545"
        message.style.backgroundColor = "#f8d7da"
        message.style.padding = "20px 30px"
        setTimeout(() => {
            message.style.display = "none"
        }, 5000)
    } else if (!form[2].value) {
        message.style.display = "block"
        message.innerText = "Please Enter A Name"
        message.style.color = "#dc3545"
        message.style.backgroundColor = "#f8d7da"
        message.style.padding = "20px 30px"
        setTimeout(() => {
            message.style.display = "none"
        }, 5000)
    } else if (!form[3].value) {
        message.style.display = "block"
        message.innerText = "Please Enter An Address"
        message.style.color = "#dc3545"
        message.style.backgroundColor = "#f8d7da"
        message.style.padding = "20px 30px"
        setTimeout(() => {
            message.style.display = "none"
        }, 5000)
    } else if (!form[4].value) {
        message.style.display = "block"
        message.innerText = "Please Enter A City"
        message.style.color = "#dc3545"
        message.style.backgroundColor = "#f8d7da"
        message.style.padding = "20px 30px"
        setTimeout(() => {
            message.style.display = "none"
        }, 5000)
    } else if (form[5].value === "Your country...") {
        message.style.display = "block"
        message.innerText = "Please Select A Country"
        message.style.color = "#dc3545"
        message.style.backgroundColor = "#f8d7da"
        message.style.padding = "20px 30px"
        setTimeout(() => {
            message.style.display = "none"
        }, 5000)
    } else if (!form[6].value) {
        message.style.display = "block"
        message.innerText = "Please Enter A Postal Code"
        message.style.color = "#dc3545"
        message.style.backgroundColor = "#f8d7da"
        message.style.padding = "20px 30px"
        setTimeout(() => {
            message.style.display = "none"
        }, 5000)
    } else {
        message.style.display = "block"
        message.innerText = "Form Submitted"
        message.style.color = "#28a745"
        message.style.backgroundColor = "#d4edda"
        message.style.padding = "20px 30px"
        setTimeout(() => {
            message.style.display = "none"
            form.submit()
        }, 5000)
    }
})