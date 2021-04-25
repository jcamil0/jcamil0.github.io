import React from 'react'
import '../assets/styles/footer.css'
const Foorter = () => {
    return (
        <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">networks</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 JUAN CAMILO LLANOS </li>
              <li>
                Design by{" "}
                <a title="Styleshout" href="https://github.com/jcamil0/">
                  JCLL
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Foorter
