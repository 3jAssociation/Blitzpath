import styles from "./AboutUs.module.css";
import testImage from "../../../images/animate.png";
import animte2 from "../../../images/animte2.png";
import animate3 from "../../../images/animate3.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useEffect } from "react";
const AboutUs = ({ color }) => {
  // console.log(color)
  useEffect(() => {
    document.getElementById("about").style.color = color;
  }, [color]);
  return (
    <div className={styles.about} id="about" style={{ color: "white" }}>
      <div className={styles.craouselContainer}>
        <AnimationOnScroll
          animateOnce={false}
          offset={150}
          animateIn="animate__fadeInUp"
        >
          <h1>About Us</h1>
        </AnimationOnScroll>
        <div className={styles.type1}>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <img src={testImage} alt="" />
            </AnimationOnScroll>
          </div>

          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>
                Why choose Blitzpath
              </h2>
              Blitzpath Innovations was conceived with the vision of providing
              equal opportunities to talented individuals across India. We
              recognized a significant gap between the availability of skilled
              resources in Tier 2 and Tier 3 cities and the organizations
              seeking the right skilled resources. With our commitment to
              democratizing access to opportunities, we have developed a
              platform that connects organizations with remote talent,
              especially in the information technology services sector. Our
              game-changing platform integrates people and processes, making us
              the go-to solution for cost optimization while enabling remote
              access to highly skilled resources. Since our inception in 2017,
              we have grown our team to include over 400 technical and language
              experts, along with 50+ developers operating in cycles, providing
              24x7 support to meet your IT and IT-enabled service needs.
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.type2}>
          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>
                About our company
              </h2>
              Blitzpath Innovations is an organization that has successfully
              penetrated the information technology services market through its
              innovative and flexible working model. Blitzpath was conceived
              with the idea of developing a platform that enables talent in
              remote parts of the country to access opportunities that are
              generally not accessible to them, especially in the information
              technology services sector. We successfully eliminated the need
              for people to leave their homes in order to have a career or at
              least gain entry into the industry through our Work from Home
              model.
            </AnimationOnScroll>
          </div>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <img src={animte2} alt="" />
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.type1}>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <img src={animate3} alt="" />
            </AnimationOnScroll>
          </div>
          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>Our History</h2>
              Since our establishment in 2017, we have been committed to
              creating a platform that empowers individuals in remote areas to
              access IT job opportunities from their homes. With our innovative
              and flexible working model, we have successfully eliminated the
              need for relocation to metro cities to build a career in the
              industry.
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
