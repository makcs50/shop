import { useState } from 'react'
import Header from './header/Header'
import Main from './menu/Main'
import Products from './products/products'
import styles from './App.module.css'


function App() {

  return (
    <>
      <Header />
      <div className={styles.main}>
        <Main />
        <Products />
      </div>
    </>
  )
}

export default App
