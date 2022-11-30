import React from 'react';
// import './App.css';
import Form from './components/form';
import List from './components/list'
import style from './App.module.scss'

const App = () => {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  )
}

export default App
