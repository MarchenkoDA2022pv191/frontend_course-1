import './Bestiary.css';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import { useState } from 'react';
import {ProductView} from './Product';
import { Monster } from './Monster';

type Category = {
    id: number,
    name: string
  }

type SelectItem = {
    value: string,
    label: string
}

type MonsterItem = {
    id:number,
    name: string,
    image: string
}


const Bestiary = () => {



    const [monsterItems, setMonsterItems] = useState<MonsterItem[]>([]);
    const [optionsCategory, setCategery] = useState<SelectItem[]>([])

    const getCategory = () => {
        axios.get<Category[]>('http://localhost/api/category/list').then(({data})=> {
            const category:SelectItem[] = []
            for (let item of data){
                category.push({value: item.id.toString(), label: item.name});
            }
            setCategery(category);
          })
      }
    
    const getMonsters = () => {
        axios.get<MonsterItem []>('http://localhost/api/monsters/list').then(({data})=> {
            setMonsterItems(data);
        })
    }
    

    React.useEffect(getCategory);
    React.useEffect(getMonsters);

    const optionsLevel = [
        {value: "1", label: "1"},
        {value: "2", label: "2"},
        {value: "3", label: "3"},
        {value: "4", label: "4"},
        {value: "5", label: "5"},
        {value: "6", label: "6"},
        {value: "7", label: "7"},
        {value: "8", label: "8"},
        {value: "9", label: "9"},
        {value: "10", label: "10"}
    ]

    return (
        <main className="Main">
            <div className="MainInfo">
                <h2>Бестиарий</h2>
                <p>
                    Примечание: прежде чем продолжать, убедитесь что ваш персонаж умеет читать. Не портите себе отыгрыш игровыми условностями).
                    <b>Помните, чтобы отыграть дебила надо самому стать дебилом.</b><br/>

                    Если вы начинающий искатель приключений, если вы отважный храбрец что ищет себе новые вызовы, если вы бомж, который не может себе купить всё что вам надо, то эта книга специально для вас.
                    Познайте окружающий мир, узнайте об интересных существах и о том, как их убить.

                    Бестиарий представляет собой очень богатый выбор. От обычных волчков и кабанчиков до буквально богов АДА. И пусть Бестиарий это книга для всех,
                    но стоит понимать, что ваши герои врядли найдут книгу в которой описаны слабые места местного Сатаны. Так что для лучшего отыгрыша следуйте этим рекомендациям.

                    <ol>
                        <li>Перед тем, как посмотреть какое то существо, подумайте о том, а может ли ваш персонаж знать что то о нём. Является ли он мега-професиональным охотником
                            книжным червём или просто достаточно наблюдательным. Возможно надо кинуть на характеристику, а то мало ли ответственный момент, а вы вдруг бац и всё забыли
                            Добавляет новых красок в ваше приключение (в основном коричневых конечно)
                        </li>
                        <li>
                            Постарайтесь не открывать Бестиарий во время боя. Согласитесь было бы страноо если бы во время боя с тиранозваром ваш герой достал и начал читать книгу о динозаврах.
                        </li>
                    </ol>
                    <b>P.s.</b> И напоследок запомните самое главное: Если вы можете победить существо 5 уровня это не значит, что вы сможете победить 5 существ 1 уровня. 
                </p>
            </div>

            <div className="MainList">
                <div className = "TopPage">
                    <div className="category" style = {{width: '300px'}}>
                        <p style={{fontSize: "20px", margin: "0px"}}>Категория: </p>
                        <Select
                            options={optionsCategory} 
                            isMulti
                            placeholder = "Выбрать категорию"
                        />
                    </div>
                    <div className="category" style = {{width: '300px'}}>
                        <p style={{fontSize: "20px", margin: "0px"}}>Уровень(угрозы): </p>
                        <Select
                            options={optionsLevel} 
                            isMulti
                            placeholder = "Выбрать уровень"
                        />
                    </div>
                    <input type="text" className="search" />
                </div>

                {monsterItems.length}
                <section className="products-list">
                    {monsterItems.map(item =>
                        <Link to={'/monster/' + item.id.toString()}><ProductView img = {item.image} name = {item.name}/> </Link>
                    )}

                </section>

            </div>
        </main>

    )
}

export default Bestiary;

//<Link to='/monster'><ProductView img = 'https://i.pinimg.com/originals/ca/54/96/ca5496b0fb8d28148f1ebdbad180bfdb.png' name = "Гоблин"/> </Link>

