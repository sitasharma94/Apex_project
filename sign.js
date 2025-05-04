const inputs = document.querySelectorAll('.sign-in input');
const loginBtn = document.querySelector('.sign-in button[type="submit"]:not(.sign-up)');
const signUPBtn = document.querySelector('.sign-in .sign-up');

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    if(!emailPattern.test(username)){
        alert('Please enter a valid email address!');
        return;
    }
     if(!passwordPattern.test(password)){
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character!');
        return;
    }
    
    if(!username || !password){
        alert('Please fill in all fields!');
    }
    else{
        alert('Welcome back, ' + username + '!');
        window.location.href = 'shop.html'; 
    }
});

signUPBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to sign up page...');
    window.location.href = 'sign-up.html';
   });