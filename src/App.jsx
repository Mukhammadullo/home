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


        {/* row2 */}
        <div className='md:flex justify-center items-center pt-[3%]  dark:bg-[#230046]'>
          {/* right */}
          <div className=' md:w-[30%]'>
            <img src='src/assets/Rectangle (5).png' />
          </div>
          {/* left */}
          <div className='md:w-[40%]'>
            <h1 className='dark:text-[#deedc7] md:text-[30px] mob:text-[15px] mob:text-center '>{t("section6.row2Title")}</h1>
            <p className='text-[#72787D] dark:text-[#deedc7] md:w-[70%] mt-[20px] md:text-[20px] mob:m-[10px]'>{t("section6.row2txt")}</p>
          </div>
        </div>


        {/* row3 */}
        <div className='md:flex justify-center items-center pt-[3%]  dark:bg-[#230046]'>
          {/* left */}
          <div className='md:w-[40%]'>
            <h1 className='dark:text-[#deedc7] md:text-[30px] mob:text-[15px] mob:text-center '>{t("section6.row3Title")}</h1>
            <p className='text-[#72787D] dark:text-[#deedc7] md:w-[70%] mt-[20px] md:text-[20px] mob:m-[10px]'>{t("section6.row3txt")}</p>
          </div>

          {/* right */}
          <div className=' md:w-[30%]'>
            <img src='src/assets/Rectangle (6).png' />
          </div>
        </div>

      </section>



      {/* section7 */}
      <section className='flex flex-col items-center dark:bg-[#230046]'>
        <h1 className='md:text-[50px] mob:text-[30px] dark:text-[#deedc7] mt-[80px] mb-[20px]'>{t("section7.title")}</h1>
        <p className='text-[#72787D] dark:text-[#deedc7] text-[20px] md:+w-[40%] text-center'>{t("section7.innertxt")}</p>
      </section>


      {/* section8 */}
      <section className='dark:bg-[#230046]'>

        {/* row1 */}
        <div className='md:flex justify-around pt-[4%]'>

          {/* card1 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/Frame (6).png' />
            </div>
            <div>
              <h1 className='font-bold dark:text-[#deedc7] mb-[10px]'>{t("section8.row1Card1title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row1Card1txt")}</p>
            </div>
          </div>

          {/* card2 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/Waste removal.png' />
            </div>
            <div>
              <h1 className='font-bold mb-[10px] dark:text-[#deedc7]'>{t("section8.row1Card2title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row1Card2txt")}</p>
            </div>
          </div>

          {/* card3 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/Formwork.png' />
            </div>
            <div>
              <h1 className='font-bold mb-[10px] dark:text-[#deedc7]'>{t("section8.row1Card3title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row1Card3txt")}</p>
            </div>
          </div>

        </div>

        {/* row2 */}
        <div className='md:flex justify-around mt-[4%]'>

          {/* card1 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/Precasts.png' />
            </div>
            <div>
              <h1 className='font-bold mb-[10px] dark:text-[#deedc7]'>{t("section8.row2Card1title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row2Card1txt")}</p>
            </div>
          </div>

          {/* card2 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/Facades.svg' />
            </div>
            <div>
              <h1 className='font-bold mb-[10px] dark:text-[#deedc7]'>{t("section8.row2Card1title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row2Card1txt")}</p>
            </div>
          </div>

          {/* card3 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/Fit-out.png' />
            </div>
            <div>
              <h1 className='font-bold mb-[10px] dark:text-[#deedc7]'>{t("section8.row2Card3title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row2Card3txt")}</p>
            </div>
          </div>

        </div>


        {/* row3 */}
        <div className='md:flex justify-around mt-[4%]'>

          {/* card1 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/Scaffolding.png' />
            </div>
            <div>
              <h1 className='font-bold mb-[10px] dark:text-[#deedc7]'>{t("section8.row3Card1title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row3Card1txt")}</p>
            </div>
          </div>


          {/* card2 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/Frame (7).png' />
            </div>
            <div>
              <h1 className='font-bold mb-[10px] dark:text-[#deedc7]'>{t("section8.row3Card2title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row3Card2txt")}</p>
            </div>
          </div>



          {/* card3 */}
          <div className='flex md:w-[25%]'>
            <div className='md:w-[60%]'>
              <img src='src/assets/MEP.png' />
            </div>
            <div>
              <h1 className='font-bold mb-[10px] dark:text-[#deedc7]'>{t("section8.row3Card3title")}</h1>
              <p className='text-[#72787D] dark:text-[#deedc7]'>{t("section8.row3Card3txt")}</p>
            </div>
          </div>

        </div>
        <p className='text-center  dark:text-[#deedc7] p-[3%]'>{t("section8.last")}</p>
      </section>



      {/* section9 */}
      <section className='dark:bg-[#230046]'>

        {/* title */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[40px] dark:text-[white]'>{t("section9.title")}</h1>,
          <p className='text-[#72787D] text-[20px] w-[70%] text-center'>{t("section9.innertxt")}</p>
        </div>


        {/* cards */}
        <div className='md:flex justify-around pt-[4%]'>

          {/* card1 */}
          <div className='md:w-[26%] flex flex-col items-center'>
            <img src='src/assets/Frame (8).png' />
            <h1 className='font-bold p-[10px] dark:text-[white]'>{t("section9.card1title")}</h1>
            <p className='text-[#72787D] text-center'>{t("section9.card1txt")}</p>
          </div>

          {/* card2 */}
          <div className='md:w-[26%] flex flex-col items-center'>
            <img src='src/assets/Frame (9).png' />
            <h1 className='font-bold p-[10px] dark:text-[white]'>{t("section9.card2title")}</h1>
            <p className='text-[#72787D] text-center'>{t("section9.card2txt")}</p>
          </div>

          {/* card3 */}
          <div className='md:w-[26%] flex flex-col items-center'>
            <img src='src/assets/Frame (10).png' />
            <h1 className='font-bold p-[10px] dark:text-[white]'>{t("section9.card3title")}</h1>
            <p className='text-[#72787D] text-center'>{t("section9.card3txt")}</p>
          </div>

        </div>
      </section>

      {/* section10 */}
      <section className='p-[5%] dark:bg-[#230046]'>

        <div className='md:flex bg-[#F6F8F9] p-[4%] rounded-[12px] dark:bg-[#230046]'>
          <img src='src/assets/Frame (11).png' />
          <h1 className='ml-[10px] mr-[20px] dark:text-[white]'>{t("section10.txt")}</h1>
          <Button variant="outlined">{t("section1.details")}</Button>
        </div>
      </section>



      {/* section11 */}
      <section className='bg-slate-900'>
        {/* top */}
        <div className='md:flex bg-slate-900 justify-around items-center text-[white]'>
          {/* left */}
          <div className='m-[4%] p-[2%]'>
            <h1 className='m-[4%] text-[20px]'>{t("section11.cardtoptitle")}</h1>
            <p className='m-[10px] text-[18px]'>{t("section11.txt1")}</p>
            <p className='w-[70%]'>{t("section11.txt2")}</p>
            <p className='m-[10px] text-[18px]'>{t("section11.txt3")}</p>
            <p className='w-[70%]'>{t("section11.txt4")}</p>
            <p className='m-[10px] text-[18px]'>{t("section11.txt5")}</p>
            <p className='w-[70%]'>{t("section11.txt6")}</p>
            <Button variant="contained" sx={{ background: "white", marginRight: "10px", color: "black", marginTop: "40px" }}>{t("head.order")}</Button>
            <Button variant="outlined" sx={{ marginTop: "40px" }}  >{t("section1.details")}</Button>
          </div>
          {/* right */}
          <div className='dark:bg-slate-900'>
            <img src='src/assets/Rectangle (7).png' />
          </div>
        </div>

        {/* cards */}
        <div className='md:flex justify-around pt-[4%]'>

          {/* card1 */}
          <div className='md:w-[26%] flex flex-col items-center'>
            <img src='src/assets/Frame (8).png' />
            <h1 className='font-bold p-[10px] dark:text-[white]'>{t("section9.card1title")}</h1>
            <p className='text-[#72787D] text-center'>{t("section9.card1txt")}</p>
          </div>

          {/* card2 */}
          <div className='md:w-[26%] flex flex-col items-center'>
            <img src='src/assets/Frame (9).png' />
            <h1 className='font-bold p-[10px] dark:text-[white]'>{t("section9.card2title")}</h1>
            <p className='text-[#72787D] text-center'>{t("section9.card2txt")}</p>
          </div>

          {/* card3 */}
          <div className='md:w-[26%] flex flex-col items-center'>
            <img src='src/assets/Frame (10).png' />
            <h1 className='font-bold p-[10px] dark:text-[white]'>{t("section9.card3title")}</h1>
            <p className='text-[#72787D] text-center'>{t("section9.card3txt")}</p>
          </div>

        </div>
      </section>

      {/* section12 */}
      <section className='dark:bg-[#230046]'>

        <div className='md:flex p-[8%]'>

          {/* left */}
          <div className='md:w-[50%]'>
            <h1 className='text-[30px] m-[20px]'>{t("section12.cardleftTitle")}</h1>
            <p>{t("section12.card1leftTxt")}</p>
            <img src='src/assets/Rectangle (8).png' />
          </div>
          {/* right */}

          <div className='md:w-[50%]'>
            <h1 className='mt-[30px] text-[20px]'>{t("section12.txt1")}</h1>
            <h1 className='text-[#72787D]'>{t("section12.txt2")}</h1>
            <h1 className='mt-[30px] text-[20px]'>{t("section12.txt3")}</h1>
            <h1 className='text-[#72787D]'>{t("section12.txt4")}</h1>
            <h1 className='mt-[30px] text-[20px]'>{t("section12.txt5")}</h1>
            <h1 className='text-[#72787D]'>{t("section12.txt6")}</h1>
            <h1 className='mt-[30px] text-[20px]'>{t("section12.txt7")}</h1>
            <h1 className='text-[#72787D]'>{t("section12.txt8")}</h1>
            <Button variant="contained" sx={{ background: "white", marginRight: "10px", color: "black", marginTop: "40px" }}>{t("head.order")}</Button>
            <Button variant="outlined" sx={{ marginTop: "40px" }}  >{t("section1.details")}</Button>

          </div>

        </div>
      </section>



      {/* section13 */}
      <section className='dark:bg-[#230046]'>
        <div className='flex justify-center'>
          <img src='src/assets/Group 75.png' />
        </div>
      </section>


      {/* section14 */}
      <section className='flex justify-center p-[4%] dark:bg-[#230046] '>

        <div className='bg-[#FFD042]  rounded-[12px] w-[50%] p-[6%]'>
          <h1>{t("section16.title")}</h1>
          <Button variant="contained" sx={{ background: "white", marginRight: "10px", color: "black", marginTop: "40px" }}>{t("head.order")}</Button>
          <Button variant="outlined" sx={{ marginTop: "40px" }}  >{t("section1.details")}</Button>

        </div>

      </section>


      {/* section15 */}
      <section className='p-[4%] dark:bg-[#230046]  dark:text-[white] '>


        <div className='mob:flex flex-wrap md:flex justify-around'>
          {/* ul1 */}
          <ul>
            <li><img src='src/assets/logo (1).png' /></li>
            <li>{t("section17.city")}</li>
            <li>Пресненская наб., 88, оф. 527</li>
            <li>info@stroycontrol.ru</li>
          </ul>

          {/* ul2 */}
          <ul>
            <li className='mb-[10px] font-bold'>{t("section17.product")}</li>
            <li>{t("section17.process")}</li>
            <li>{t("section17.products")}</li>
          </ul>

          {/* ul2 */}
          <ul>
            <li className='mb-[10px] font-bold'>{t("section17.service")}</li>
            <li>{t("section17.clients")}</li>
            <li>{t("section17.reliability")}</li>
          </ul>
          {/* ul3 */}
          <ul>
            <li className='mb-[10px] font-bold'>{t("section17.company")}</li>
            <li>{t("section17.about")}</li>
            <li>{t("section17.connect")}</li>
          </ul>

        </div>


      </section>


      {/* footer */}
      <footer className='flex justify-around dark:bg-[#230046]  dark:text-[white] p-[2%]'>
        <p>{t("footer.txt")}</p>
        <p>{t("footer.t2")}</p>
      </footer>


    </>
  )
}
export default App
