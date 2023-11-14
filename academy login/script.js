function login() {
    alert(" SEJA BEM VINDO!  ESCOLHA SEU PLANO E COMEÇE A TREINAR !!.");
    window.location.href = "index2.html";
}

function signup() {
    alert("Cadastro Realizado.");
}

function showSignupForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    showLoginForm(); // Exibir o formulário de login por padrão
});
