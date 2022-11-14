import {Link} from 'react-router-dom'
import internal from 'stream';
import './Hero.css';
import { useState } from 'react';

const Hero = () => {

    

    class Params {
        strength: number;
        dexterity: number;
        physique: number;
        intelligence: number;
        wisdom: number;
        charisma: number;

        constructor(strength: number, dexterity: number, physique: number, intelligence: number, wisdom: number, charisma: number){
            this.strength = strength;
            this.dexterity =dexterity;
            this.physique = physique;
            this.intelligence = intelligence;
            this.wisdom =wisdom;
            this.charisma = charisma;
        }
       }
    
    const [name, setName] = useState("Доктор Ливси");
    const [level, setLevel] = useState(5);
    const [levelBonus, setLevelBonus] = useState(getLevelBonus(level));
    const [params, setParams] = useState(new Params(16,12,18,14,10,20));
    const [paramBonus, setParamBonus] = useState (['+3', '+1', '+4', '0', '+5']);
    const [description, setDescription] = useState("Очень весёлый и интересный человек. Характер общительный. Гигачад");
    

    function getLevelBonus(level: number):string{
        return (Math.floor((level-1)/4) + 2).toString();
    }

    function getParamBonus(num:number):string{
        let bonusString = "";
        let buff = Math.floor(num/2) - 5;
        if (buff>0){
            bonusString += "+";
        }
        bonusString += buff.toString();
        return bonusString;
    }
    
    class Hero {
        name:string;
        level: number;
        params:Params;
        description:string;

        constructor(name:string, level:number, params:Params, description:string){
            this.name = name;
            this.level = level;
            this.params = params;
            this.description = description;
        }
    }

    let HeroSave:Hero = new Hero( 
        "Доктор Ливси",
        5,
        new Params(16, 12, 18, 14, 10, 20),
        "Очень весёлый и интересный человек. Характер общительный. Гигачад"  
    );

    let HeroInfo = HeroSave;

    function checkParams():void{
        let HeroParam = HeroSave;
        if (isValid(HeroParam)){
            HeroSave = new Hero (name, level, params, description);
            setLevelBonus(getLevelBonus(level));
            setParamBonus([getParamBonus(params['strength']), getParamBonus(params['dexterity']), getParamBonus(params['physique']),
                             getParamBonus(params['intelligence']), getParamBonus(params['wisdom']), getParamBonus(params['charisma'])]);
        }
        else{
            setName(HeroSave.name);
            setLevel(HeroSave.level);
            setParams(HeroSave.params);
            setDescription(HeroParam.description);
        }
    }

    function isValid(HeroParam: Hero):boolean{
        let isValid:boolean = true;
        if(name === ''){
            alert("Окей, если ты не хочешь называть своего персонажа, то я назову его косипошой");
            setName('Косипоша');
        }
        if (!checkLevel(level))
            isValid = false;
    
        let charecteristic = document.querySelectorAll('.Parametrs .Param')
        for(let character in params){
            let num:number = params[character as keyof Params];
            if(num < 1 || num > 20){
                isValid = false;
                alert("Характеристика установлена неверно. Допускаемые параметры: [1...20]");
                break;
            }
        }

        if (description === ""){
            isValid = false;
            alert("Можно хоть немного описание, позязя?");
        }
        return isValid;
    
    }

    function checkLevel(level:number){
        if (level >= 1 && level <= 20){
            return true;
        }
        else{
            if(isNaN(level))
                alert("И как ты представляешь себе такой уровень? Пиши цифрами"); 
            if(level < 1)
                alert("Я понимаю, что развитие назад это тоже развитие, но уровень не может быть меньше 1"); 
            if(level >20)
                alert("Быть Богом это круто, но к сожалению вы обычный сверхчеловек так что ваш максимальный уровень 20");
            return false;
        }
    }

    
    return (
        <main className="Main">
<div className="MainInfo">
    <h2>Персонажи</h2>
    <p>
        Ага, и так мы добрались до самого весёлого. Хотите почуствовать себя Богом? Ну вообще перебьётесь, но вот персонажа создать можно. Стоит понимать,
        что ваш персонаж - это не ваше отражение(<i>не ну если хотите, то пожалуйста, но это же скушно</i>). Реализуйте все свои отбитые фантазии
        и проявите мастерство креатива. <br/>
        По поводу создания персонажа можно дать несколько советов:
        <ol>
            <li>Ваш персонаж-это новая личность. Так как играть с пелёнок долго и неинтересно то придётся это обдумывать самостоятельно. Потратьте немного времени
                ,чтобы придумать историю из которой будет понятно мотивация персонажа и его будущий путь развития. Это не только упрощает работу, но и делает историю
                куда интереснее и цельней. </li>   
            <li>Это фентези мир. К тому же ненастоящий. Так что не бойтесь экспериментов. Создайте максимально странного перса, от которого у ГМ-а глаза на потолок полезут.
                Орк-пацифист: неплохо. гном-берсеркер: замечательно. огр-учёный: ваще огонь(<i>кста у него 2 головы значит в 2 раза умнее, так что это ещё и логично</i>)</li>
        </ol>
        <b>P.s.</b> И напоследок запомните самое главное: <u><b>НЕ создавайте законно-доброго человека воина</b></u>. Нет ничего шаблоннней подобного персонажа.
        ГМ-ы такого не любят, поэтому такие персонажи обычно съедаются в первой миссии каким нибудь вурдалаком, так что будьте осторожны
    </p>
</div>

<div className="MainList">
    <div className = "TopPage">
        <div className = "Name">
            <p style={{font: "20px", margin: "0px"}}>Имя персонажа: </p>
            <input type ="text" className = "NameField" value = {name}
            onChange={event => setName(event.target.value)}
            />

        </div>
        <div className = "Race">
            <p style={{font: "20px", margin: "0px"}}>Раса: </p>
            <div className = "NameField">
                Человек
            </div>
        </div>
        <div className="WorldView">
            <p style={{font: "20px", margin: "0px"}}>Мировозрение: </p>
            <select id="selectvalue">
                <option>Законно-добрый</option>
                <option>Нейтрально-добрый</option>
                <option>Хаотично-добрый</option>
                <option>Законно-нейтральный</option>
                <option>Нейтрально</option>
                <option>Хаотично-нейтральный</option>
                <option>Законно-злой</option>
                <option>Нейтрально-злой</option>
                <option>Хаотично-злой</option>
            </select>
        </div>

        <div className = "Name">
            <p style={{font: "20px", margin: "0px"}}>Уровень персонажа: </p>
            <input type ="text" className = "NameField" id ="level"  value={level}
                onChange={event => setLevel(Number(event.target.value))} />
        </div>
    </div>

    <div className="MainTable">
        <div className = "ParametrTable">
            <div className = "Bonus">
                <div className = "Count">
                    {levelBonus}
                </div>

                <div className = "Name">
                    Бонус мастерства
                </div>
            </div>

            <div className="Parametrs">

                <div className = "Param" id="strength">
                    <p className ="Name" ><b>Сила</b></p>
                    <textarea value={params['strength']}
                        onChange={event => setParams(new Params( Number(event.target.value), params['dexterity'], params['physique'],
                                    params['intelligence'], params['wisdom'], params['charisma']))} 
                    ></textarea>
                    <div className="Bonus">
                        <p>{ paramBonus[0] }</p>
                    </div>
                </div>

                <div className = "Param" id="dexterity">
                    <p className ="Name" ><b>Ловкость</b></p>
                    <textarea value={params['dexterity']}
                        onChange={event => setParams(new Params( params['strength'] , Number(event.target.value),  params['physique'],
                                    params['intelligence'], params['wisdom'], params['charisma']))} 
                    ></textarea>
                    
                    <div className="Bonus">
                        <p>{ getParamBonus(HeroSave.params['dexterity'])}</p>
                    </div>
                </div>

                <div className = "Param" id="physique">
                    <p className ="Name" ><b>Телос<br/>ложение</b></p>
                    <textarea value={params['physique']}
                        onChange={event => setParams(new Params( params['strength'], params['dexterity'], Number(event.target.value),
                                    params['intelligence'], params['wisdom'], params['charisma']))} 
                    ></textarea>
                    <div className="Bonus" style={{marginTop: "-5px"}}>
                        <p>{ getParamBonus(HeroSave.params['physique'])}</p>
                    </div>
                </div>

                <div className = "Param"  id="intelligence">
                    <p className ="Name"><b>Интеллект</b></p>
                    <textarea value={params['intelligence']}
                        onChange={event => setParams(new Params( params['strength'], params['dexterity'], params['physique'],
                            Number(event.target.value), params['wisdom'], params['charisma']))} 
                    ></textarea>
                    <div className="Bonus">
                        <p>{ getParamBonus(HeroSave.params['intelligence'])}</p>
                    </div>
                </div>

                <div className = "Param" id="wisdom">
                    <p className ="Name" ><b>Мудрость</b></p>
                    <textarea value={params['wisdom']}
                        onChange={event => setParams(new Params( params['strength'], params['dexterity'], params['physique'],
                                    params['intelligence'], Number(event.target.value), params['charisma']))} 
                    ></textarea>
                    <div className="Bonus">
                        <p>{ getParamBonus(HeroSave.params['wisdom'])}</p>
                    </div>
                </div>

                <div className = "Param" id="charisma" style = {{marginBottom: "0px"}}>
                    <p className ="Name" ><b>Харизма</b></p>
                    <textarea value={params['charisma']}
                        onChange={event => setParams(new Params( params['strength'], params['dexterity'], params['physique'],
                                    params['intelligence'], params['wisdom'], Number(event.target.value)))} 
                    ></textarea>
                    <div className="Bonus">
                        <p>{ getParamBonus(HeroSave.params['charisma'])}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className = "CenterLayout">
            <p style={{font: "20px", margin: "0px"}}><img src="https://regnum.ru/uploads/pictures/news/2015/09/01/1441099985_остров-сокровищ-rejpg_normal.jpg" /></p>
            <div  style= {{ font: "16px" }}>
                <textarea v-model = "description"></textarea>
            </div>
        </div>

        <div className="RightLayout">
            
            <div className="List">
                <p>Классы</p>
                <div>
                    <textarea placeholder="Введите описание класса"></textarea>
                </div>
            </div>

            <div className="List">
                <p>Предметы</p>
                <div className = "Field">
                    <textarea placeholder="Введите описание предметов"></textarea>

                </div>
            </div>

            <div className="List">
                <p>Заклинания</p>
                <div className = "Field">
                    <textarea placeholder="Введите описание заклинаний"></textarea>
                </div>
            </div>

            <div className="mb-5">
                <button type="submit" className="btn btn-green" onClick={checkParams}>Изменить</button>
            </div>

        </div>

    </div>
</div>
</main>)

}
export default Hero;


/*<main className="Main">
<div className="MainInfo">
    <h2>Персонажи</h2>
    <p>
        Ага, и так мы добрались до самого весёлого. Хотите почуствовать себя Богом? Ну вообще перебьётесь, но вот персонажа создать можно. Стоит понимать,
        что ваш персонаж - это не ваше отражение(<i>не ну если хотите, то пожалуйста, но это же скушно</i>). Реализуйте все свои отбитые фантазии
        и проявите мастерство креатива. <br/>
        По поводу создания персонажа можно дать несколько советов:
        <ol>
            <li>Ваш персонаж-это новая личность. Так как играть с пелёнок долго и неинтересно то придётся это обдумывать самостоятельно. Потратьте немного времени
                ,чтобы придумать историю из которой будет понятно мотивация персонажа и его будущий путь развития. Это не только упрощает работу, но и делает историю
                куда интереснее и цельней. </li>   
            <li>Это фентези мир. К тому же ненастоящий. Так что не бойтесь экспериментов. Создайте максимально странного перса, от которого у ГМ-а глаза на потолок полезут.
                Орк-пацифист: неплохо. гном-берсеркер: замечательно. огр-учёный: ваще огонь(<i>кста у него 2 головы значит в 2 раза умнее, так что это ещё и логично</i>)</li>
        </ol>
        <b>P.s.</b> И напоследок запомните самое главное: <u><b>НЕ создавайте законно-доброго человека воина</b></u>. Нет ничего шаблоннней подобного персонажа.
        ГМ-ы такого не любят, поэтому такие персонажи обычно съедаются в первой миссии каким нибудь вурдалаком, так что будьте осторожны
    </p>
</div>

<div className="MainList">
    <div className = "TopPage">
        <div className = "Name">
            <p style={{font: "20px", margin: "0px"}}>Имя персонажа: </p>
            <input type ="text" className = "NameField" v-model="name" />

        </div>
        <div className = "Race">
            <p style={{font: "20px", margin: "0px"}}>Раса: </p>
            <div className = "NameField">
                Человек
            </div>
        </div>
        <div className="WorldView">
            <p style={{font: "20px", margin: "0px"}}>Мировозрение: </p>
            <select id="selectvalue">
                <option>Законно-добрый</option>
                <option>Нейтрально-добрый</option>
                <option>Хаотично-добрый</option>
                <option>Законно-нейтральный</option>
                <option>Нейтрально</option>
                <option>Хаотично-нейтральный</option>
                <option>Законно-злой</option>
                <option>Нейтрально-злой</option>
                <option>Хаотично-злой</option>
            </select>
        </div>

        <div className = "Name">
            <p style={{font: "20px", margin: "0px"}}>Уровень персонажа: </p>
            <input type ="text" className = "NameField" id ="level" v-model="level.param"/>
        </div>
    </div>

    <div className="MainTable">
        <div className = "ParametrTable">
            <div className = "Bonus">
                <div className = "Count">
                    {HeroSave.getLevelBonus()}
                </div>

                <div className = "Name">
                    Бонус мастерства
                </div>
            </div>

            <div className="Parametrs">

                <div className = "Param" id="strength">
                    <p className ="Name" ><b>Сила</b></p>
                    <textarea v-model="params['strength'].param"></textarea>
                    <div className="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['strength'])}</p>
                    </div>
                </div>

                <div className = "Param" id="dexterity">
                    <p className ="Name" ><b>Ловкость</b></p>
                    <textarea v-model="params['dexterity'].param"></textarea>
                    <div className="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['dexterity'])}</p>
                    </div>
                </div>

                <div className = "Param" id="physique">
                    <p className ="Name" ><b>Телос<br/>ложение</b></p>
                    <textarea v-model="params['physique'].param"></textarea>
                    <div className="Bonus" style={{marginTop: "-5px"}}>
                        <p>{ HeroSave.getParamBonus(HeroSave.params['physique'])}</p>
                    </div>
                </div>

                <div className = "Param"  id="intelligence">
                    <p className ="Name"><b>Интеллект</b></p>
                    <textarea v-model="params['intelligence'].param"></textarea>
                    <div className="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['intelligence'])}</p>
                    </div>
                </div>

                <div className = "Param" id="wisdom">
                    <p className ="Name" ><b>Мудрость</b></p>
                    <textarea v-model="params['wisdom'].param"></textarea>
                    <div className="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['wisdom'])}</p>
                    </div>
                </div>

                <div className = "Param" id="charisma" style = {{marginBottom: "0px"}}>
                    <p className ="Name" ><b>Харизма</b></p>
                    <textarea v-model="params['charisma'].param"></textarea>
                    <div className="Bonus">
                        <p>{ HeroSave.getParamBonus(HeroSave.params['charisma'])}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className = "CenterLayout">
            <p style={{font: "20px", margin: "0px"}}><img src="https://regnum.ru/uploads/pictures/news/2015/09/01/1441099985_остров-сокровищ-rejpg_normal.jpg" /></p>
            <div  style= {{ font: "16px" }}>
                <textarea v-model = "description"></textarea>
            </div>
        </div>

        <div className="RightLayout">
            
            <div className="List">
                <p>Классы</p>
                <div>
                    <textarea placeholder="Введите описание класса"></textarea>
                </div>
            </div>

            <div className="List">
                <p>Предметы</p>
                <div className = "Field">
                    <textarea placeholder="Введите описание предметов"></textarea>

                </div>
            </div>

            <div className="List">
                <p>Заклинания</p>
                <div className = "Field">
                    <textarea placeholder="Введите описание заклинаний"></textarea>
                </div>
            </div>

            <div className="m b-5">
                <button type="submit" className="btn btn-green" onClick={checkParams}>Изменить</button>
            </div>

        </div>

    </div>
</div>
</main>*/