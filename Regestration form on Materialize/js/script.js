//input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
//form
const form = document.getElementById('myForm');
// validation colors
const green = "#4caf50";
const red = "#f44336";
//handle form
form.addEventListener('submit',function(event){
    event.preventDefault();
    if(
        validateFirstName() &&
        validateLastName() &&
        validatePassword() && 
        validateConfirmPassword() &&
        validateEmail()
    ){
        const name = firstName.value;
        
        const container = document.querySelector('div.container');

        const loader = document.createElement('div');
        loader.className = 'progress';
        
        const loadingBar = document.createElement('div');
        loadingBar.className = 'indeterminate';
        
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        
        setTimeout(function(){
            const loaderDiv = document.querySelector('div.progress');

            const panel = document.createElement('div');
            panel.className = 'card-panel green';
            
            const text = document.createElement('span');
            text.className = 'white-text';
            text.appendChild(document.createTextNode(`Welcome to SA ${name}`));
            
            panel.appendChild(text);
            container.replaceChild(panel,loaderDiv);
        },1000)
    }
})
//validators
function validateFirstName(){
    //check if is empty
    if(checkIfEmpty(firstName)) return;
    //check if it has only letters
    if(!checkIfOnlyLetters(firstName)) return;
    return true;
}

function validateLastName(){
    //check if is empty
    if(checkIfEmpty(lastName)) return;
    //check if it has only letters
    if(!checkIfOnlyLetters(lastName)) return;
    return true;
}

function validatePassword(){
    //check if empty
    if(checkIfEmpty(password)) return;
    //check the length
    if(!meetLength(password,4,100)) return;
    //check password against our character set
    //1-a
    //2-a 1
    //3-A a 1
    //4-A a 1 ?
    //if(!characterCriteria(password, 1)) return;
    return true;
}

function validateConfirmPassword(){
    if(password.className !== 'valid'){
        setInvalid(confirmPassword,'Password must be valid');
        return;
    }
    //if they match
    if(password.value !== confirmPassword.value)
    {
        setInvalid(confirmPassword,'Passwords must match');
        return;
    }else{
        setValid(confirmPassword);
    }
    return true;
}

function validateEmail(){
    if(checkIfEmpty(email)) return;
    if(!characterCriteria(email, 5)) return;
    return true;
}
//utility function
function checkIfEmpty(field){
    if(isEmpty(field.value.trim())){
        //set field invalid
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    }
    else {
        //set field valid
        setValid(field);
        return false;
    }
}

function isEmpty(value)
{
    if(value == '') return true;
    return false;
}

function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field){
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    field.nextElementSibling.style.color = green;
}

function checkIfOnlyLetters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    }
    else{
        setInvalid(field, `${ field.name } must contain only letters`);
        return false;
    }
}

function meetLength(field,min,max)
{
    if(field.value.length >= min && field.value.length < max)
    {
        setValid(field);
        return true;
    }
    else if(field.value.length < min)
    {
        setInvalid(field,`${field.name} must be at least ${min} characters long`);
        return false;
    }
    else {
        setInvalid(field, `${field.name} must be shorter than ${max} characters`);
        return false;
    }
}

function characterCriteria(field, code){
    let regEx;
    switch(code){
        case 1:
            //letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(regEx,field, `Must contain at least one letter`);
        case 2:
            //letters and numbers
            regEx =/(?=.*\d)(?=.*[a-zA-Z])/;
            return matchWithRegEx(regEx,field,`Must contain at least one letter and number`);
        case 3:
            //At least one uppercase letter, one lowercase letter and one number
            regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
            return matchWithRegEx(regEx,field,`Must contain at least one uppercase letter, one lowercase letter and one number`);
        case 4:
            //At least one uppercase letter, one lowercase letter, one number and one special character (symbol)
            regEx =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
            return matchWithRegEx(regEx,field,`Must contain at least one uppercase letter, one lowercase letter, one number and one special character`);
        case 5:
            //Email check
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return matchWithRegEx(regEx,field,`Must be valid email address`);
        default:
            return false;
    }
}

function matchWithRegEx(regEx,field,message){
    if(field.value.match(regEx))
    {
        setValid(field); return true;
    } else{
        setInvalid(field,message); return false;
    }
}