import Img2 from "../../assets/img/JPS-Architecten-Ivo-Jelinek-GYM-TrainMore-Utrecht-13-1024x692.jpg";
import Img1 from "../../assets/img/mattphoto_10_bxr_099.jpg";
import Img4 from "../../assets/img/oktra_gymshark_lifiting_club_5.jpg";
import Img3 from "../../assets/img/Ludwig_Reiter_Medicine_sans_frontieres_JMS_01.12.22-024.jpg";
import "./landingstyal.css";
import "../../assets/font/font.css";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Aos from "aos";


const LandinPage = () => {
    Aos.init()
  return (
    <>
      <Fullpage>
        <FullPageSections>
          <div className="land">
            <FullpageSection className="countainer">
              <img src={Img2} className="land-img" alt="" />
              <div
                className="land-text1"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </div>
              <button className="land-btn1">...بیشتر ببینید</button>
            </FullpageSection>
            <FullpageSection className="countainer">
              <img src={Img1} className="land-img" alt="" />
              <div
                className="land-text2"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </div>
              <button className="land-btn2">...بیشتر ببینید</button>
            </FullpageSection>
            <FullpageSection className="countainer">
              <img src={Img3} className="land-img" alt="" />
              <div
                className="land-text3"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </div>
              <button className="land-btn3">...بیشتر ببینید</button>
            </FullpageSection>
            <FullpageSection className="countainer">
              <img src={Img4} className="land-img" alt="" />
              <div
                className="land-text4"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </div>
              <button className="land-btn4">...بیشتر ببینید</button>
            </FullpageSection>
          </div>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default LandinPage;
