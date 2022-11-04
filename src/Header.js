import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {

    return (
        <div className='nav'>
            <ul>
                <li >Connor Thompson</li>
                <li>
                    <a href='https://github.com/1645558'><GitHubIcon /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/connor-thompson-025286237/'><LinkedInIcon /></a>
                </li>
            </ul>
        </div>
    )
}

export default Header