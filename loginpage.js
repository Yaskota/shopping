function login()
{

    document.querySelector(".login").style=`display:block;`
    document.querySelector(".register").style=`display:none;`

}
function register()
{

    document.querySelector(".login").style=`display:none;`
    document.querySelector(".register").style=`display:block;`

}
function registration(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const password11=document.getElementById('pass11').value;

    if(password==password11)
    {
        console.log(username,password,password11);
        localStorage.setItem(username,password);
        alert('Registration Succesfull');
        document.querySelector(".login").style=`display:block;`
        document.querySelector(".register").style=`display:none;`
        

    }
    else{
        console.log(username,password,password11);
        alert('Conform Password Not Matched');
        
    }

}

function logining() {
    const username1 = document.getElementById('user1').value;
    const password1 = document.getElementById('pass1').value;
    
    if (!username1 || !password1) {
        alert('Please enter both username and password');
        return; // Stop further execution
    }

    const storepassword = localStorage.getItem(username1);

    if (!storepassword) {
        alert('User does not exist. Please register first.');
        return; // Stop further execution
    }

    if (storepassword === password1) {
        alert('Login Successful');
        window.location.href = 'catalog.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// localStorage.clear();

