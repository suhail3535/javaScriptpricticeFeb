import React from 'react'
import "./experience.css"
const Experience = () => {
    return (
        <div className='exp_container'>

            <h1 style={{ textAlign: "center", color: "#4c3575" }}>Professional experience</h1>
            <div className='main_container_div'>
                <div className='card_exp'>

                    <div className='heading_cont_first'>
                        <div>
                            <h2 className='title_pos1'>Vastu Housing Finance Corporation pvt ltd </h2>
                            <h4>React Js Developer</h4>
                        </div>
                        <div>
                            <h2 className='title_pos1'>Nashik,Maharashtra,India
                            </h2>
                            <h4>July 2023-November 2023</h4>
                        </div>
                    </div>
                    <div className='roles_div'>
                        <ul>
                            <li>Developed and implemented the administrative interface of the Loan Origination System (LOS) for efficient management of loan processes.
                            </li>
                            <li>Integrated user management functionalities, including roles and permissions, to ensure secure access and data integrity.</li>
                            <li>Converted Figma designs into web pages using React and some UI library(Ant Design).</li>
                            <li>Contributed to the entire development lifecycle, enhancing skills in problem-solving and critical thinking.</li>
                            <li>Facilitated collaboration among team members by setting up branches, pull requests, and managing code reviews on GitLab.</li>
                            <li>Wrote efficient, clean code following best practices.</li>

                        </ul>

                    </div>

                </div>
                <div className='card_exp'>
                    <div className='heading_cont_first'>
                        <div>
                            <h2 className='title_pos'>Rajasthan police headquarters Jaipur(contract-based)
                            </h2>
                            <h4>Full-Stack Developer(MERN)</h4>
                        </div>
                        <div>
                            <h2 className='title_pos'>Jaipur,Rajasthan,India
                            </h2>
                            <h4> December 2023 -Present</h4>
                        </div>
                    </div>
                    <div className='roles_div'>
                        <ul>

                                <li>Developed, and maintain a modern and responsive website for Rajasthan Police using React.js, focusing on delivering an intuitive user experience.</li>
                                <li>Ensure that the website is user-friendly, accessible, and optimized for performance across various devices and browsers, adhering to web standards and best practices.</li>
                                <li>Facilitate collaboration among team members by setting up branches, pull requests, and managing code reviews on GitLab, promoting efficient code development and review processes.</li>
                                <li>Optimize user experience through responsive design, accessibility features, and usability testing, ensuring seamless interaction and accessibility for all users.</li>
                                <li>Debug and optimize application performance, identifying and resolving issues to enhance the website's speed, reliability, and overall performance.</li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
