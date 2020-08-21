import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{resumeData.name}</h1>
                        <h3>I'm a {resumeData.role} at <a href="https://www.bostongene.com">{resumeData.company} </a>company</h3>
                        <hr />
                        <ul className="social">
                            <li><a href="https://github.com/KusokMIPT"><i className="fa fa-github" /></a></li>
                            <li><a href="https://teleg.run/kusokmipt"> <i className="fa fa-telegram" /></a></li>
                            <li><a href="https://vk.com/k_us_ok"> <i className="fa fa-vk" /></a></li>
                            <li><a href="mailto:alexp2019@gmail.com"> <i className="fa fa-envelope" /></a></li>
                            <li><a href="https://www.instagram.com/kusokmipt/"><i className="fa fa-instagram" /></a></li>
                            <li><a href="https://www.linkedin.com/in/aleksey-podkidyshev-04a103197/"><i className="fa fa-linkedin" /></a></li>

                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>
        );
    }
}
