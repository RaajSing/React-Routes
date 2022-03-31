import { Link } from 'react-router-dom';
import './header.css' ;
import CustomLink from '../Custom-Link/CustomLink';

function Header(){
    return (
        <nav>
            <a href="#" className='logo'>Logo</a>
            <ul>
                {/* Navigation er Link er moddhe click korle jeno Page Reload Nahoy sei jonno Link use korte hoy. Tanohole ul li diyei kaj hoye jeto.*/}
            
                <Link className='navLink' to="/">Home</Link>
                <Link className='navLink' to="/Friends">Friends</Link>
                <Link className='navLink' to="/Posts">Posts</Link>
                <Link className='navLink' to="/About">About</Link>

                {/* <CustomLink className='navLink' to="/">Home</CustomLink>
                <CustomLink className='navLink' to="/Friends">Friends</CustomLink>
                <CustomLink className='navLink' to="/About">About</CustomLink> */}
            </ul>
        </nav>
    )
}

export default Header ;