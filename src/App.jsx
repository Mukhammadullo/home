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
          <h1 className='mt-[40px] md:text-[50px]  md:w-[60%] mob:w-[70%] font-bold text-center mb-[20px]'>{t("section1.titletxt")}</h1>

          <div className='flex'>
            <Button variant="contained" sx={{ background: "#212B31", marginRight: "10px" }}>{t("head.order")}</Button>
            <Button variant="outlined">{t("section1.details")}</Button>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <img src='src/assets/Rectangle (1).png' />
          <img src='src/assets/Rectangle (2).png' />
        </div>

        {/* cards */}
        <div className='md:flex justify-around mt-[8%]'>
          <div className='flex flex-col justify-center items-center'>
            <img src='src/assets/Frame.svg' />
            <p className='m-[10px]'>{t("cards.increased")}</p>
            <p className='text-[#72787D] w-[60%] m-[10px] text-center'>{t("cards.innertxt")}</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src='src/assets/Frame (1).svg' />
            <p className='m-[10px]'>{t("cards.increased")}</p>
            <p className='text-[#72787D] w-[60%] m-[10px] text-center'>{t("cards.innertxt")}</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src='src/assets/Frame (2).svg' />
            <p className='m-[10px]'>{t("cards.increased")}</p>
            <p className='text-[#72787D] w-[60%] m-[10px] text-center'>{t("cards.innertxt")}</p>
          </div>
        </div>

      </section>

      {/* section2 */}
      <section className=' dark:bg-[#230046] dark:text-[#deedc7]'>

        {/* title */}
        <div className='flex flex-col items-center'>
          <h1 className='m-[20px] text-[30px] mt-[8%]'>{t("section2.titletxt")}</h1>
          <p className='text-[#72787D] w-[80%] md:text-[20px] text-center'>{t("section2.innertxt")}</p>
          <img src='src/assets/Rectangle.svg' />
        </div>
      </section>


      {/* section3 */}
      <section className=' dark:bg-[#230046] pt-[5%]'>

        {/* title_section */}
        <div className='flex justify-center  mb-[30px]'>
          <h1 className='text-[#212B31] dark:text-[#deedc7] md:text-[40px] w-[80%] text-center'>{t("section3.title")}</h1>
        </div>

        {/* innercard */}
        <div className='md:flex'>
          {/* left */}
          <div className='md:w-[50%] m-[10px] flex flex-col items-center justify-center'>
            <h1 className='text-[#212B31] dark:text-[#deedc7] font-medium w-[80%]  text-[30px] m-[10px]'>{t("section3.innertxt")}</h1>
            <h1 className='text-[#72787D] dark:text-[#deedc7] w-[80%] text-[20px]'>{t("section3.txt")}</h1>
            <h1 className='font-bold mt-[20px] dark:text-[#deedc7]'>{t("section3.shortTxt")}</h1>
          </div>

          {/* right */}
          <div className='flex justify-center' >
            <img src='src/assets/Rectangle (1).svg' />
          </div>
        </div>

      </section>


      {/* section4 */}
      <section className='dark:bg-[#230046] pt-[4%]'>
        <div className='flex justify-center'>
          <img src='src/assets/section 6.svg' />
        </div>
      </section>


      {/* section5 */}
      <section className='dark:bg-[#230046] pt-[4%]'>
        <div className='flex flex-col items-center'>
          <h1 className='md:text-[40px] mob:text-[25px] dark:text-[#deedc7]'>{t("section5.title")}</h1>
          <p className='text-[#72787D] text-[20px] md:w-[60%] text-center m-[30px]'>{t("section5.innertitle")}</p>
        </div>
      </section>



      {/* section6 */}
      <section>

        {/* row1 */}
        <div className='md:flex justify-center items-center pt-[3%]  dark:bg-[#230046]'>
          {/* left */}
          <div className='md:w-[40%]'>
            <h1 className='dark:text-[#deedc7] md:text-[30px] mob:text-[15px] mob:text-center '>{t("section6.row1Title")}</h1>
            <p className='text-[#72787D] dark:text-[#deedc7] md:w-[70%] mt-[20px] md:text-[20px] mob:m-[10px]'>{t("section6.row1txt")}</p>
          </div>

          {/* right */}
          <div className=' md:w-[30%]'>
            <img src='src/assets/Rectangle (4).png' />
          </div>
          </div>

      </section>

    </>
  )
}
export default App
