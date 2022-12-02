document.getElementById('withdraw-btn').addEventListener('click', function() {
    const inputWithdrawAmount = get_input_element('withdraw-field');
    const prevBalance = get_text_element('balance-print');

    const newBalance = prevBalance - inputWithdrawAmount;
    set_newValue('balance-print', newBalance);
    set_newValue('withdraw-print', inputWithdrawAmount);
})