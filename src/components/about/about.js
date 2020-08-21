import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <section id="about" > {/*style={{backgroundImage: 'url("images/header-background2.jpg")'}}*/}
                <div className="row">
                    <div className="three columns">
                        {/*<img className="profile-pic" src = "./components/about/avatar" />*/}
                        <img className="profile-pic" src="images/avatar.jpg" />
                    </div>
                    <div className="nine columns main-col" >
                        <h2>About Me</h2>
                        <p>I have found myself in machine learning and now I enjoy developing myself in this area.
                            For today Especially I immerse myself in deep learning and take relevant courses at the University and online platforms.
                            Moreover I work with NLP tasks in biological company. Being an entrepreneurial at heart,
                            I always want more and try hard to become better.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Podkidyshev Aleksey</span><br />
                                    <span>Institutskiy Pereulok, 6A<br />
                                    Moscow Dolgoprudny, 141701
                                  </span><br />
                                    <span>+7 (925) 378-38-43</span><br />
                                    <span>podkidyshev.as@phystech.edu</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
    }
}
