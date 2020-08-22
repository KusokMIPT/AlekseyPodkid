import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <section id="resume">
                {/* Education v1
      ----------------------------------------------- */}
                {/*<div className="row education">*/}
                {/*    <div className="three columns header-col">*/}
                {/*        <h1><span>Education</span></h1>*/}
                {/*    </div>*/}
                {/*    <div className="nine columns main-col">*/}

                {/*        <div className="row item">*/}
                {/*            <div className="twelve columns">*/}
                {/*                <h3>Moscow Institute of Physics and Technology.</h3>*/}
                {/*                <p className="info"> Bachelor Applied mathematics and Computer science<span>•</span> <em className="date"> September 2017 - July 2021 (now attending)</em></p>*/}
                {/*                <p>*/}
                {/*                    MIPT is almost sure the best Russian technical university now.*/}
                {/*                        Education here is combined from the poweful math and voluminous practical IT experience.*/}
                {/*                        Some interesting of them(Mathematics): Mathematical optimization, Applied Statistics and Data analysis,*/}
                {/*                        Probability Theory, Measure Theory.*/}
                {/*                        Also, Computer Science: Machine Learning, DL in NLP, C++, Concurrency, Distributed and Parallel Computing.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="row item">*/}
                {/*            <div className="twelve columns">*/}
                {/*                <h3>Coursera</h3>*/}
                {/*                <p className="info">online courses</p>*/}
                {/*                <p>*/}
                {/*                    Online courses which I passed:*/}
                {/*                    Specialization in machine learning and data analysis by Yandex and MIPT,*/}
                {/*                    Python development specialization by Mail and MIPT,*/}
                {/*                    C++ development specialization by Yandex and MIPT,*/}
                {/*                    Simulation and modeling of natural processes by University of Geneva*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*
                Education v2
                -------------------------------------
                */}

                <div className='row'>
                    <div className="one columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className='rowspec'>
                    <div className='columnspec'>
                            <a href="#home">
                                <img src="images/MIPT.jpg" style={{width : '408px', height : 'auto'}}/>
                            </a>
                            <h4>Moscow Institute of Physics and Technology. </h4>
                            <h6><p className="info"> Bachelor Applied mathematics and Computer science<span>•</span> <em className="date"> September 2017 - July 2021 (now attending)</em></p></h6>
                            <p>MIPT is almost sure the best Russian technical university now.
                                Education here is combined from the powerful math and voluminous practical IT experience.
                                Some interesting of them(Mathematics): Mathematical optimization, Applied Statistics and Data Analysis, Probability Theory, Measure Theory.
                                Also, Computer Science: Machine Learning, DL in NLP, C++, Concurrency, Distributed and Parallel Computing.
                            </p>
                    </div>
                    <div className='columnspec'>
                            <a href="#home">
                                <img src="images/coursera.png" style={{width : '391px', height : 'auto'}}/>
                            </a>
                            <h4>Coursera: Computer science courses</h4>
                        <p className="info">Courses which I passed on online learning platform:</p>

                        <ul>
                            <li>Specialization in machine learning and data analysis by Yandex and MIPT</li>
                            <li>Python development specialization by Mail and MIPT</li>
                            <li>C++ development specialization by Yandex and MIPT</li>
                            <li>Simulation and modeling of natural processes by University of Geneva</li>
                        </ul>
                    </div>
                </div>
                </div>

                {/*<div className="row education2">*/}
                {/*    /!*<h1 className="h1spec"><span>Education</span></h1>*!/*/}
                {/*    <div className="one columns header-col">*/}
                {/*        <h1><span>Education</span></h1>*/}
                {/*    </div>*/}

                {/*<div className="row">*/}
                {/*    <div className="column item-col">*/}
                {/*        <div className="twelve columns">*/}
                {/*        <a href="#home">*/}
                {/*            <img src="images/MIPT.jpg" style={{width : '408px', height : 'auto'}}/>*/}
                {/*        </a>*/}
                {/*        <h4>Moscow Institute of Physics and Technology. </h4>*/}
                {/*        September 2017 - July 2021 (now attending)*/}
                {/*        <p>MIPT is almost sure the best Russian technical university now.*/}
                {/*            Education here is combined from the poweful math and voluminous practical IT experience.*/}
                {/*            Some interesting of them(Mathematics): Mathematical optimization, Applied Statistics and Data analysis,*/}
                {/*            Probability Theory, Measure Theory.*/}
                {/*            Also, Computer Science: Machine Learning, DL in NLP, C++, Concurrency, Distributed and Parallel Computing.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*    </div>*/}

                {/*    <div className="row">*/}
                {/*        <div className="column item-col">*/}
                {/*            <div className="twelve columns">*/}
                {/*            <a href="#home">*/}
                {/*                <img src="images/coursera.png" style={{width : '391px', height : 'auto'}}/>*/}
                {/*            </a>*/}
                {/*            <h4>Coursera: online courses</h4>*/}

                {/*                <p>Online courses which I passed:*/}
                {/*                Specialization in machine learning and data analysis by Yandex and MIPT,*/}
                {/*                    Python development specialization by Mail and MIPT,*/}
                {/*                C++ development specialization by Yandex and MIPT,*/}
                {/*                    Simulation and modeling of natural processes by University of Geneva</p>*/}
                {/*        </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*    /!*<div className="column item-col">*!/*/}
                {/*    /!*    <a href="#home">*!/*/}
                {/*    /!*        <img src="images/shad.png" />*!/*/}
                {/*    /!*    </a>*!/*/}
                {/*    /!*    <h4>Yandex School of Data Analysis</h4>*!/*/}
                {/*    /!*    September 2017 - July 2021 (now attending) ||| TODO*!/*/}
                {/*    /!*    <p>TODO TODO TODO</p>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}

                {/* Work
      ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>BostonGene</h3>
                                <p className="info">Developer <span>•</span> <em className="date">June 2019 - now attending</em></p>
                                <p>
                                    'BostonGene' is a company that guides you through all the innovative and classical treatments, helping cancer patients worldwide.
                                    I work in a team that develops a solution for auto-recognition of articles with the corresponding topic.
                                </p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Tinkoff Bank</h3>
                                <p className="info"> Business Analytics <span>•</span> <em className="date">June 2019 - September 2019</em></p>
                                <p>
                                    I laboured with credit cards utilization, revealed how credit cards are affected by the timing of bank decisions.
                                    Also, I worked with a time series, using some machine learning models.
                                    Further, I was detecting outliers and searching for the reasons for strange behaviour.
                                    Finally, I made a prediction about the number of utilized credit cards on next months.
                                </p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}

                {/* Skills----------------------------------------------- */}

                {/*<div className="row skill">*/}
                {/*    <div className="three columns header-col">*/}
                {/*        <h1><span>Skills</span></h1>*/}
                {/*    </div>*/}
                {/*    <div className="nine columns main-col">*/}
                {/*        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,*/}
                {/*            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam*/}
                {/*            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione*/}
                {/*            voluptatem sequi nesciunt.*/}
                {/*        </p>*/}
                {/*        <div className="bars">*/}
                {/*            <ul className="skills">*/}
                {/*                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>*/}
                {/*                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>*/}
                {/*                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>*/}
                {/*                <li><span className="bar-expand css" /><em>CSS</em></li>*/}
                {/*                <li><span className="bar-expand html5" /><em>HTML5</em></li>*/}
                {/*                <li><span className="bar-expand jquery" /><em>jQuery</em></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}



            {/*   Skills v2  */}
                <div className="row">
                    <div className="three columns header-col">
                                <h1><span>Skills</span></h1>
                    </div>

                    <div className="row">

                    </div>

                    <div className="row">
                        <h1>Developing: </h1>
                        <ul id="skills2">
                            <li>Python</li>
                            <li>C++</li>
                            <li>C</li>
                            <li>Concurrent Programming</li>
                        </ul>
                    </div>

                    <div className="row">
                        <h1> Classical ML: </h1>
                        <ul id="skills2">
                            <li>CatBoost</li>
                            <li>XGBoost</li>
                            <li>Sklearn</li>
                            <li>Scipy</li>
                            <li>Statsmodels</li>
                            <li>Plotly</li>
                        </ul>
                    </div>

                    <div className="row">
                        <h1>DL: </h1>
                        <ul id="skills2">
                            <li> Tensorflow</li>
                            <li> PyTorch</li>
                            <li> Spacy </li>
                            <li> Cntk </li>
                        </ul>
                    </div>

                    <div className="row">
                        <h1>Other: </h1>
                        <ul id="skills2">
                            <li>Jupyter</li>
                            <li>Docker</li>
                            <li>Bash</li>
                            <li>Git</li>
                            <li>MPI\OpenMP</li>
                            <li> SQL </li>
                            <li>LaTex</li>
                        </ul>
                    </div>

                </div>

            </section>
        );
    }
}
