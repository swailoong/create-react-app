import './AboutMe.css'
import pic from './pic.jpg'

export default function AboutMe(){
    return (
        <div id="AboutMe">
            <h1 id="about-title">About Me</h1>
            <div id="about-section">
                <img id="pic" src={pic} alt="pic"></img>
                <div id="skillbox">
                    <div class="skills">React</div>
                    <div class="skills">D3</div>
                    <div class="skills">PostgreSQL</div>
                    <div class="skills">Javascripts</div>
                    <div class="skills">PHP</div>
                    <div class="skills">HTML</div>
                    <div class="skills">CSS</div>
                </div>
                <p id="about-desc">2017 was the year I stepped into the tech industry. 
                    As a service desk agent, I gained exposure to various software and environments. 
                    Over time, as my career progressed, my daily routine shifted from basic tasks like password resets and disk defragmentation to specialized Microsoft M365 support. 
                    This included mail server migrations, investigating system glitches through log file analysis, and writing PowerShell scripts. 
                    However, things took a downturn when I encountered some physical health issues, which also affected me psychologically. 
                    Despite my efforts to battle these challenges, I eventually realized I needed to take a break.
                    <br></br><br></br>
                    The journey was tough, but with the support of those around me, things began to improve. 
                    As I invested more time in self-care, I realized I needed to pursue a path that offered better career advancement. 
                    I remembered the satisfaction I felt when solving complex cases and how it highlighted my curiosity and adventurous spirit. 
                    The struggle to find solutions is challenging, but the sense of accomplishment is immensely rewarding. 
                    While working on my e-commerce business, I started learning to code.
                    <br></br><br></br>
                    My journey began with PostgreSQL and MongoDB, followed by Python, and now I am diving into frontend development with HTML, CSS, JavaScript, ReactJS, VueJS, and D3JS. 
                    Self-learning has been a difficult journey, accompanied by self-doubt, demotivation, and confusion. 
                    These challenges are frustrating, but they had never failed to push me to strive for improvement. 
                    It has taken a lot of dedication to reach this point, to really call myself ready to approach the path of getting a developer job.
                    If you are reading this message, thanks for coming this far. I hope you would carry on with the review of my profile. 
                    Please consider reaching out, be it a word of encouragement, suggestions, or simply a "hi"! 
                </p>
            </div>
        </div>
    )
}