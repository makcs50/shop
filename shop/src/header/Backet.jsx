import React from 'react';
import Basket from '../assets/basket.png';
import Style from './Header.module.css'


function Backet() {
    return (
        <div className='basket_rod'>
            <img className={Style.basket_rod} src={Basket} alt="basket" />
        </div>
    );
}

export default Backet