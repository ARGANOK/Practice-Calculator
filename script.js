function display(x){
    let displaysection = document.getElementById('value');
    let displaysectionvalue = displaysection.textContent;
    let digitCount = displaysectionvalue.length;
    let trimmedContent = displaysectionvalue.trim();
    // if(trimmedContent.charAt(digitCount-1) === ','){
        if(displaysectionvalue !== 'Error: Integer value exceeds maximum safe integer'){
            displaysection.innerHTML = trimmedContent + x;
            let intvalue = parseInt(displaysectionvalue,10);
            if(intvalue > Number.MAX_SAFE_INTEGER){
                displaysection.innerHTML = 'Error: Integer value exceeds maximum safe integer';
                displaysection.style.fontSize = '30px'
            }
        }
        return;
        // }
}
function deletevalue(){
    let displaysection = document.getElementById('value');
    let displaysectionvalue = displaysection.textContent;
    let digitCount = displaysectionvalue.length;
    let char = displaysectionvalue.charAt(digitCount-1);
    displaysection.innerHTML = displaysectionvalue.substring(0,digitCount-1);
    final_value -= parseInt(char);
    console.log("DeleteValue")
}
function clearscreen(){
    const displaysection = document.getElementById('value');
    displaysection.innerHTML = "";
    final_value = 0;
}
let final_value  = 0;
function displayvalue(){
    let displaysection = document.getElementById('value');
    let value = displaysection.textContent;
    let character = ''
    let x = "";
    // let char = "";
    for(let i = 0; i <= value.length;i++){
        let char = "";
        if(i !== value.length) char = value.charAt(i);
        else char = character;
        if(char === '+' && i != 0){
            final_value += parseInt(x);
            x = "";
            character = '+'
        }
        else if(char === '-' && i != 0){
            if(final_value === 0) final_value = parseInt(x);
            else final_value -= parseInt(x);
            x = "";
            character = '-'
        }
        else if(char === '*'){
            if(final_value === 0)final_value = parseInt(x);
            else final_value *= parseInt(x);
            x = "";
            character = '*'
        }
        else if(char === '/'){
            if(final_value === 0)final_value = parseInt(x);
            else final_value /= parseInt(x);
            x = "";
            character = '/'
        }
        else x += char

    }
    displaysection.innerHTML = final_value;    
}