document.getElementById('login-submit').addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('Login')
    // Get UserField Value
    const userField = document.getElementById('user_name');
    const username = userField.value
    console.log(username)
    // Get Password Value
    const  password = document.getElementById('pass_word').value;
    console.log(password)
    //Check Valid Password
    if((username === 'wpdevelopment20@gmail.com') && (password === '123456')){
        window.location.href = 'banking.html'
        console.log('login')
    }else{
        alert('Please type your valid password')
    }
});


