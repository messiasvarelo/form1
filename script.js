alert(" preencher o formulario para criar sua senha ");

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();
    
})

function checkInputUsername(){
    const usernameValue = username.value;
    if (usernameValue === ""){
        erroInput(username, "campo obrigadorio ")
    }else{
        const formItem = username.parentElement;
        formItem.classList = "form-content"
    }
}

function checkInputEmail (){
    const emailValue = email.value;
    if (emailValue ===""){
        erroInput( email, "campo obrigatorio")
    }else{
        const formItem = email.parentElement;
        formItem.classList = "form-content"
    }
}

 function checkInputPassword (){
    const passwordValue = password.value;
    if (passwordValue ===""){
        erroInput (password , "senha obrigatoria com 8 digitos ")
    
    }else if (passwordValue .length < 8){
        erroInput (password ,"sua senha precisa ter 8 caracteres")
    }else {
        const formItem = password.parentElement;
        formItem.className="form-content"
    }
       
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordvalue = passwordConfirmation.value; 

    if (confirmationPasswordvalue === ""){
        erroInput(passwordConfirmation, "confirmar senha")
    }else if (confirmationPasswordvalue !== passwordValue){
        erroInput(passwordConfirmation,"senha invalida ")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className =" form-content"
    }          

}
    function erroInput( input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector ("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"

}
    