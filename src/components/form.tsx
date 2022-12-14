import React from "react";
import Button from "./button";
import style from './form.module.scss'

const Form = () => {
  return (
    <form action="" className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input type="text" name="tarefa" id="tarefa"
          placeholder="O que você quer estudar" required />
      </div>
      <div className={style.inputContainer} >
        <label htmlFor="tempo">Tempo</label>
        <input type="time" step="1" name="tempo" id="tempo"
          min="00:00:00" max="01:30:00" required />
      </div>
      <Button />
    </form>
  )
}

export default Form