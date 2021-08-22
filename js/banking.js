/* Input Amount Global Function Declaration */
function inputAmount(inputID){
    const inputField = document.getElementById(inputID)
    const inputValue = inputField.value
    const inputAmount = parseFloat(inputValue)
    inputField.value = ''
    return inputAmount
}

/* Global Function Declaration */
function getInnerText (innerID, amount){
    const getInnerText = document.getElementById(innerID);
    const innerTextValue = getInnerText.innerText
    const previousInnerTextValue = parseFloat(innerTextValue)
    getInnerText.innerText = previousInnerTextValue + amount;
    return previousInnerTextValue;
}

/* global BALANCE Update Function */
function updateBalance(newAmount){
    const balanceTotal = document.getElementById('balance_total');
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const currentTotalBalance = newAmount + previousBalanceTotal
    balanceTotal.innerText = currentTotalBalance;
}

// Handle Deposit
document.getElementById('deposit_btn').addEventListener('click', (e) => {
    //console.log('Deposit')
    // const deposit = document.getElementById('deposit_amount').value
    // const depositInput = document.getElementById('deposit_amount')
    // const currentDepositText = depositInput.value
    // const newDepositAmount = parseFloat(currentDepositText)
    // console.log('Deposit Amount: ', currentDepositText)
    /* Clear Input Value of deposit */
    // depositInput.value = ''

    /* Get Deposit Current Amount */
    // const depositCurrentInput = document.getElementById('deposit_total');
    // const previousDepositAmountText = depositCurrentInput.innerText
    // const previousDepositAmount = parseFloat(previousDepositAmountText)
    // console.log('Previous Amount: ', previousDepositAmount)


    /* Input value Amount Function Call */
    const  newDepositAmount = inputAmount('deposit_amount')
    /* Get Input Function Call */
   // getInnerText('deposit_total', newDepositAmount)
    /* Update Function Call */
   // updateBalance(newDepositAmount);
    //Condition Apply

    if(newDepositAmount > 0){
        getInnerText('deposit_total', newDepositAmount)
        updateBalance(newDepositAmount);
    }else{
        alert('Please type right New Deposit amount')
    }
    /* Plush Previous Deposit and New Deposit Amount */
    // const totalDepositAmount = previousDepositAmount + newDepositAmount;
    // depositCurrentInput.innerText = totalDepositAmount;
    // console.log('Total Deposit: ', depositCurrentInput)
    /* Balance Amount */
    // const balanceTotal = document.getElementById('balance_total');
    // const balanceTotalText = balanceTotal.innerText
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const currentTotalBalance = newDepositAmount + previousBalanceTotal
    // balanceTotal.innerText = currentTotalBalance;



})

// Handle Withdraw
document.getElementById('withdraw_btn').addEventListener('click', (e) => {
    // Get Withdraw Amount
    // const withdrawInput = document.getElementById('withdraw_amount');
    // const withdrawText = withdrawInput.value
    // const withdrawAmount = parseFloat(withdrawText)
    // console.log('withdrawAmount: ', withdrawAmount)
    // // Clear Input Value of deposit
    // withdrawInput.value = ''



    // Plush Previous Withdraw and New Withdraw Amount
    // const withdrawTotal = document.getElementById('withdraw_total');
    // const previousWithdrawText = withdrawTotal.innerText
    // const previousWithdraw = parseFloat(previousWithdrawText)
    // const updateWithdrawAmount = withdrawAmount + previousWithdraw
    // withdrawTotal.innerText = updateWithdrawAmount;
    // console.log('Update Withdraw Amount: ',updateWithdrawAmount)


    /* Input value Amount Function Call */
    const  withdrawAmount = inputAmount('withdraw_amount')
    /* Get Inner Text Function Call */
   // getInnerText('withdraw_total', withdrawAmount)
    /* Update Balance Function */
    //updateBalance(withdrawAmount)

    if(withdrawAmount > 0){
        getInnerText('withdraw_total', withdrawAmount)
        updateBalance(withdrawAmount)
    }else{
        alert('Please type right withdraw amount')
    }

    // Balance Amount
   //  const balanceTotal = document.getElementById('balance_total');
   //  const balanceTotalText = balanceTotal.innerText
   //  const previousBalanceTotal = parseFloat(balanceTotalText);
   //  console.log('previousBalanceTotal', previousBalanceTotal)
   // // console.log('previousWithdraw', previousWithdraw)
   //  const currentTotalBalance = previousBalanceTotal - withdrawAmount
   //  balanceTotal.innerText = currentTotalBalance;
   //  console.log('Total Balance After Withdraw: ', currentTotalBalance )



})