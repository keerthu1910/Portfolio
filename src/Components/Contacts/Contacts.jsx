import './Style.scss';
import linkedin from '../../assets/linkedin.png';
import git from '../../assets/github.png';
import mail from '../../assets/email.png';
import { useNavigate } from 'react-router-dom';

export const Contacts = () => {
    const navigate = useNavigate();
    return(
        <div className='container' id='contact'>
        <div className='contacts-container'>
            <div className='logo-container'><a href='https://www.linkedin.com/in/keerthana-selvaraj-766209180/' target='_blank'><img src={linkedin}/></a></div>
            <div className='logo-container'><a href='https://github.com/keerthu1910' target='_blank'><img src={git} /></a></div>
            <div className='logo-container'><a href='mailto:keerthanas1910@gmail.com'><img src={mail} /></a></div>
        </div>
        </div>
    )
}