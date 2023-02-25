import emailjs from '@emailjs/browser';
import { useState } from "react";
const Contact = () => {
  const [ mailData, setMailData ] = useState( {
    name: "",
    email: "",
    subject: "",
    message: "",
  } );
  const { name, email, message, subject } = mailData;
  const [ error, setError ] = useState( null );
  const onChange = ( e ) =>
    setMailData( { ...mailData, [ e.target.name ]: e.target.value } );

  // handle form
  function handleSubmit( e ) {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError( true );
      clearError();
    } else {
      emailjs
        .send(
          "service_kygbfxt", // service id
          "template_6fxg2r9", // template id
          mailData,
          "hmKJ4z9spBlD3XBB6" // public api
        )
        .then(
          ( response ) => {
            setError( false );
            clearError();
            setMailData( { name: "", email: "", message: "", subject: "" } );
          },
          ( err ) => {
            console.log( err.text );
          }
        );
    }
  };
  const clearError = () => {
    setTimeout( () => {
      setError( null );
    }, 2000 );
  };
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>Do you have a project? Get in touch</h4>
              <p>
                I'm here to help with any new or existing applications. Contact me to find out more.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    18 Parkside, Belgrave, Tamworth B77 2JU.
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">justbenuk@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">07916 019 809</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form id="contact-form" onSubmit={ handleSubmit }>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        onChange={ ( e ) => onChange( e ) }
                        value={ name }
                        id="name"
                        placeholder="Name *"
                        className={ `form-control ${error ? ( !name ? "invalid" : "" ) : ""
                          }` }
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={ ( e ) => onChange( e ) }
                        value={ email }
                        id="email"
                        placeholder="Email *"
                        className={ `form-control ${error ? ( !email ? "invalid" : "" ) : ""
                          }` }
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={ ( e ) => onChange( e ) }
                        value={ subject }
                        id="subject"
                        placeholder="Subject *"
                        className={ `form-control ${error ? ( !subject ? "invalid" : "" ) : ""
                          }` }
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={ ( e ) => onChange( e ) }
                        value={ message }
                        id="message"
                        placeholder="Your message *"
                        rows={ 5 }
                        className={ `form-control ${error ? ( !message ? "invalid" : "" ) : ""
                          }` }
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme"
                        type="submit"
                        value="Send"
                      >
                        { " " }
                        send message
                      </button>
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={ {
                        display:
                          error !== null ? ( !error ? "block" : "none" ) : "none",
                      } }
                    >
                      Message Sent Successfully
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={ { display: "none" } }
                    >
                      Message Sending Failed
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.42917054119!2d-1.6750074836689604!3d52.61608813685526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870abf027128045%3A0x7e23af0145ec66ba!2s18%20Parkside%2C%20Belgrave%2C%20Tamworth%20B77%202JU!5e0!3m2!1sen!2suk!4v1677263999050!5m2!1sen!2suk"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
