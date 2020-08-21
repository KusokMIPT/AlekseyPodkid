import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="https://github.com/KusokMIPT"><i className="fa fa-github" /></a></li>
                            <li><a href="https://teleg.run/kusokmipt"> <i className="fa fa-telegram" /></a></li>
                            <li><a href="https://vk.com/k_us_ok"> <i className="fa fa-vk" /></a></li>
                            <li><a href="mailto:alexp2019@gmail.com"> <i className="fa fa-envelope" /></a></li>
                            <li><a href="https://www.instagram.com/kusokmipt/"><i className="fa fa-instagram" /></a></li>
                            <li><a href="https://www.linkedin.com/in/aleksey-podkidyshev-04a103197/"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright 2020 Podkidyshev Aleksey</li>
                            {/*<li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>*/}
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}
