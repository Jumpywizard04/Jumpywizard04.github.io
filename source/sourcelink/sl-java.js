function validatePass(){
    if(document.getElementById('password').value == 'sadesss'){
        return true;
    }else{
        alert('Password Incorrect.');
        return false;
    }
}