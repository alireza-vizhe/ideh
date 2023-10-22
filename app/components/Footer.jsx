"use client"

import Image from "next/image";
import online from "../public/img/online.jpg"

const Footer = () => {

  const upTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
            <div className="arrow-up"><i className="fa fa-arrow-up fs-4 mt-5" onClick={upTop}></i></div>
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 row footer-top-box">
            <div className="col-md-8 footer-top-box-btn-p">
              <a href="tel:09141575822">
                فرم مشاوره سریع <i className="fa fa-flash mx-2"></i>
              </a>
              <a href="tel:09141575822">
                تماس مستقیم<i className="fa fa-phone mx-2"></i>
              </a>
            </div>
            <div className="col-md-2">
              <h4>:) آنلاین هستیم</h4>
            </div>
            <div className="col-md-2">
              <Image
                src={online}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3 mt-5 footer-secound-box">
            <h5>جهت دریافت مشاوره رایگان تلفن خود را وارد کنید</h5>
            <input type="text" placeholder="نام و نام خانوادگی" />
            <input type="text" placeholder="تلفن همراه" />
            <button className="footer-btn">ارسال درخواست</button>
          </div>
          <div className="col-md-3 mt-5 footer-secound-box">
            <h5>خدمات ایده نگار</h5>
            <ul>
              <li>طراحی سایت فروشگاهی</li>
              <li>طراحی سایت اختصاصی</li>
              <li>طراحی سایت 3 بعدی</li>
              <li>طراحی سایت شرکتی</li>
            </ul>
          </div>
          <div className="col-md-3 mt-5 footer-secound-box">
            <h5>دسترسی ها</h5>
            <ul>
              <li>
                <span>خیابان آزادی, روبروی برج آزادی, پلاک 5</span>{" "}
                <i className="fa fa-location-arrow mx-2"></i>
              </li>
              <li>
                <span>021-88551470</span>
                <i className="fa fa-phone mx-2"></i>
              </li>
              <li>
                <span>09140000000</span> <i className="fa fa-mobile mx-2"></i>
              </li>
              <li>
                <span>info@idehnegar.ir</span>
                <i className="fa fa-instagram mx-2"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-5">
            <div className="card footer-first-box">
              <div className="card-body">
                <h5>شرکت نرم افزاری ایده نگار</h5>
                <p>
                  بزرگترین شرکت دانش بنیان نرم‌افزاری کشور در حوزه پیاده سازی و
                  توسعه پلتفرم های مختلف (وب و اپلیکیشن) توسط حرفه‌ای ترین تیم
                  برنامه‌نویسان و مشاوران مارکتینگ با رویکردی پیشرو و پرشتاب در
                  عرصه فناوری و فضای دیجیتال
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 row footer-bottom-p mt-5 py-5">
            <div className="col-md-6 row">
                <div className="col-md-4">
                    <img src="https://vistaapp.ir/wp-content/uploads/2022/01/vista-logo-copy-1.svg" className="footer-img" alt="" />
                </div>
                <div className="col-md-4">
                    <img src="https://vistaapp.ir/wp-content/uploads/2022/06/%D8%A7%DB%8C%D9%86%D9%85%D8%A7%D8%AF-%D9%88%DB%8C%D8%B3%D8%AA%D8%A7.png" className="footer-img" alt="" />
                </div>
                <div className="col-md-4">
                    <img src="https://vistaapp.ir/wp-content/uploads/2022/01/vista-logo-copy-1.svg" className="footer-img" alt="" />
                </div>
            </div>
            <div className="col-md-6">
              <p>
                تمامی حقوق مادی و معنوی این وب سایت متعلق به شرکت نرم افزاری
                ایده نگار (ایده نگار پارسا خراسان شمالی) میباشد و هرگونه کپی برداری
                و سوءاستفاده از خدمات پیگرد قانونی دارد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
