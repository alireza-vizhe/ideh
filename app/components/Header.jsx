import Link from "next/link";
import SecFive from "./sections/SecFive";
import SecFour from "./sections/SecFour";
import SecOne from "./sections/SecOne";
import SecSix from "./sections/SecSix";
import SecThere from "./sections/SecThere";
import SecTwo from "./sections/SecTwo";
import headerImg from '../public/img/HEADER.jpg'
import Image from "next/image";
import SecSeven from "./sections/SecSeven";
import SectionEight from "./sections/SectionsEight";


const Header = () => {
  return (
    <> 
    <header>
      <div className="head-shape"></div>
      <div className="head-shape-two"></div>
      <div className="container">
        <div className="row">
            <div className="col-md-7">
                <Image src={headerImg} className="img-fluid" alt="" />
            </div>
          <div className="col-md-5 header-texts-p">
          <h2 className="header-title">
            گروه نرم افزاری{" "}
            <span className="company-title-heade">ایده نگار</span>
          </h2>
          <small className="header-subtitle">تیمی خلاق با ایده هایی ناب</small>
          <p className="head-des ">
            شرکت نرم افزاری ایده نگار فعال در حوزه خدماتی همچون طراحی سایت,
             بهینه سازی سایت, سئو سایت, دیجیتال مارکتینگ و... عرضه می کند و بهترین تیم
            برنامه نویسی و مارکتینگ را در اختیار خواهان ارتقاو پیشرفت کسب و کار
            می گذارد
          </p>
          <div className="col-12 btn-head-parent">
          <Link href="/about-us"><button className="head-btn">درباره ما</button></Link>
          </div>
          </div>
        </div>
      </div>
    </header>
    <SecOne/>
    <SecTwo/>
    <SecThere/>
    <SecFour/>
    <SecFive/>
    <SectionEight/>
    <SecSeven/>
    <SecSix/>
    </>
  );
};

export default Header;
