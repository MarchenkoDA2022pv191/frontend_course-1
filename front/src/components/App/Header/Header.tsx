import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


const Header = () => {
  return <section className="Sidebar">
        <header>
            <section className="logoContainer">
                <img src="/img\logo.jpg" alt="logo"/>
            </section>
            <section className="logoText">
                <h2>DND helper <br/> fun version </h2>
            </section>
        </header>

        <form className="Category">
            <div>
                <ul>
                    Категории
                    <li className="heroes"><img className ="icon" style={{width: "40px"}} src="/img/icon/hero.png"/> <Link to='/' style={{font: "20px"}}> Персонажи </Link> </li> 
                    <li className="monster"><img className="icon" src="/img\icon\monster.png"/><Link to='/bestiary'>Бестиарий</Link></li>
                    <li className="magic"><img className="icon" src="/img\icon\magic.jpg"/><a href="#">Заклинания</a></li>
                    <li className="weapon"><img className="icon" src="/img\icon\weapon.png"/><a href="#">Предметы</a></li>
                    <li className="races"><img className="icon" src="/img\icon\races.jpg"/><a href="#">Расы</a></li>
                    <li className="classes"><img className="icon" src="/img\icon\classes.jpg"/><a href="#">Классы</a></li>
                </ul>
            </div> 
        </form>
    </section>
    
}
export default Header;



/*<header>
<section className="logoContainer">
    <section className="logo">
        <img src="/img\logo.jpg" alt="logo"/>
    </section>
    <section className="logoText">
        <h2>DND helper<br/>fun version </h2>
    </section>
</section>
</header>

<form className="Category">
<div>
<ul>
    Категории
        <li className="heroes"><img className ="icon" style={{width: "40px"}} src="/img/icon/hero.png"/> <Link to='/' style={{font: "20px"}}> Персонажи </Link> </li> 
        <li className="monster"><img className="icon" src="/img\icon\monster.png"/><Link to='/bestiary'>Бестиарий</Link></li>
        <li className="magic"><img className="icon" src="/img\icon\magic.jpg"/><a href="#">Заклинания</a></li>
        <li className="weapon"><img className="icon" src="/img\icon\weapon.png"/><a href="#">Предметы</a></li>
        <li className="races"><img className="icon" src="/img\icon\races.jpg"/><a href="#">Расы</a></li>
        <li className="classes"><img className="icon" src="/img\icon\classes.jpg"/><a href="#">Классы</a></li>
    </ul>
</div>
</form>   */