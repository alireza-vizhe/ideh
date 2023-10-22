"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const SectionEight = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <>
      <h5 className="sec-right-title"> برخی از نظرات مشتری های ما</h5>
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1 ">
              <div className="card slider-card">
                <div className="card-body">
                  <img
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvizhegi.49aa4275.jpg&w=2048&q=75"
                    className="slider-img"
                    alt=""
                  />
                  <h6 className="my-4">سینا هادی</h6>
                  <p>
                    شرکتهای زیادی رو برای طراحی سایت بررسی کردم و معیارهای زیادی
                    داشتم که بتونم یک شرکت معتبر رو انتخاب کنم تا اینکه توسط یکی
                    از آشنایان با شرکت ایده نگار آشنا شدم و نمونه کارهاشونو
                    بررسی کردم طی یک مشاوره متقاعد شدم تا باهاشون همکاری کنم و
                    واقعا راضی هستم از این انتخابم. با تشکر از تیم ایده نگار
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel__cell number-slide1 ">
              <div className="card slider-card">
                <div className="card-body">
                  <img
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvizhegi.49aa4275.jpg&w=2048&q=75"
                    className="slider-img"
                    alt=""
                  />
                  <h6 className="my-4">ابلفظل گولاری</h6>
                  <p>
                    َبه جرات میتونم بگم یکی از بهترین شرکتهایی که من باهاشون کار
                    کردم .از لحاظ دانش فنی و تحلیل نیازهای مشتری بسیار حرفه ایی
                    عمل کردن و که این یکی ازامتیازاتی هست که من به این تیم میدم
                    . در طول پروسه کیفیت خیلی مد نظرشون بود و به همین دلیل نتیجه
                    بسیار رضایت بخش بود برای شرکت ما
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel__cell number-slide1 ">
              <div className="card slider-card">
                <div className="card-body">
                  <img
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvizhegi.49aa4275.jpg&w=2048&q=75"
                    className="slider-img"
                    alt=""
                  />
                  <h6 className="my-4">لاله شاهان</h6>
                  <p>
                    َسرکار خانم عاقی فردی توانا با مهارت علمی بالا، کوشا و با
                    پشتکار بسیار هستند که مجموعه ای بسیار حرفه ای، با تعهد کاری
                    بالا، با تجربه و بسیار منظم رو به همراه مدیریت تیم فنی شرکت
                    جناب آقای ویژه مدیریت میکنن . برای طراحی سایت شرکت من با
                    هردو این دوستان در ارتباط بودم که صبورانه پاسخوی تمامی
                    نیازها بودند . این پیام رو صرفا برای تشکر ویژه از این گروه
                    ارسال می کنم . با تشکر
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel__cell number-slide1 ">
              <div className="card slider-card">
                <div className="card-body">
                  <img
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvizhegi.49aa4275.jpg&w=2048&q=75"
                    className="slider-img"
                    alt=""
                  />
                  <h6 className="my-4">حامد برادری</h6>
                  <p>
                    در مورد انجام پروژه وب سایت فروشگاهی از نکته بینی های ظریف
                    گروه فنی و طراحی تشکر و قدرادانی می نمایم. امید به پیشرفت و
                    موفق های روزافزون
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel__cell number-slide1 ">
              <div className="card slider-card">
                <div className="card-body">
                  <img
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvizhegi.49aa4275.jpg&w=2048&q=75"
                    className="slider-img"
                    alt=""
                  />
                  <h6 className="my-4">لیلا فرهادیان</h6>
                  <p>
                    تشکر ویژه ایی دارم از تیم پشتیبان و باید اعتراف کنم که تا
                    کنون به این شکل پشتیبانی قوی ندیده بودم که با صبر و حوصله
                    زیاد مشتری رو را راهنمایی کنند و همچنین سپاس فراوان از
                    آموزشهای خوبتون{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="carousel__cell number-slide1 ">
              <div className="card slider-card">
                <div className="card-body">
                  <img
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvizhegi.49aa4275.jpg&w=2048&q=75"
                    className="slider-img"
                    alt=""
                  />
                  <h6 className="my-4">علیرضا ویژه</h6>
                  <p>َیخشبتحخثسلرتثقشلثقلثقبربزثقب</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionEight;
