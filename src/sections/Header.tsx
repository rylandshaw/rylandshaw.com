import profile from '../assets/profile.jpeg'

export default function Header() {
  return (
    <div className="Profile">
      <img src={profile} />
      <div>
        <h1>Ryland Shaw</h1>
        <nav>
          <a href="https://docs.google.com/document/d/1-EX4dSu5AAB0UC_YaHiMXa-ddoPEF6z7oB6f7sqPb7s/view" target="_blank">CV</a>
          <span>❄</span>
          <a href="https://scholar.google.com/citations?user=fHPG_O0AAAAJ" target="_blank">Scholar</a>
          <span>❄</span>
          <a href="https://www.linkedin.com/in/ryland-shaw/" target="_blank">LinkedIn</a>
          <span className='EmailLink'>v-rylandshaw@microsoft.com</span>
        </nav>
      </div>
    </div>
  )
}