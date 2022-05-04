const countTryLogin = localStorage.getItem('tryLogin')
let countTryLoginNumber = Number(countTryLogin)

const timeToResetTry = 30000 // em milissegundos

export const resetTryTimer = () => {
    if (countTryLoginNumber >= 5) {
        setTimeout(() => {
            localStorage.setItem('tryLogin', '0')
        }, timeToResetTry)
    }
}
export const resetTryInIndex = () => {
    localStorage.setItem('tryLogin', '0')
}


export const renderBlockedPage = (container: HTMLDivElement) => {

    const second = timeToResetTry / 1000
    const minute = second / 60
    const secondOrMinutetext = timeToResetTry / 1000 >= 60 ? 'minutos' : 'segundos'
    const secondOrMinuteTimer = second < 60 ? Math.floor(second) : Math.floor(minute)
    const htmlContent = `
        <h1>BLOQUEADO</h1>
        <p>
            Você excedeu todas as tentativas de login <br>
            Por favor, espere ${secondOrMinuteTimer} ${secondOrMinutetext} para tentar novamente
        </p>
    `
    container.innerHTML = htmlContent
}


