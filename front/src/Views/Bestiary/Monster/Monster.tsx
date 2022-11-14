import './Monster.css';
import Select from 'react-select';


const Monster = () => {

    return (
        <main className="Main">
        <div className="MainList">
            <div className = "TopPage">
                <div className = "Name">
                    <p style={{fontSize: "20px", margin: "0px"}}>Имя персонажа: </p>
                    <div className = "NameField">
                        <p>Гоблин</p>
                    </div>
                </div>
                <div className = "Race">
                    <p style={{fontSize: "20px", margin: "0px"}}>Раса: </p>
                    <div className = "NameField">
                        <p>Гуманоид</p>
                    </div>
                </div>
                <div className="WorldView">
                    <p style={{fontSize: "20px", margin: "0px"}}>Мировозрение: </p>
                    <div className = "NameField">
                        <p>Хаотично-злой</p>
                    </div>
                </div>
            </div>
        
            <div className="MainTable">
                <div className = "ParametrTable">
                    <div className = "Bonus">
                        <div className = "Count">
                            3
                        </div>
            
                        <div className = "Name">
                            Бонус мастерства
                        </div>
                    </div>
            
                    <div className="Parametrs">
                        <div className = "Param">
                            <p style={{fontSize: "20px", margin: "0px"}}><b>Сила</b></p>
                                    <p style={{fontSize:"35px", textAlign: "center", margin: "0px"}}><b>16</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>+3</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize: "20px", margin: "0px"}}><b>Ловкость</b></p>
                                <p style={{fontSize:"35px", textAlign: "center", margin: "0px"}}><b>12</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>+1</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize:"20px", margin: "0px", textAlign: "center"}}><b>Телос<br/>ложение</b></p>
                            <p style={{fontSize:"35px", textAlign: "center", marginTop: "-20px",  marginBottom: "0px"}}><b>18</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>+4</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize:"19px", margin: "0px"}}><b>Интеллект</b></p>
                            <p style={{fontSize:"35px", textAlign: "center", margin: "0px"}}><b>14</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>+2</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize:"20px", margin: "0px"}}><b>Мудрость</b></p>
                            <p style={{fontSize:"35px", textAlign: "center",  margin: "0px"}}><b>10</b></p>
                            <div className="Bonus">
                                <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>0</p>
                            </div>
                        </div>
            
                        <div className = "Param">
                            <p style={{fontSize:"20px", margin: "0px"}}><b>Харизма</b></p>
                            <p style={{fontSize:"35px", textAlign: "center",  margin: "0px"}}><b>20</b></p>
                            <div className="Bonus">
                            <p style = {{fontSize:"30px", textAlign: "center", margin: "auto"}}>+5</p>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className = "CenterLayout">
                    <p style={{textAlign:"center", margin: "0"}}><img src="https://i.pinimg.com/originals/ca/54/96/ca5496b0fb8d28148f1ebdbad180bfdb.png" /></p>
                    <div  style= {{fontSize: "16px"}}>
                        Туп, жаден, струслив. Характер отсутствует. Почти как Трелони, только у Трелони была картина.
                    </div>
                </div>
            </div>
        </div>
    </main>

    )
}

export default Monster;