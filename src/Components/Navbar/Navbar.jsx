import './Style.scss';
import logo from '../../assets/Logo.png';
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
    return(
        <div className='navbar-container'>
            <div className='logo-container'>
                <img src={logo} alt='KS' />
            </div>
            <div className='navlinks-container'>
                <HashLink smooth to='/#about' className='navlink'>About</HashLink>
                <HashLink smooth to='/#projects' className='navlink'>Projects</HashLink>
                <HashLink smooth to='/#contact' className='navlink'>Contact</HashLink>
            </div>
        </div>
    )
}