import React from 'react';
import '../styles/Resume.css'


export default function Resume() {

    return (
        <div>
            <div className="header">
                <h1 className="headerh1">Matthew Braly</h1>
                <h2 className="headerh2">Full Stack Developer</h2>
            </div>
            <div className="leftcolumn">
                <h3>Python, Flask, React, JavaScript, Keras, HTML/CSS, SQL</h3>
                <a href="https://github.com/mbraly01">Github</a>
                <span className="linkedIn"><a href="https://www.linkedin.com/in/matt-braly/">Linkedin</a></span>
                <h2>Experience</h2>
                <div className="experience">
                    <div className="mb-creative">
                        <h2>MB Creative - Full Stack Developer</h2>
                        <h3>2019 - Present</h3>
                        <p>A software engineering and web development consultancy building creative tools and projects from the ground up.</p>
                        <ul>
                            <li>Build supervised/predictive learning models utilizing 20,000+ data units (e.g., to predict winners of UFC fights)</li>
                            <li>Develop new applications such as image based generators (e.g., random systems matching images and captions from comics, novel logo image generator)</li>
                            <li>Develop 311 API based application and accompanying data visualizations (e.g., interactive maps, lists, etc.)</li>
                            <li>Collaborate with client to develop product vision and strategize project roadmaps</li>
                            <li>Manage continuous product feedback loop with clients and other stakeholders</li>
                        </ul>
                    </div>
                    <div className="littlstar">
                        <h2>Littlstar - Account Manager, Virtual Reality</h2>
                        <h3>2017-2020</h3>
                        <p>A media technology platform for consolidating 360-video, augmented reality, and enterprise software solution tools/apps.</p>
                        <ul>
                            <li>Build, manage, clean, and maintain a comprehensive database of 10k+ prospective and current clients and partners</li>
                            <li>Aid in the development of creative briefs (research and analysis) and continually research new technological developments in AR (augmented reality) and virtual reality (VR)</li>
                            <li>Implement and execute marketing plans through collaboration with clients, creative direction and art/design, and third-party contractors</li>
                            <li>Conduct industry research on virtual reality and augmented reality technology (psychology, human interaction, marketing, retail environment) and develop content and slides for client generation presentations</li>
                        </ul>
                    </div>
                    <div className="sideways">
                        <h2>Sideways - Information Technology (IT) Manager</h2>
                        <h3>2016-2016</h3>
                        <p>Digital branding and creative agency with an emphasis on culture-defining branding in the hospitality industry.</p>
                        <ul>
                            <li>Led the development of all internal employee signatures using HTML and CSS</li>
                            <li>Implemented new digital metrics reporting system using Facebook Analytics to review and analyze campaign data</li>
                        </ul>
                    </div>
                    <div className="rams">
                        <h2>University of Rhode Island - Digital Innovation Specialist, Admissions</h2>
                        <h3>2015-2016</h3>
                        <p>Renowned, public research university for the state of Rhode Island.</p>
                        <ul>
                            <li>Created web-based engagement tools utilizing social media for the Office of Admissions to communicate with prospective students online</li>
                            <li>Built and launched new tour program</li>
                        </ul>
                    </div>
                </div>
                <h2>Cerifications:</h2>
                <div className="certifications">
                    <h3>Byte Academy - Full Stack Program</h3>
                    <h4>2020</h4>
                    <h3>Thinkful - Data Science Progam</h3>
                    <h4>2019</h4>
                </div>
                <h2>Education</h2>
                <div className="education">
                    <h3>Tufts University</h3>
                    <h4>Class of 2015</h4>
                </div>
            </div>
            <div className="rightcolumn">
            <h1>Skills</h1>
            <div className="skills">
                <h2>Programming Skills</h2>
                <h4>Python</h4>
                <h4>React</h4>
                <h4>Flask</h4>
                <h4>SQL</h4>
                <h4>Javascript</h4>
                <h4>HTML/CSS</h4>
                <h4>Keras</h4>    
                <h2>Operating Systems</h2>
                <h4>Windows</h4>
                <h4>iOS</h4>
                <h4>Linux</h4>
                <h2>Software</h2>
                <h4>VSCode</h4>
                <h4>Microsoft Office Suite</h4>
                <h4>GSuite</h4>
            </div>
            </div>
            
        </div>
    )
}
