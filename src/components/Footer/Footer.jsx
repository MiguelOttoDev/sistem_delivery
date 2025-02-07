import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='logo' src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur porro quia dolorum veritatis eos cumque minima quas veniam, itaque accusantium, perferendis quam placeat, ducimus nostrum minus. Fugiat, ut ducimus!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Empresa</h2>
                    <ul>
                        <li>Home</li>
                        <li>Sobre nós</li>
                        <li>Delivery</li>
                        <li>Politicas de privacidade</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Entre em Contato</h2>
                    <ul>
                        <li>+55 (99) 99999-9999</li>
                        <li>Email: 123@example.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © Otto´s Food - Todos direitos reservados</p>
        </div>
    )
}

export default Footer
