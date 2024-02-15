import "../Styles/aboutus.css";
import logo from "../images/Logo.jpg";
import wew from "../images/wew.png";
import i1 from "../images/hs.jpg";
import i2 from "../images/1.png";
import i3 from "../images/2.png";
import i4 from "../images/3.png";
import i5 from "../images/4.png";
import Inquiries from "../Components/inquiries";

const About = () => {
  return (
    <div className="home p-3">
      <div className="greeting">
        <div className="content">
          <h1 className="slogan">
            We are Fusion Events We bring A fresh and unique approach to your
            special occasions to life!
          </h1>
        </div>
      </div>
      <div className="about-cont">
        <div className="row mt-2">
          <div className="col-sm-12">
            <h4>About Us</h4>
            <p className="p-cont">
              Fusion Events is more than just an event planning company; we're
              the architects of extraordinary moments. With a blend of
              creativity, innovation, and an unwavering commitment to
              excellence, we craft experiences that surpass your expectations.
              Our team is a symphony of diverse talents, united by a shared
              mission to transform your vision into unforgettable reality. Our
              journey is built on a solid foundation of trust, dedication, and
              an unceasing pursuit of perfection. Join us as we reveal the
              essence of Fusion Events and embark on a journey to celebrate the
              art of crafting timeless moments."
            </p>
          </div>
          <div className="col-sm-6">{/* <img src={logo} /> */}</div>
        </div>
        <div className="row mt-2 p-2">
          <div className="col-sm-3">
            <h4>10,000</h4>
            <p className="text-black">Vendors</p>
          </div>
          <div className="col-sm-3">
            <h4>2,000</h4>
            <p className="text-black">Weddings & Events</p>
          </div>
          <div className="col-sm-3">
            <h4>1,000</h4>
            <p className="text-black">Venues</p>
          </div>
          <div className="col-sm-3">
            <h4>51K</h4>
            <p className="text-black">Followers</p>
          </div>
        </div>
        <div className="thrd row">
          <div className="t-cont">
            <div className="circ">
              <img src={i1} alt="" />
            </div>
            <h4>Who We Are?</h4>
            <p className="p">
              At Fusion Events, we are not just event planners; we are creators
              of unforgettable experiences. With a passion for innovation, an
              eye for detail, and a commitment to excellence, we transform
              ordinary gatherings into extraordinary moments. Our team brings
              together a diverse blend of creative minds, logistical wizards,
              and trendsetters, all united by a common goal – to craft events
              that resonate with your vision and leave a lasting impression. We
              pride ourselves on our ability to understand your unique needs and
              aspirations, allowing us to tailor every event to your individual
              style and preferences. Whether it's a corporate conference, a
              dream wedding, or a social soirée, we infuse each occasion with a
              touch of magic, ensuring it reflects who you are and what you
              stand for. Our journey is built on a foundation of trust,
              dedication, and an unwavering pursuit of excellence. We invite you
              to discover the heart of Fusion Events and join us in celebrating
              the art of creating unforgettable moments."
            </p>
          </div>
          <div className="t-cont">
            <h4>What We Offer?</h4>
            <p className="p">
              At Fusion Events, we offer a world of possibilities to elevate
              your event to new heights. Our diverse range of services
              encompasses every facet of event planning, design, and execution.
              Whether you're envisioning a grand gala, an intimate celebration,
              a corporate summit, or anything in between, we've got you covered.
              Our offerings include from Event Planning & Coordination, Creative
              Design, Entertainment & Production, Venue Selection, Catering &
              Culinary Delights, Audio-Visual Services, Logistics & Guest
              Services, Event Marketing At Fusion Events, we're committed to
              turning your dreams into reality. Our passion and expertise
              combine to create events that are uniquely yours. Explore our
              offerings, and let's begin the journey to make your event an
              unforgettable fusion of creativity and excellence."
            </p>
            <div className="circ">
              <img src={wew} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <img src={i2} alt="" />
            <h6>Isuru Gajasinghe</h6>
            <p className="p">Web Developer</p>
          </div>
          <div className="col-sm-3">
            <img src={i3} alt="" />
            <h6>Manula Rathnayake</h6>
            <p className="p">BackEnd Developer</p>
          </div>
          <div className="col-sm-3">
            <img src={i4} alt="" />
            <h6>Senadi Medis</h6>
            <p className="p">BackEnd Developer</p>
          </div>
          <div className="col-sm-3">
            <img src={i5} alt="" />
            <h6>Sridesh Fernando</h6>
            <p className="p">Web Developer</p>
          </div>
          <Inquiries us="us from here" />
        </div>
      </div>
    </div>
  );
};

export default About;
