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
var expenseAmount = 0
var incomeAmount = 0
var currentBalanceAmount = 0


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
addTransBtn.addEventListener("click", addTransaction)
history.addEventListener("click", delTransaction)


// FUNCTIONS //
function addTransaction() {
    if (descInput.value.length !== 0 && amntInput.value.length !== 0) {
        if (addExpense) {
            const historyElementPlus = document.createElement("div")
            historyElementPlus.classList.add("history-element-plus")

            const historyElementInsideDiv = document.createElement("div")
            historyElementPlus.appendChild(historyElementInsideDiv)

            const delBtn = document.createElement("button")
            delBtn.classList.add("del-element")
            delBtn.innerHTML = '<i class="fas fa-times">'
            historyElementInsideDiv.appendChild(delBtn)

            const descElement = document.createElement("p")
            descElement.classList.add("desc-element")
            descElement.innerHTML = descInput.value
            historyElementInsideDiv.appendChild(descElement)


            const historyElementInsideH4 = document.createElement("h4")
            historyElementPlus.appendChild(historyElementInsideH4)
            historyElementInsideH4.innerHTML = "$" + amntInput.value

            history.appendChild(historyElementPlus)

            incomeAmount = parseFloat(incomeAmount)
            incomeAmount += parseFloat(amntInput.value)
            incomeAmount = incomeAmount.toFixed(2)

            income.innerHTML = "$" + incomeAmount
        }
        else {
            const historyElementMinus = document.createElement("div")
            historyElementMinus.classList.add("history-element-minus")

            const historyElementInsideDiv = document.createElement("div")
            historyElementMinus.appendChild(historyElementInsideDiv)

            const delBtn = document.createElement("button")
            delBtn.classList.add("del-element")
            delBtn.innerHTML = '<i class="fas fa-times">'
            historyElementInsideDiv.appendChild(delBtn)

            const descElement = document.createElement("p")
            descElement.classList.add("desc-element")
            descElement.innerHTML = descInput.value
            historyElementInsideDiv.appendChild(descElement)



            const historyElementInsideH4 = document.createElement("h4")
            historyElementMinus.appendChild(historyElementInsideH4)
            historyElementInsideH4.innerHTML = "$" + amntInput.value

            history.appendChild(historyElementMinus)


            expenseAmount = parseFloat(expenseAmount)
            expenseAmount += parseFloat(amntInput.value)
            expenseAmount = expenseAmount.toFixed(2)

            expense.innerHTML = "$" + expenseAmount
        }
        history.scrollTo(0, 0)

        currentBalanceAmount = (parseFloat(incomeAmount) - parseFloat(expenseAmount))
        currentBalanceAmount = currentBalanceAmount.toFixed(2)

        currentBalance.innerHTML = "$" + currentBalanceAmount


        descInput.value = ""
        amntInput.value = ""
    }
}

function delTransaction (e) {
    if (e.target.className === "del-element") {
        var amount = parseFloat(e.target.parentNode.nextSibling.innerHTML.slice(1, ))


        
        if (e.target.parentNode.parentNode.className === "history-element-plus") {
            incomeAmount = incomeAmount - amount
            incomeAmount = incomeAmount.toFixed(2)
            
            income.innerHTML = "$" + incomeAmount
            
            
            currentBalanceAmount = parseFloat(currentBalanceAmount) - amount
            currentBalanceAmount.toFixed(2)
            
            currentBalance.innerHTML = "$" + currentBalanceAmount
        }
        else {
            expenseAmount = expenseAmount - amount
            expenseAmount = expenseAmount.toFixed(2)
            
            expense.innerHTML = "$" + expenseAmount
            
            
            currentBalanceAmount = parseFloat(currentBalanceAmount) + amount
            currentBalanceAmount.toFixed(2)

            currentBalance.innerHTML = "$" + currentBalanceAmount
        }
        
        e.target.parentNode.parentNode.remove()
    }
}