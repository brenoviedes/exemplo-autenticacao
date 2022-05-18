import renderAbout from './components/About'
import './styles.css'


const app = <HTMLDivElement>document.querySelector('#app')
const token = localStorage.getItem('token')
if (token) {
  renderAbout(app)
} else {
  window.location.href = 'login.html'
}