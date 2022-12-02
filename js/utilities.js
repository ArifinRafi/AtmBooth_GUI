function get_input_element(idOftheElement) {
   const depositField = document.getElementById(idOftheElement);
   const stringvalue = depositField.value;
   depositAmount = parseFloat(stringvalue);
   depositField.value = '';
   return depositAmount;

  
}


function get_text_element(idOftheElement) {
    const prev_value = document.getElementById(idOftheElement);
    const prev_string_field = prev_value.innerText;
    const prev_int_field = parseFloat(prev_string_field);
    return prev_int_field;

}

function set_newValue(idOftheElement, newVal) {
    const prev_val = document.getElementById(idOftheElement);
    prev_val.innerText = newVal;
}

function get_login_element(idOftheElement) {
    const inputField = document.getElementById(idOftheElement);
    const inputString = inputField.value;
    return inputString;

}