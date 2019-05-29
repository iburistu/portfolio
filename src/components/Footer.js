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
                <dd><a href="mailto:zachary.linkletter@maine.edu">zachary.linkletter@maine.edu</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://github.com/iburistu" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/zachary-linkletter-084630162" className ="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://instagram.com/zackieattackie" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.facebook.com/zachary.linkletter" className ="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://drive.google.com/file/d/1JFCURMrMDoFjQF6ApDcqBm80IJpn9gUL/view?export=pdf" className="icon fa-file-text alt"><span className="label">Resume</span></a></li>
                <li><a href="https://blog.linkletter.dev" className="icon fa-comments alt"><span className="label">Dribbble</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Zachary Linkletter. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
