import "./style.css";

// const app = document.querySelector<HTMLDivElement>("#app")!
const token = localStorage.getItem("token"); // busca o token de autenticação no local storage

if (token) {  // verifica se existe o token, se está preenchido, com algum valor armazenado

} else {
    location.href = 'login.html' // se o token estiver vazio, redireciona o usuario para a pagina de login
}


