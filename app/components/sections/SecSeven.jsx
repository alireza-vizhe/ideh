"use client";

import formatDate from "@/app/utils/formatDate";
import { articlesRoute } from "@/app/utils/routes";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const SecSeven = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get(articlesRoute).then((result) => {
        setArticles(result.data);
      });
    };
    getData();
  }, []);

  console.log(articles);

  return (
    <section>
      <div className="container sec-seven-p my-5">
        <div className="row">
          <h5>پر بازدیدترین مقاله ها</h5>
          <div className="col-md-12 row mt-5">
            {articles.map((item) => {
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
                <div className="col-md-3">
                  <div className="card article-box">
                    <div className="card-body p-0">
                      <Link href={`article/${item._id}`}>
                      <img
                        src={`data:image/png;base64,${_arrayBufferToBase64(
                            im
                          )}`}
                        className="img-fluid"
                        alt=""
                      /></Link>
                      <Link href={`article/${item._id}`} className="text-decoration-none">
                      <h6 className="my-4 article-name text-dark">{item.articleName}</h6>
                      </Link>
                      <div className="row px-4 my-4">
                        <div className="col-md-8">
                          <i className="fa fa-calendar"></i>{" "}
                          <small className="authorname">
                            {" "}
                            تاریخ انشتار: {formatDate(item.createdAt)}
                          </small>
                        </div>
                        <div className="col-md-4 text-end">
                          <small className="authorname">ایده نگار</small>{" "}
                          <i className="fa fa-user-circle-o"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecSeven;
