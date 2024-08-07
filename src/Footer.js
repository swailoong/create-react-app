import linkedin from './img/linkedin.png'
import email from './img/email.png'
import github from './img/github.png'
import arrowup from './img/arrowup.png'
import './styles/Footer.css'

export default function Footer(){
    return (
        <footer>
            <a href="#App">
                <img id="arrowup" src={arrowup} alt="arrowup"></img>
                <p id="backToTop">BACK TO TOP</p>
            </a>
            <a href="https://linkedin.com/in/trystan-siew-54851361/" target="_blank">
                <img src={linkedin} alt="linkedin"></img>
            </a>
            <a href="mailto:trystansiew@gmail.com">
                <img src={email} alt="email"></img>
            </a>
            <a href="https://github.com/swailoong" target="_blank">
                <img src={github} alt="github" width="30px" height="30px"></img>
            </a>
            <p id="copyright">&copy;Trystan Siew 2024 All Right Reserved</p>
        </footer>
    )
}