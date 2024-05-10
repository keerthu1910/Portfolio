import './Style.scss';
import photo from '../../assets/Photo.jpg'
export const About = () => {
    return(
        <div className='about-container' id='about'>
            <div className='about-content'>
                <h1>Hi, I'm Keerthana Selvaraj</h1>
                <p>I am a frontend developer specializing in React JS, with proven experience developing web applications. I embrace the fresh challenges that come up the way and offer opportunities to learn new technologies.</p>
            </div>
            <div className='img-container'>
                <img src={photo} alt='photo' />
            </div>
        </div>
    )
}