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
      <header className='flex justify-around  shadow-xl p-[1%] dark:bg-[#230046] dark:text-[#deedc7]'>
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


      {/* section1 */}
      <section className=' dark:bg-[#230046] dark:text-[#deedc7]'>

        <div className='flex flex-col items-center'>
          <h1 className='mt-[40px] md:text-[50px]  md:w-[60%] mob:w-[70%] font-bold'>{t("section1.titletxt")}</h1>

          <div className='flex'>
            <Button variant="contained" sx={{ background: "#212B31", marginRight:"10px" }}>{t("head.order")}</Button>
            <Button variant="outlined">{t("section1.details")}</Button>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <img src='src/assets/Rectangle (1).png' />
          <img src='src/assets/Rectangle (2).png' />
        </div>
      </section>


    </>
  )
}
export default App
