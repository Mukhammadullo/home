import './App.css'

// dark
import Switcher from './components/Switcher'


import { useTranslation } from "react-i18next"
import { useState } from 'react'

// icons
import MenuIcon from '@mui/icons-material/Menu';

// button
import Button from '@mui/material/Button';



function App() {
  const [lng, setLng] = useState("ru");
  const { t, i18n } = useTranslation()


  //  function
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (

    <>

      {/* header */}
      <header className='flex justify-around  shadow-xl p-[1%] dark:bg-slate-900 dark:text-[#deedc7]'>
        <div>
          <img src='src/assets/logo (1).png' />
        </div>

        <div className='mob:hidden md:flex'>
          <p className='m-[10px]'>{t("head.home")}</p>
          <p className='m-[10px]'>{t("head.about")}</p>
          <p className='m-[10px]'>{t("head.product")}</p>
          <p className='m-[10px]'>{t("head.process")}</p>
          <p className='m-[10px]'>{t("head.reliability")}</p>
          <p className='m-[10px]'>{t("head.clients")}</p>
          <p className='m-[10px]'>{t("head.connect")}</p>
          <Button variant="contained" sx={{ background: "#212B31" }}>{t("head.order")}</Button>
        </div>



        {/* treanlate */}
        <select className='bg-[white] border-none text-black h-[30px] w-[55px] font-bold' value={lng} onChange={(e) => { changeLanguage(e.target.value); setLng(e.target.value) }}>
          <option value={"en"}>EN</option>
          <option value={"ru"}>RU</option>
        </select>

        <div className='mob:inline-flex md:hidden'>
          <MenuIcon></MenuIcon>
        </div>



        {/* switcher */}
        <Switcher />
      </header>




    </>
  )
}
export default App
