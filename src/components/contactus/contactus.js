import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">
                            Here you can contact me by the email, but use social networks better please.
                            Feel free to ask or suggest anything you want!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="eight columns">
                        {/* form */}
                        <form action method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" defaultValue size={35} id="contactName" name="contactName" value=""/>
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" value=""/>
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" value=""/>
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                                </div>
                                <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                    <img alt="" src="../resume/public/images/loader.gif" />
                  </span>
                                </div>
                            </fieldset>
                        </form> {/* Form End */}
                        {/* contact-warning */}
                        <div id="message-warning"> Error boy</div>
                        {/* contact-success */}
                        <div id="message-success">
                            <i className="fa fa-check" />Your message was sent, thank you!<br />
                        </div>
                    </div>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Address and Phone</h4>
                            <p className="address">
                                Podkidyshev Aleksey<br />
                                Institutskiy Pereulok, 6A <br />
                                Moscow Dolgoprudny, 141701<br />
                                <span>+7 (925) 378-38-43</span>
                            </p>
                        </div>

                  {/*      Latest Tweets sections*/}

                  {/*      <div className="widget widget_tweets">*/}
                  {/*          <h4 className="widget-title">Latest Tweets</h4>*/}
                  {/*          <ul id="twitter">*/}
                  {/*              <li>*/}
                  {/*<span>*/}
                  {/*  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.*/}
                  {/*  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum*/}
                  {/*  <a href="#">http://t.co/CGIrdxIlI3</a>*/}
                  {/*</span>*/}
                  {/*                  <b><a href="#">2 Days Ago</a></b>*/}
                  {/*              </li>*/}
                  {/*              <li>*/}
                  {/*<span>*/}
                  {/*  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,*/}
                  {/*  eaque ipsa quae ab illo inventore veritatis et quasi*/}
                  {/*  <a href="#">http://t.co/CGIrdxIlI3</a>*/}
                  {/*</span>*/}
                  {/*                  <b><a href="#">3 Days Ago</a></b>*/}
                  {/*              </li>*/}
                  {/*          </ul>*/}
                  {/*      </div>*/}
                    </aside>
                </div>
            </section>
        );
    }
}
