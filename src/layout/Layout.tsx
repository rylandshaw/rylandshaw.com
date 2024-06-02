import '../styles/Typography.scss'
import '../styles/Layout.scss'
import Description from '../sections/Description'
import BigNews from '../sections/BigNews'
import LittleNews from '../sections/LittleNews'
import Header from '../sections/Header'

export default function Layout() {

  return (
    <div className='Site'>
      <header className='Header'>
        <Header />
      </header>
      <section className='Description'>
        <Description />
      </section>
      <section className='News'>
        <section className='BigNews'>
          <BigNews />
        </section>
        <section className='SmallNews'>
          <LittleNews />
        </section>
      </section>
    </div >
  )
}