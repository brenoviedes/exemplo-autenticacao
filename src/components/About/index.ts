import './styles.css'

const renderAbout = (container: HTMLElement) => {
  const htmlContent = `
    <div id="links-about">
        <a href="index.html" id="welcome">Voltar para Home</a>
        <a href="logout.html" id="logout">Sair</a>
    </div>

    <div id="about">
      <p>
        Este site foi criado para exemplificar o uso de autenticação de usuários via e-mail <br>
        e senha, utilizando a API do firebase
      </p>
          
      <p>
        	&copy; TSI IFMS Campus Aquidauana
      </p>
    </div>
  `

  container.innerHTML = htmlContent
}

export default renderAbout