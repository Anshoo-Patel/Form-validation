function validate()
{
    var username = document.getElementById('username').value 
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkcpasswordmatch(password , cpassword)
}

function checkusername(username){
if(username.length > 7)
{
    document.getElementById('username').classList.add('error')
    document.getElementById('username').classList.replace('error','success')
    document.getElementById('username_error').innerHTML=''
}
else{
    document.getElementById('username').classList.add('error')
    document.getElementById('username_error').innerText='username must be 8 letter long'
}
}
function checkemail(email){
    if(email.length>8 && email.includes('@gmail.com'))
    {
        document.getElementById('email').classList.add('error')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerHTML=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='invalid email'
 } 
}
 function checkpassword(password)
{
        if(password.length > 7 && password.includes('.'))
        {
            document.getElementById('password').classList.add('error')
            document.getElementById('password').classList.replace('error','success')
            document.getElementById('password_error').innerHTML=''
        }
        else{
            document.getElementById('password').classList.add('error')
            document.getElementById('password_error').innerText='invalid password'
 }
} 
function checkcpasswordmatch(password , cpassword)
{
        if(password == cpassword)
        {
            document.getElementById('cpassword').classList.add('error')
            document.getElementById('cpassword').classList.replace('error','success')
            document.getElementById('cpassword_error').innerHTML=''
        }
        else{
            document.getElementById('cpassword').classList.add('error')
            document.getElementById('cpassword_error').innerText='password not matched'
        }
 }