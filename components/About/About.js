import aboutImage from '@/assets/about.png'
import Image from 'next/image';
const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img overflow-hidden">
                <Image className="img-in rounded-full overflow-hidden" src={ aboutImage.src } alt="about me image" width={ 600 } height={ 350 } />
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  { `I'm` } a Self-Taught Freelance Web developer{ " " }
                </h3>
                <p>
                  I love to build mobile responsive, fast and custom to you applications. Using Javascript, I can turn your ideas in to your very own online presence.
                </p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#work">
                    <span>Projects</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};
export default About;
