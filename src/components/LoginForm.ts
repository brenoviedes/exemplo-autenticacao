import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {firebaseApp} from '../config/firebase'

const $ = document.querySelector.bind(document)

let localStorageLogin = localStorage.getItem('tryLogin')
let localStorageLoginNumber: number = Number(localStorageLogin) || 0

 if(localStorageLoginNumber >= 5) {
     location.href = 'blocked.html'
 }

const onSubmitLoginForm = (event: Event) => {
    event.preventDefault()

    const email = (<HTMLInputElement>$('#email')).value // pega o valor inserido no input do email
    const password = (<HTMLInputElement>$('#password')).value // pega o valor inserido no input da senha

    const auth = getAuth(firebaseApp) // conecta com a autenticação do firebase no site do firebase (caso estiver autorizado lá)
    
    // sobre a função abaixo signInWithEmailAndPassword: temos que lidar com uma Promise (ele promete a tentativa da autenticação, mas não tem como garantir que não retorne erro)
    signInWithEmailAndPassword(auth, email, password)
        .then(async userCredential => {  // se sucesso, grava o token no local storage e redireciona pra pagina index
            localStorage.setItem('tryLogin','0')
            const {user} = userCredential // pega o trecho de dados de usuario (user) atraves de associação por destruturação 
            const idToken = await user.getIdToken() //pega o idToken do usuario usado async await porque a função getIdToken() é uma Promise
            localStorage.setItem('token', idToken) // cria e armazena no local storageo token do usuario
            location.href = 'index.html' // redireciona para a página index
            
            
        }) 
        .catch(error => {
            console.log(error)
            const errorParagraph = <HTMLParagraphElement>document.createElement('p') // cria um novo elemento do tipo paragrafo e armazena na constante
            errorParagraph.innerText = 'Credênciais inválidas' // insere uma mensagem no parágrafo, mas ainda fica armazenado apenas na nemória
            const app = <HTMLDivElement>$('#app') // recupera o elemento de id app da pagina de login
            app.insertAdjacentElement('beforeend', errorParagraph) // renderiza na tela o erro  

            localStorageLoginNumber += 1
            console.log('Tentativa: ' + localStorageLoginNumber)
            localStorage.setItem('tryLogin', localStorageLoginNumber.toString())
            
            if (localStorageLoginNumber >= 5) {
                location.href = 'blocked.html'
            }
        })
}

export const renderLoginForm = (container: HTMLDivElement) => { // função que renderiza o formulário na tela
    const htmlContent = `
        <form id="login-form">
            <div class="form-input">
                <label for="email">E-mail</label>
                <input type="email" id="email" required>
            </div>

            <div class="form-input">
                <label for="password">Senha</label>
                <input type="password" id="password" required>
            </div>

            <button>Entrar</button>
        </form>
    `

    container.innerHTML = htmlContent
    const loginForm = <HTMLFormElement>$('#login-form')
    loginForm.onsubmit = onSubmitLoginForm
}