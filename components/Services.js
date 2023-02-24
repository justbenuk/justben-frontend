// assets
import { RiKakaoTalkLine } from 'react-icons/ri'
import { FiClock } from 'react-icons/fi'
import { CgIfDesign } from 'react-icons/cg'
import { FaLaptopCode } from 'react-icons/fa'
import { SiSpeedtest } from 'react-icons/si'
const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <RiKakaoTalkLine className='icon theme-bg' />
              <div className="feature-content media-body">
                <h5>Discuss Your Project</h5>
                <p>
                  Lets discuss your project. What would your end goal be and how can I make sure I meet your expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <CgIfDesign className='icon theme-bg' />
              <div className="feature-content media-body">
                <h5>Take a Look at Your Design</h5>
                <p>
                  Lets take a look at your design, and start obtaining the assets you need to make your web application.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <FiClock className='icon theme-bg' />
              <div className="feature-content media-body">
                <h5>Work Out A Time Frames</h5>
                <p>
                  When do you need a completed site for. It can take days to months to complete.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <FaLaptopCode className='icon theme-bg' />
              <div className="feature-content media-body">
                <h5>Start The Build</h5>
                <p>
                  Ill start building your web application, keeping you updated by regular communication.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <SiSpeedtest className='icon theme-bg' />
              <div className="feature-content media-body">
                <h5>Test, Test, Test</h5>
                <p>
                  We will work together to test every aspect of you application before the public have access.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Deploy</h5>
                <p>
                  Its Finished.... Lets deploy your project. Don't worry, I will still be around to make sure everything is ok.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};
export default Services;
