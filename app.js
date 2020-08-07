// SELECTORS //
const currentBalance = document.querySelector(".current-balance h2")
const income = document.querySelector(".income h3")
const expense = document.querySelector(".expense h3")
const history = document.querySelector(".history")
const expIncBtnSlider = document.querySelector(".exp-inc-btn-slider")
const descInput = document.querySelector(".desc-input")
const amntInput = document.querySelector(".amnt-input")


// BUTTONS //
const incBtn = document.querySelector(".inc-btn")
const expBtn = document.querySelector(".exp-btn")
const addTransBtn = document.querySelector(".add-trans-btn")


// VARIABLES //
var addExpense = true


// EVENT LISTENER //
expBtn.addEventListener("click", () => {
    expIncBtnSlider.style.transform = "translateX(100%)"
    expIncBtnSlider.style.backgroundColor = "rgba(180, 0, 0, 0.5)"

    addExpense = false
})
incBtn.addEventListener("click", () => {
    expIncBtnSlider.style.transform = "translateX(0%)"
    expIncBtnSlider.style.backgroundColor = "rgba(0, 128, 0, 0.5)"

    addExpense = true
})



// FUNCTIONS //

