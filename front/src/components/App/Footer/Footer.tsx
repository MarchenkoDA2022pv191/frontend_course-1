import {Link} from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    
    return (
        <div className="Menu">
            <div>
                <p className="User">Хорошей игры пользователь .</p>
                <img className="Usericon" src="https://w7.pngwing.com/pngs/944/770/png-transparent-computer-icons-login-google-account-internet-user.png"/>
            </div>
            <div className='buttonPlace'>
                <Link to = "/login"><button className="Menubutton">Войти</button></Link>
                <Link to = "/autorisation"><button className="Menubutton">Зарегистрироваться</button></Link>
            </div>
            
            <p>Помните вы сами решаете свою судьбу, но удача порой может...Впрочем на вас удача отдохнула</p>
        </div>
    )
    
}
export default Footer;