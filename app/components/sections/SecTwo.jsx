"use client";

import { postsRoute } from "@/app/utils/routes";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const SecTwo = () => {
  const [actives, setActives] = useState(1);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get(postsRoute).then((result) => {
        setPosts(result.data);
      });
    };
    getData();
  }, []);

  return (
    <section className="set-two-p my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div
              className={actives === 1 ? "card currect" : "card"}
              onClick={() => setActives(1)}
            >
              <div className="card-body">
                <p className="m-0">نمونه کارهای طراحی سایت شرکتی و خدماتی</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className={actives === 2 ? "card currect" : "card"}
              onClick={() => setActives(2)}
            >
              <div className="card-body">
                <p className="m-0">نمونه کارهای طراحی سایت انیمیشنال</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className={actives === 3 ? "card currect" : "card"}
              onClick={() => setActives(3)}
            >
              <div className="card-body">
                <p className="m-0">نمونه کارهای طراحی سایت فروشگاهی</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className={actives === 4 ? "card currect" : "card"}
              onClick={() => setActives(4)}
            >
              <div className="card-body">
                <p className="m-0">نمونه کارهای طراحی اپلیکیشن</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center preview-sec-two-parent my-3">
            <h5 className="sec-two-title my-4">
 برای دریافت مشاوره تخصصی <span className="text-free-color">رایگان</span> با کارشناسان ما در ارتباط باشید
            </h5>
            {actives === 1 ? (
              <div className="row">
                {posts.map((item) => {
                  console.log(item);
                  if (item.category == "شرکتی و خدماتی" && item.status == "public") {
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
                    return (
                      <div className="col-md-4 my-3">
                        <div className="card preview-sec-two-p">
                          <div className="card-body">
                            <img
                              src={`data:image/png;base64,${_arrayBufferToBase64(
                                im
                              )}`}
                              className="img-fluid"
                              alt="preview"
                            />
                            <small>
                              جهت مشاهده نمونه کارهای بیشتر پلتفرم فروشگاهی با
                              ما در ارتباط باشید.
                            </small>
                            <div className="btn-parent">
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
                    );
                  } else {
                  }
                })}
              </div>
            ) : actives === 2 ? (
              <div className="row">
                {posts.map((item) => {
                  console.log(item);
                  if (item.category == "انیمیشنال" && item.status == "public") {
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
                    return (
                      <div className="col-md-4 my-3">
                        <div className="card preview-sec-two-p">
                          <div className="card-body">
                            <img
                              src={`data:image/png;base64,${_arrayBufferToBase64(
                                im
                              )}`}
                              className="img-fluid"
                              alt="preview"
                            />
                            <small>
                              جهت مشاهده نمونه کارهای بیشتر پلتفرم فروشگاهی با
                              ما در ارتباط باشید.
                            </small>
                            <div className="btn-parent">
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
                    );
                  } else {
                  }
                })}
              </div>
            ) : actives === 3 ? (
              <div className="row">
                {posts.map((item) => {
                  console.log(item);
                  if (item.category == "فروشگاهی" && item.status == "public") {
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
                    return (
                      <div className="col-md-4 my-3">
                        <div className="card preview-sec-two-p">
                          <div className="card-body">
                            <img
                              src={`data:image/png;base64,${_arrayBufferToBase64(
                                im
                              )}`}
                              className="img-fluid"
                              alt="preview"
                            />
                            <small>
                              جهت مشاهده نمونه کارهای بیشتر پلتفرم فروشگاهی با
                              ما در ارتباط باشید.
                            </small>
                            <div className="btn-parent">
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
                    );
                  } else {
                   
                  }
                })}
              </div>
            ) : actives === 4 ? (
              <div className="row">
                {posts.map((item) => {
                  console.log(item);
                  if (item.category == "اپلیکیشن" && item.status == "public") {
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
                    return (
                      <div className="col-md-4 my-3">
                        <div className="card preview-sec-two-p">
                          <div className="card-body">
                            <img
                              src={`data:image/png;base64,${_arrayBufferToBase64(
                                im
                              )}`}
                              className="img-fluid"
                              alt="preview"
                            />
                            <small>
                              جهت مشاهده نمونه کارهای بیشتر پلتفرم فروشگاهی با
                              ما در ارتباط باشید.
                            </small>
                            <div className="btn-parent">
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
                    );
                  } else {
                   
                  }
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecTwo;
