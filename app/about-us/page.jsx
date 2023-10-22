import toast from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Secound from "./Secound";
import Thirth from "./Thirth";


const AboutUs = () => {
  const reserve = () => {
    toast.success(
      "از طریق شبکه های اجتماعی علم آموزان که آدرس تمام شبکه ها اجتماعی موجود در بخش فوتر قرار داده شده است می توانید انجام بدهید"
    );
  };

  return (
    <>
      <Navbar />

      <div class="aboutus-section" dir="rtl">
        {/* <Helmet>
        <title>درباره ما | علم آموزان</title>
      </Helmet> */}
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="aboutus">
                <h2 class="aboutus-title">درباره ما</h2>
                <p class="aboutus-text">
                  برتری شرکت ایده نگار پارسا در مقابل رقبا, کیفیت بالا, قیمت به
                  صرفه, تحویل پروژه سر وقت تایین شده, حمایت از کسب و کارهای
                  نوپا, دارای تیم قدرتمند برنامه نویسی و دیزاین و همچنین دیجیتال
                  مارکتینگ...
                </p>
                <hr />
                <p class="aboutus-text">
                  در سال 1402 شرکت ایده نگار پارسا برای فراهم کردن بهترین کیفیت و قیمت در طراحی سایت و اپ وارد این حوزه شد و تا الان توانسته است بیشتر از 50 مشتری و 200 پروژه موفق پیاده سازی کند
                </p>
                <a class="aboutus-more" href="tel:09141575822">
                  سفارش طراحی سایت
                </a>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="aboutus-banner">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-us-5463861-4568183.png"
                  className="img-fluid"
                  alt="درباره تیمزیاب"
                />
              </div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12">
              <div class="feature">
                <div class="feature-box">
                  <div class="clearfix">
                    <div class="iconset shadow">
                      <img
                        src={require("../public/img/star.jpg")}
                        className="img-fluid p-2"
                        alt="لگو ایده نگار"
                      />
                    </div>
                    <div class="feature-content">
                      <a href="https://elmamouzan.ir">
                        <h4>شرکت ایده نگار پارسا</h4>
                      </a>
                      <p>
                        شرکت ایده نگار پارسا در سال 1402/8/1 با 4 تا تیم از جمله برنامه نویس فرانت اند, برنامه نویس بک اند, دیزاینر, دیجیتال مارکتر , وارد این حوزه شد
                      </p>
                    </div>
                  </div>
                </div>
                <div class="feature-box mt-5">
                  <div class="clearfix">
                    <div class="iconset shadow">
                      <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/service-4623942-3851486.png"
                        className="img-fluid p-2"
                        alt="خدمات"
                      />
                    </div>
                    <div class="feature-content">
                      <a href="https://elmamouzan.ir">
                        <h4>خدمات ایده نگار پارسا</h4>
                      </a>
                      <p>
                        طراحی وب سایت و اپلیکیشن های اصولی و با قیمت مناسب با استفاده از بهترین تیم های برنامه نویسی و...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="feature-box mt-5">
                  <div class="clearfix">
                    <div class="iconset shadow">
                      <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/24-hours-customer-service-7181068-5807269.png?f=webp"
                        className="img-fluid p-2"
                        alt="پشتیبانی"
                      />
                    </div>
                    <div class="feature-content">
                      <a href="https://elmamouzan.ir">
                        <h4>پشتیبانی ایده نگار پارسا</h4>
                      </a>
                      <p>
                        با استفاده از چت آنلاین در گوشه صفحه سمت راست میتوانید
                        پشتیبانی از طرف مدیر سایت دریافت کنید و همینطور در شبکه
                        های اجتماعی نیز در خدمت شما عزیزان هستیم
                        در عین حال میتوانید با شماره تماس های پشتیبانی که در اختیارتون قرار دادیم تماس بگیرید
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Secound/>
          <Thirth/>
      <Footer />
    </>
  );
};

export default AboutUs;
