bankGetAmount = (btnID) => {
    if(btnID === 'deposit_btn'){
        /* Deposit Amount Get from input value */
        const depositInput = document.getElementById('deposit_amount');
        const depositValue = parseInt(depositInput.value)
        /* Deposit value check with console */
        console.log('Deposit Value: ', depositValue);
        /* Deposit total inner text get */
        const depositTotal = document.getElementById('deposit_total');
        const depositInnerText = parseInt(depositTotal.innerText)
        /* Inner Text Check */
        console.log('Deposit Inner Text: ', depositInnerText);
        /* Total Balance Amount */
        const balanceTotal = document.getElementById('balance_total')
        const balanceInnerText = parseInt(balanceTotal.innerText)

        if(depositValue > 0 ){
            /* Input Deposit value and Inner Text value sum */
            const depositTotalAmount = depositValue + depositInnerText;
            /* Push Total Deposit Amount */
            depositTotal.innerText = depositTotalAmount;
            balanceTotal.innerText = balanceInnerText + depositValue
            depositInput.value = ''
            console.log('Deposit Total Amount: ', depositTotalAmount);
            console.log('BalanceTotal', balanceTotal)
        }else{
            alert('Please provide right amount, thank you.')
        }
    } else {
        /* withdraw Amount Get from input value */
        const withdrawInput = document.getElementById('withdraw_amount');
        const withdrawValue = parseInt(withdrawInput.value)
        /* withdraw value check with console */
        console.log('Deposit Value: ', withdrawValue);
        /* withdraw total inner text get */
        const withdrawTotal = document.getElementById('withdraw_total');
        const withdrawInnerText = parseInt(withdrawTotal.innerText)
        /* Inner Text Check */
        console.log('Deposit Inner Text: ', withdrawInnerText);
        /* Total Balance Amount */
        const balanceTotal = document.getElementById('balance_total')
        const balanceInnerText = parseInt(balanceTotal.innerText)

        if(withdrawValue > 0 && withdrawValue < balanceInnerText ){
            /* Input Deposit value and Inner Text value sum */
            const withdrawTotalAmount = withdrawValue + withdrawInnerText;
            /* Push Total Deposit Amount */
            withdrawTotal.innerText = withdrawTotalAmount;
            balanceTotal.innerText = balanceInnerText - withdrawValue
            withdrawInput.value = ''
            console.log('Deposit Total Amount: ', withdrawTotalAmount);
            console.log('BalanceTotal', balanceTotal)
        }else{
            alert('Please provide right amount, thank you.')
        }
    }
}

