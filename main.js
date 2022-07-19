// HAMBURGER MENU
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav--links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    toggleButton.classList.toggle('active')
})

// SCROLLTOP


const scrolltoTop = document.querySelector("#scrollToTop")
scrolltoTop.addEventListener('click', function(){
    window.scrollTo(0,0)
})

// FORM

const form = document.getElementById('form')
const username = document.getElementById('name')
const place = document.getElementById('place')
const email = document.getElementById('email')
const number = document.getElementById('number')
const message = document.getElementById('message')

form.addEventListener('submit', e => {
    
    if(!validateInputs()){
        e.preventDefault();
    }
});

const setError = (element,message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');
    // console.log(errorDisplay);
    errorDisplay.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
    
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = "";
    inputBox.classList.remove('error');
    inputBox.classList.add('success');
    
}

const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const nameValue =  username.value.trim();
    const placeValue = place.value.trim();
    const emailValue =  email.value.trim();
    const numberValue =  number.value.trim();
    const messageValue =  message.value.trim();

    let isValid = true;

    if(nameValue === "") {
        isValid = false;
        setError(username, 'Username is required')
        
        
    }else {
        setSuccess(username)
    }

    if(emailValue === "") {
        isValid = false;
        setError(email, 'Email address is required')
        
        
    }else if(!isValidEmail(emailValue)) {
        isValid = false;
        setError(email, "Provide a valid email address")
    }else {
        setSuccess(email)
    }

    if(placeValue === "") {
        isValid = false;
        setError(place, 'City, Country is required')
    }else {
        setSuccess(place)
    }

    if(numberValue === "") {
        isValid = false;
        setError(number, 'Phone number is required')
    }else {
        setSuccess(number)
    }

    if(messageValue === "") {
        isValid = false;
        setError(message, 'Message is required')
    }else {
        setSuccess(message)
    }
    
     return isValid;

}

// 