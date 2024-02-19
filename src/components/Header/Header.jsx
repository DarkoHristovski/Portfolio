import './header.css'

const Header = () =>{
    return(
        <header className="section">
            <div className="container flex header-content">
        <div className="logo"><a href="/">Darko</a></div>
        <div className="header-left flex flex-center">
                <nav className="navigation">
                    <ul className='flex'>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <button type='button' className='btn'>Resume</button>
                    </div>
                    </div>
        </header>
    )
}


export default Header