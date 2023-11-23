import style from '../css/main.module.css'
import { useState } from "react";

type form = {
  color: string | undefined
}

export function Converter() {

  const [form, setForm] = useState<form>({
    color: ""
  });

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
     : undefined;
  }

  const handlerColorChange = ({target}) => {
    const {value} = target;
    const currentColor = value.length === 7 ? hexToRgb(value) : undefined;
    setForm(() => ({
      color: currentColor
    }))
  }

  document.body.style.backgroundColor = form.color === undefined ? 'red' : `rgb(${form.color})`
  const rgbColor = form.color === undefined ? 'Ошибка!' : `rgb(${form.color})`

  return (
    <form className='form'>
      <input type="text" name="hex" placeholder='#123123' maxLength={7} minLength={7} onChange={handlerColorChange}/>
      <input type="text" name="rgb" required value={rgbColor}/>
    </form>
  )
}
