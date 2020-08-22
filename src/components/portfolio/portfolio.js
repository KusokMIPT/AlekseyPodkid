import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        {/* portfolio-wrapper */}
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01" title>
                                        <img alt="" src="images/gas_sim.png" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Simulation ideal gas</h5>
                                                <p>C++ & Python programming</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> {/* item end */}

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img alt="" src="images/KS.png"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Kaggle Solver</h5>
                                                <p>project</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>  {/* item end */}

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-03" title>
                                        <img alt="" src="images/yandex_spec.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Machine Learning and Data Analysis</h5>
                                                <p>Coursera Specialization</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> {/* item end */}

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-04" title>
                                        <img alt="" src="images/beerder.png" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Beerder</h5>
                                                <p>my project</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> {/* item end */}

                        {/*    <div className="columns portfolio-item">*/}
                        {/*        <div className="item-wrap">*/}
                        {/*            <a href="#modal-05" title>*/}
                        {/*                <img alt="" src="../resume/public/images/portfolio/farmerboy.jpg" />*/}
                        {/*                <div className="overlay">*/}
                        {/*                    <div className="portfolio-item-meta">*/}
                        {/*                        <h5>Farmer Boy</h5>*/}
                        {/*                        <p>Branding</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="link-icon"><i className="icon-plus" /></div>*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="columns portfolio-item">*/}
                        {/*        <div className="item-wrap">*/}
                        {/*            <a href="#modal-06" title>*/}
                        {/*                <img alt="" src="../resume/public/images/portfolio/girl.jpg" />*/}
                        {/*                <div className="overlay">*/}
                        {/*                    <div className="portfolio-item-meta">*/}
                        {/*                        <h5>Girl</h5>*/}
                        {/*                        <p>Photography</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="link-icon"><i className="icon-plus" /></div>*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="columns portfolio-item">*/}
                        {/*        <div className="item-wrap">*/}
                        {/*            <a href="#modal-07" title>*/}
                        {/*                <img alt="" src="../resume/public/images/portfolio/origami.jpg" />*/}
                        {/*                <div className="overlay">*/}
                        {/*                    <div className="portfolio-item-meta">*/}
                        {/*                        <h5>Origami</h5>*/}
                        {/*                        <p>Illustrration</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="link-icon"><i className="icon-plus" /></div>*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="columns portfolio-item">*/}
                        {/*        <div className="item-wrap">*/}
                        {/*            <a href="#modal-08" title>*/}
                        {/*                <img alt="" src="../resume/public/images/portfolio/retrocam.jpg" />*/}
                        {/*                <div className="overlay">*/}
                        {/*                    <div className="portfolio-item-meta">*/}
                        {/*                        <h5>Retrocam</h5>*/}
                        {/*                        <p>Web Development</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="link-icon"><i className="icon-plus" /></div>*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div id="modal-01" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/m_gas_sim.png" alt="" />
                        <div className="description-box">
                            <h4> Simulation ideal gas</h4>
                            <p> The article is about computer model of monatomic gas and methods of testing the basic thermodynamic laws using mechanics and statistics.
                                Python is used to begin the simulation and to collect the report. The engine is written in C++.
                                You can learn more about the project by following the <a href="https://github.com/KusokMIPT/gas_simulation/blob/master/report/eng_finall.pdf"> link</a> </p>
                            {/*TODO: заменить ссылку на репу ссылкой на статью*/}
                            <span className="categories"><i className="fa fa-tag" /> C++ & Python simulation, Statistical physics, Statistics</span>
                        </div>
                        <div className="link-box">
                            <a href="http://www.behance.net">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-02" className="popup-modal mfp-hide">
                        {/*<img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />*/}
                        <div className="description-box">
                            <h4>Kaggle Solver</h4>
                            <p> The project devoted to the process of searching the best model for Kaggle competition.
                                These solution designed to reduce time spent on choosing a model, going through the loop of all model from sklearn and several from TensorFlow and Keras libraries.
                            </p>
                            <span className="categories"><i className="fa fa-tag" />kaggle, ml, python</span>
                        </div>
                        <div className="link-box">
                            {/*<a href="http://www.behance.net">Details</a>*/}
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-03" className="popup-modal mfp-hide">
                        {/*<img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />*/}
                        <div className="description-box">
                            <h4>Machine Learning and Data Analysis</h4>
                            <p>Fully completed three courses of online specialization ”Machine Learning and Data Science” on Coursera</p>
                            <span className="categories"><i className="fa fa-tag" />coursera, ml</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/KusokMIPT/MLCoursera">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-03 End */}
                    <div id="modal-04" className="popup-modal mfp-hide">
                        {/*<img className="scale-with-grid" src="../resume/public/images/portfolio/modals/m-intothelight.jpg" alt="" />*/}
                        <div className="description-box">
                            <h4>Beerder</h4>
                            <p>Fully developed project for people to find a company to hit the bottle, with the same working principle as tinder has. </p>
                            <span className="categories"><i className="fa fa-tag" />full stack development, React, Django</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/KusokMIPT/beer_tinder">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>{/* modal-04 End */}


                {/*    <div id="modal-05" className="popup-modal mfp-hide">*/}
                {/*        <img className="scale-with-grid" src="../resume/public/images/portfolio/modals/m-farmerboy.jpg" alt="" />*/}
                {/*        <div className="description-box">*/}
                {/*            <h4>Farmer Boy</h4>*/}
                {/*            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>*/}
                {/*            <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>*/}
                {/*        </div>*/}
                {/*        <div className="link-box">*/}
                {/*            <a href="http://www.behance.net">Details</a>*/}
                {/*            <a className="popup-modal-dismiss">Close</a>*/}
                {/*        </div>*/}
                {/*    </div>/!* modal-05 End *!/*/}
                {/*    <div id="modal-06" className="popup-modal mfp-hide">*/}
                {/*        <img className="scale-with-grid" src="../resume/public/images/portfolio/modals/m-girl.jpg" alt="" />*/}
                {/*        <div className="description-box">*/}
                {/*            <h4>Girl</h4>*/}
                {/*            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>*/}
                {/*            <span className="categories"><i className="fa fa-tag" />Photography</span>*/}
                {/*        </div>*/}
                {/*        <div className="link-box">*/}
                {/*            <a href="http://www.behance.net">Details</a>*/}
                {/*            <a className="popup-modal-dismiss">Close</a>*/}
                {/*        </div>*/}
                {/*    </div>/!* modal-06 End *!/*/}
                {/*    <div id="modal-07" className="popup-modal mfp-hide">*/}
                {/*        <img className="scale-with-grid" src="../resume/public/images/portfolio/modals/m-origami.jpg" alt="" />*/}
                {/*        <div className="description-box">*/}
                {/*            <h4>Origami</h4>*/}
                {/*            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>*/}
                {/*            <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>*/}
                {/*        </div>*/}
                {/*        <div className="link-box">*/}
                {/*            <a href="http://www.behance.net">Details</a>*/}
                {/*            <a className="popup-modal-dismiss">Close</a>*/}
                {/*        </div>*/}
                {/*    </div>/!* modal-07 End *!/*/}
                {/*    <div id="modal-08" className="popup-modal mfp-hide">*/}
                {/*        <img className="scale-with-grid" src="../resume/public/images/portfolio/modals/m-retrocam.jpg" alt="" />*/}
                {/*        <div className="description-box">*/}
                {/*            <h4>Retrocam</h4>*/}
                {/*            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>*/}
                {/*            <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>*/}
                {/*        </div>*/}
                {/*        <div className="link-box">*/}
                {/*            <a href="http://www.behance.net">Details</a>*/}
                {/*            <a className="popup-modal-dismiss">Close</a>*/}
                {/*        </div>*/}
                    </div>
                </div>
            </section>
        );
    }
}
