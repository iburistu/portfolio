import React from 'react'
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <Link to="/contact">
                <h2>Contact:</h2>
            </Link>
            <dl className="alt">
                <dt>Phone:</dt>
                <dd>+1 (207) 672-6122</dd>
                <dt>Email:</dt>
                <dd><a href="mailto:zack@linkletter.dev">zack@linkletter.dev</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://github.com/iburistu" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/zachary-linkletter-084630162" className ="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://instagram.com/zackieattackie" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.facebook.com/zachary.linkletter" className ="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://linkletter.s3.us-east-1.amazonaws.com/resume.pdf" className="icon fa-file-text alt"><span className="label">Resume</span></a></li>
                <li><a href="https://besidereal.com" className="icon fa-comments alt"><span className="label">Dribbble</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Zachary Linkletter {new Date().getFullYear().toString()}</p>
    </footer>
)

export default Footer
