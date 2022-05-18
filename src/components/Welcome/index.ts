import './style.css'

const renderWelcomePanel = (container: HTMLElement) => {
  const htmlContent = `
    <div id="welcome">
      <h1>Bem vindo!</h1>
      <h2><a href="about.html" id="redirect-link">Ir para a página Sobre</a></h2>
      <a href="logout.html" id="logout">Sair</a>
    </div>
  `

  container.innerHTML = htmlContent
}

export default renderWelcomePanel
