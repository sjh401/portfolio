import Layout from '../../components/layout/Layout'
import './Resume.css'
export default function Resume() {
    return (
        <>
            <Layout>

                <section id="resume">
                    <h1 className="text-center">Resume</h1>
                    <div className="resume-data">
                        <h2>SKILLS</h2>
                            <h3>Languages</h3>
                                <ul>
                                    <li>JavaScript (ES6+)</li>
                                    <li>HTML5</li>
                                    <li>SQL</li>
                                    <li>Ruby</li>
                                    <li>Typescript</li>
                                    <li>CSS3</li>
                                </ul>
                            <h3>Frontend Development</h3>
                                <ul>
                                    <li>React</li>
                                    <li>jQuery</li>
                                    <li>Responsive Design</li>
                                    <li>UI Development</li>
                                    <li>Component-Based Architecture</li>
                                </ul>
                            <h3>Digital Accessibility</h3>
                                <ul>
                                    <li>508 Trusted Tester</li>
                                    <li>WCAG 2.1/2.2</li>
                                    <li>WAI-ARIA</li>
                                    <li>Accessibility Testing</li>
                                    <li>ADA Compliance</li>
                                </ul>
                            <h3>Assistive Technologies:</h3>
                                <ul>
                                    <li>VoiceOver</li>
                                    <li>NVDA</li>
                                    <li>Screen Reader Auditing</li>
                                    <li>Automated & Manual Accessibility Testing</li>
                                </ul>
                            <h3>Backend Development</h3>
                                <ul>
                                    <li>Ruby on Rails</li>
                                    <li>PostgreSQL</li>
                                    <li>Database Management</li>
                                    <li>API Development</li>
                                    <li>REST APIs</li>
                                </ul>
                            <h3>Tools & Practices</h3>
                                <ul>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>JIRA</li>
                                    <li>Agile/Scrum Development</li>
                                    <li>SDLC</li>
                                    <li>Cross-functional Collaboration</li>
                                </ul>
                        <h2>CERTIFICATIONS</h2>
                            <dl>
                                <dt>Section 508 Trusted Tester Certification</dt>
                                <dd>U.S. Department of Homeland Security (DHS)</dd>
                            </dl>
                        <h2>PROFESSIONAL EXPERIENCE</h2>
                            <h3>Implementation Developer</h3>
                            <dl>
                                <dt>Company</dt>
                                <dd>Audioeye</dd>
                                <dt>Years</dt>
                                <dd>2022 - 2026</dd>
                            </dl>
                            <ul>
                                <li>Engineered and deployed customized digital accessibility remediation scripts across 200+ client websites using modern JavaScript ES6+, React, HTML5, and CSS3.</li>
                                <li>Conducted rigorous accessibility audits and QA testing utilizing screen readers (VoiceOver, NVDA) and DHS Trusted Tester methodologies to guarantee strict WCAG 2.1/2.2 Level AA and WAI-ARIA compliance.</li>
                                <li>Collaborated within Agile/Scrum software development lifecycles (SDLC) alongside product managers and engineers to deliver scalable, user-centric accessibility solutions.</li>
                                <li>Developed reusable UI components and dynamic JavaScript fixes to solve complex accessibility defects across enterprise-level applications.</li>
                            </ul>
                            <h3>Instructional Associate</h3>
                            <dl>
                                <dt>Company</dt>
                                <dd>General Assembly</dd>
                                <dt>Years</dt>
                                <dd>2021 - 2022</dd>
                            </dl>
                            <ul>
                                <li>Mentored and evaluated 50+ students through an intensive full-stack Software Engineering Immersive program covering JavaScript, React, Ruby on Rails, REST APIs, and SQL.</li>
                                <li>Provided code reviews, debugged complex full-stack applications, and instructed best practices in component-based architecture and Git workflows.</li>
                            </ul>
                            <h3>Bar Manager</h3>
                            <dl>
                                <dt>Company</dt>
                                <dd>Hornblower Cruises and Events</dd>
                                <dt>Years</dt>
                                <dd>2013 - 2021</dd>
                            </dl>
                            <ul>
                                <li>Managed fleet-wide beverage menu development, inventory architecture, and operational training protocols while directing team staff across primary vessel locations.</li>
                            </ul>
                        <h2> EDUCATION </h2>
                        <ul> 
                            <li>General Assembly - Software Engineering Immersive Program</li>
                            <li>Northwestern University - Bachelor of Arts</li>
                        </ul>
                    </div>
                    <a href="https://docs.google.com/document/d/1gZfyWPVyfrrLuuKyaA0KiLqdU7ChMpQyo03APF9YgYs/edit?usp=sharing"> View PDF Version Resume </a>
                </section>
            </Layout>
        </>
    )

}