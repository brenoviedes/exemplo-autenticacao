import { renderBlockedPage, resetTryTimer } from "./components/BlockedResetTry";
import './style.css'


resetTryTimer()

const app =<HTMLDivElement>document.querySelector('#app_blocked')
renderBlockedPage(app)