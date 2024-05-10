import { Link } from 'react-router-dom';
import './Style.scss';
import {useRef,useEffect,useState} from 'react';
export const Projects = () => {
    const positionref= useRef();
    const [visible,setVisible] = useState();
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        })
        observer.observe(positionref.current)
    },[])
    return(
        <div className='projects' id='projects'>
        <h1>Projects</h1>
        <div className='project-container' ref={positionref}>
            <div className={visible ? 'project-content visible' : 'project-content'}>
                <p className='title'>Analytics Landing Page</p>
                <div className='tech-stack'>
                    <div>React JS</div>
                    <div>SCSS</div> 
                </div>
                <div className='project-description'>
                    <p>A Responsive landing page designed for an analytics-based platform. The design was adapted from Figma. The UI is developed using the React JS framework.</p>
                </div>
                <div className='project-link'>
                    <a href='https://keerthu1910.github.io/analytics-landingpage/' target='_blank'>View Project</a>
                </div>
            </div>
            <div className={visible ? 'project-content visible' : 'project-content'}>
                <p className='title'>Library application</p>
                <div className='tech-stack'>
                    <div>React JS</div>
                    <div>React-hook-form</div>
                    <div>SQL</div>
                    <div>Express JS</div>
                    <div>SCSS</div> 
                </div>
                <div className='project-description'>
                    <p>The application is designed for library management, featuring role-based login for administrators and library users. It encompasses modules for book lending, user management, and automatic due-date notifications sent to users via email."</p>
                </div>
                <div className='project-link'>
                    <a href='https://github.com/keerthu1910/Library' target='_blank'>View Project</a>
                </div>
            </div>
            <div className={visible ? 'project-content visible' : 'project-content'}>
                <p className='title'>E-commerce website</p>
                <div className='tech-stack'>
                    <div>React JS</div>
                    <div>Redux</div>
                    <div>SCSS</div> 
                </div>
                <div className='project-description'>
                    <p>This e-commerce website, powered by React JS, seamlessly integrates payment functionality. State management is efficiently handled using Redux.</p>
                </div>
                <div className='project-link'>
                    <a href='https://cart95.netlify.app/' target='_blank'>View Project</a>
                </div>
            </div>
        </div>
        </div>
    )
}