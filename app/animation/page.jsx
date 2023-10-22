"use client"

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import Head from "next/head";
import { Helmet } from "react-helmet";
import { postsRoute } from "../utils/routes";
import Image from "next/image";
import shopImg from "../public/img/shopImg.jpg"
import question from "../public/img/question.jpg";

const Animation = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get(postsRoute).then((result) => {
        setPosts(result.data);
      });
    };
    getData();
  }, []);

  

    return(
<>
      <Navbar />
         
      <Helmet>
          <title>سایت انیمیشنال | ایده نگار</title>
        </Helmet>
      <section className="mt-5 sec-website-p">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image
                src={shopImg}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h1>طراحی وب سایت فروشگاهی</h1>
              <h5>شرکت نرم افزاری ایده نگار, طراحی اختصاصی و حرفه ای</h5>
              <p>
                طراحی سایت اختصاصی با علایق و سلیقه شما و با استفاده از برترین
                تکنولوژی های طراحی و کد نویسی وب و در عین حال 17 تکنیک Seo
                رایگان برای وب سایت شما
              </p>
              <div className="card sec-website-call-box">
                <div className="card-body">
                  <h6>برای مشاوره رایگان با ما تماس بگیرید</h6>
                  <input
                    type="text"
                    placeholder="09121234567"
                    className="form-control my-3"
                  />
                  <button className="head-btn w-50">ارسال</button>
                </div>
              </div>
            </div>
            {posts.map((item, index) => {
            //  console.log(index);
             const im = item.img.data.data;
             function _arrayBufferToBase64(im) {
               var binary = "";
               var bytes = new Uint8Array(im);
               var len = bytes.byteLength;
               for (var i = 0; i < len; i++) {
                 binary += String.fromCharCode(bytes[i]);
               }
               return window.btoa(binary);
             }
            if(item.singleShow === 'true' && item.category === "فروشگاهی" && item.status === "public"){
              return (
                <>
               <div className="col-md-6 mt-5">
              <div className="card details-nomone-sec-web">
                <div className="card-body">
                  <ul className="sec-web-nomone-ul my-3">
                    <h6>ویژگی های فنی وبسایت</h6>

                    <li>
                      <small>
                        اختصاصی Next.js & React.js وب با فریم ورک Front-End
                        توسعه
                      </small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>
                        اختصاصی Laravel & Node.js وب با فریم ورک Back-End توسعه
                      </small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>
                        اختصاصی React-Native & Flutter وب با فریم ورک App توسعه
                      </small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>تحویل رایگان سورس کد</small>
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                  <ul className="sec-web-nomone-ul my-3">
                    <h6>ویژگی های ظاهری وبسایت</h6>

                    <li>
                      <small>طراحی ساده و کاربری</small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>رابط کاربری جذاب</small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>تجربه کاربری و یو ایکس بهینه</small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>امکان شخصی سازی و یو ای منحصر به فرد</small>
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                  <ul className="sec-web-nomone-ul my-3">
                    <h6>ویژگی های عملکرد وبسیات</h6>

                    <li>
                      <small>مدیریت ساده پنل</small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>امنیت بالای دیتا</small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>سرعت بارگذاری و اجرا بهینه</small>
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      <small>طراحی واکنشگرا و ریسپانسیو</small>
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                  <div className="text-center my-3 fw-bold">
                    <small>
                      جهت مشاهده انواع نمونه کار طراحی وبسایت با ما در ارتباط
                      باشید.
                    </small>
                    <div className="btn-parent mt-3">
                    <a href={item.link} className="btn-set-two-active text-decoration-none">
                              {/* <button className="btn-set-two-active"> */}
                                مشاهده دمو زنده
                              {/* </button> */}
                                </a>
                                <a href="tel:09141575822" className="btn-sec-two-deActive text-decoration-none">
                                تماس با پشتیبانی
                              </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 img-p-sec-web p-4 my-4">
              <h6 className="text-center my-3 nomone-web-sec-title">
                مشاهده آخرین نمونه کار طراحی سایت اختصاصی
              </h6>
              <img
                src={`data:image/png;base64,${_arrayBufferToBase64(
                  im
                )}`}
                className="img-fluid"
                alt=""
              />
            </div>
              </>
              )
            }else{

            }
           })}
            <div className="col-md-12">
              <h4 className="title-sec-clever">
                نمونه کار طراحی وب سایت های اختصاصی
              </h4>
            </div>
            
           {posts.map(item => {
             const im = item.img.data.data;
             function _arrayBufferToBase64(im) {
               var binary = "";
               var bytes = new Uint8Array(im);
               var len = bytes.byteLength;
               for (var i = 0; i < len; i++) {
                 binary += String.fromCharCode(bytes[i]);
               }
               return window.btoa(binary);
             }
            if(item.category === "فروشگاهی" && item.status === "public"){
              return (
                <div className="col-md-4 my-4">
              <div className="card sec-clever-examples">
                <div className="card-body">
                  <img
                    src={`data:image/png;base64,${_arrayBufferToBase64(
                      im
                    )}`}
                    className="img-fluid"
                    alt=""
                  />
                  <h5>{item.name}</h5>
                  <small>
                    {item.description}
                  </small>
                  <br />
                  <br />
                  <a href={item.link} className="clever-sec-btn text-decoration-none">مشاهده</a>
                </div>
              </div>
            </div>
              )
            }else {

            }
           })}
            <div className="col-md-12 text-center row secound-sec-clever">
              <div className="col-md-8">
                <h2>سوالی دارید؟ با ما در میان بگذارید</h2>
                <p className="my-4 text-white">
                  سوالات خود را درباره طراحی وب سایت اختصاصی شما به راحتی و به
                  صورت کاملا رایگان با ما به اشتراک بگذارید تا در سریع ترین زمان
                  ممکن راهنمایی کنیم!
                </p>
                <a href="tel:09141575822" className="text-decoration-none">
                  021-11111111 <i className="fa fa-phone fs-5 m-3"></i>
                </a>
                <a href="tel:09141575822" className="text-decoration-none">
                  09141212121 <i className="fa fa-mobile fs-5 m-3"></i>
                </a>
              </div>
              <div className="col-md-4">
              <Image
                  src={question}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <div className="justify-content-center d-flex">
              <h5 className="prices-clever-title">قیمت ها در ایده نگار</h5>
              </div>
              <h2 className="titile-sub-clever">هزینه طراحی سایت اختصاصی</h2>
              <small className="mb-5">
                در باکس های زیر تمامی تکلنولوژی ها و ابزار های استفاده شده و در
                دسترس شما قرار گرفته و هزینه آنها قابل مشاهده می باشد
              </small>
            </div>
            <div className="col-md-3 my-3">
              <div className="card prices-box bg-success">
                <div className="card-body text-center justify-content-center">
                  <small>سایت + اپ تحت وب با ظاهر اختصاصی</small>
                  <p>20.000.000  تومان</p>
                  <ul>
                    <li>ارائه نسخه اپلیکیشن موبایل تحت وب</li>
                    <li>پشتیبانی 6 ماهه رایگان</li>
                    <li>آموزش کامل پنل به مشتری</li>
                    <li>طراحی ظاهر اختصاصی مطابق نیاز شما</li>
                  </ul>
                  <a href="tel:09141575822" className="text-decoration-none">استعلام آنی قیمت</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card prices-box">
                <div className="card-body text-center justify-content-center">
                  <small>سایت با ظاهر اختصاصی + اپ تحت وب</small>
                  <p>15.000.000  تومان</p>
                  <ul>
                    <li>ارائه نسخه اپلیکیشن موبایل تحت وب</li>
                    <li>پشتیبانی 6 ماهه رایگان</li>
                    <li>آموزش کامل پنل به مشتری</li>
                    <li>طراحی ظاهر اختصاصی مطابق نیاز شما</li>
                  </ul>
                  <a href="tel:09141575822" className="text-decoration-none">استعلام آنی قیمت</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card prices-box">
                <div className="card-body text-center justify-content-center">
                  <small>سایت + اپ تحت وب</small>
                  <p>12.000.000  تومان</p>
                  <ul>
                  <li>ارائه نسخه اپلیکیشن موبایل تحت وب</li>
                    <li>پشتیبانی 4 ماهه رایگان</li>
                    <li>آموزش کامل پنل به مشتری</li>
                    <li>طراحی ظاهر مطابق نیاز شما</li>
                  </ul>
                  <a href="tel:09141575822" className="text-decoration-none">استعلام آنی قیمت</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card prices-box">
                <div className="card-body text-center justify-content-center">
                  <small>سایت اختصاصی</small>
                  <p>10.000.000  تومان</p>
                  <ul>
                    <li>پشتیبانی 3 ماهه رایگان</li>
                    <li>آموزش کامل پنل به مشتری</li>
                    <li>طراحی ظاهر مطابق نیاز شما</li>
                  </ul>
                  <a href="tel:09141575822" className="text-decoration-none">استعلام آنی قیمت</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
    )
}

export default Animation;