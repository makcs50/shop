import React from 'react'
import style from './Menu.module.css'

const Menu = () => {
  return (
    <>
    <div className={style.rod_main}>
        <ul>
            <li className={style.li1}>Гаджеты и аксессуары</li>
            <hr />
            <li className={style.li1}>Бытовая химия</li>
            <hr />
            <li className={style.li1}>Прочее</li>
        </ul>
    </div>
    </>
  )
}

export default Menu