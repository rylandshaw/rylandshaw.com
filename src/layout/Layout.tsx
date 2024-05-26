import '../styles/Typography.scss'
import '../styles/Layout.scss'
import Description from '../sections/Description'
import BigNews from '../sections/BigNews'
import LittleNews from '../sections/LittleNews'
import profile from '../assets/profile.jpeg'

export default function Layout() {

  return (
    <div className='Site'>
      <header>
        <div className="Profile">
          <img src={profile} />
          <div>
            <h1>Ryland Shaw</h1>
            <nav>
              <a href="/">CV</a>
              <span>|</span>
              <a href="/">Scholar</a>
              <span>|</span>
              <a href="/">LinkedIn</a>
              <a className='EmailLink' href="mailto:ryland.shaw@gmail.com">ryland.shaw@gmail.com</a>
            </nav>
          </div>

        </div>

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