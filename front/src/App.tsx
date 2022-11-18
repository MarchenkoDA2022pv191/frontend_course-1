import React from 'react';

import axios from 'axios';

import {Header} from './components/App/Header'
import { Footer } from './components/App/Footer';
import {Hero} from './Views/Hero';
import { Bestiary } from './Views/Bestiary';
import {Login} from './Views/Login';
import {Monster} from './Views/Bestiary/Monster';
import { Registration } from './Views/Registration';
import { useState } from 'react';
import './App.css';

import {Routes, Route, BrowserRouter} from 'react-router-dom'

import styles from './App.module.scss'


const App = () => {

  const [userName, setUserName] = useState("Пользователь");
  const setName = (name:string) => {
    setUserName(name);
  }

  return (
      <BrowserRouter>
      <body>
        <div className="Body">
          <Header/>
          <Routes>
            <Route path="/" element = {<Hero/>}/>
            <Route path='/bestiary' element = {<Bestiary/>} />
            <Route path = '/login' element = {<Login setName={setName}/>}/>
            <Route path='/autorisation' element = {<Registration setNickName={setName}/>}/>
            <Route path='/monster/:id' element = {<Monster />}/>
          </Routes>
          <Footer/>
        </div>
      </body>
      </BrowserRouter>
  );
}

export default App;
