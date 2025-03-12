import logo from '/logo-name.svg'

export default function Header () {
  const now = new Date();

  return (
      <header>
        <img src={logo} alt='logo'></img>
        {/* <h3>Dasha</h3> */}
        <span>Time: {now.toLocaleTimeString()}</span>
      </header>
  )
}