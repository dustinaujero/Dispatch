import React from 'react';

const Wumpus = () => (
    <div className="wumpus-div">
        <img src={window.wumpus} alt="go dm someone" />
        <div className="wumpus-info">
            <div>Like what you see? Need a developer? </div>
            Email me at <a href="mailto:dustin@aujero.net?subject=WE WANT TO HIRE YOU">dustin@aujero.net</a>
            Or 
            Checkout my Profiles: 
            <div>
                <a href="https://www.linkedin.com/in/dustin-a-0aab33127/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn </a>
                 - 
                 <a href="https://github.com/dustinaujero" target="_blank"><i class="fab fa-github-square"></i> GitHub </a>
                 - 
                 <a href="https://angel.co/dustin-aujero" target="_blank"><i class="fab fa-angellist"></i> AngelList </a>
                 - 
                 <a href="http://dustin-aujero.me/" target="_blank"><i class="fas fa-user-alt"></i> PersonalSite </a>
            </div>
        </div>
    </div>
);
export default Wumpus;