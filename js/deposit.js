document.getElementById('deposit-btn').addEventListener('click', function() {
   
    const inputDepositAmaount = get_input_element('deposit-field');
    const prevDepositAmaount = get_text_element('deposit-print');
    const newDepositAmaount = inputDepositAmaount + prevDepositAmaount;
    set_newValue('deposit-print', newDepositAmaount);

    const prevBalance = get_text_element('balance-print');
    const newBalance = prevBalance + inputDepositAmaount;
    set_newValue('balance-print', newBalance);

})


