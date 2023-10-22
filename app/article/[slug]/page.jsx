"use client"


import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import formatDate from "@/app/utils/formatDate";
import { getSingleArticleArticle } from "@/app/utils/routes";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const Article = (params) => {

    const [articleName, setArticleName] = useState();
    const [articleContent, setArticleContent] = useState();
    const [status, setStatus] = useState("public");

    const [article, setArticle] = useState([])

    useEffect(() => {
        const getArticle = async () => {
            await axios.post(getSingleArticleArticle, {id: params}).then(result => {
                ////console.log()()(result);
                // setArticleName(result.data.articleName)
                setArticle([result.data])
                // setArticleContent(result.data.articleContent);
                // setStatus(result.data.status);
            })
        }
        getArticle();
    } , [])

    console.log(article);

  return (
    <>
      <Navbar />
      <section>
        <div className="container my-5 py-5">
          <div className="row">
          <div className="col-md-3">
            <div className="card offer-card-in-article">
                <div className="card-body">
                    <img src="https://parspng.com/wp-content/uploads/2022/03/discountpng.parspng.com-5.png" className="img-fluid" alt="" />
                    <h6>تخفیف ویژه بر تمامی پلن ها</h6>
                    <img src="https://www.offidocs.com/images/discountoffsalefreevectorgraphiconpixabay.jpg" className="offer-img" alt="" />
                </div>
            </div>
          </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                {article.map(item => {
                    return(
                       <>
                        <div className="row">
                <div className="col-md-6">
                  <i className="fa fa-calendar"></i>{" "}
                  <small className="authorname"> تاریخ انشتار: {formatDate(item.createdAt)}</small>
                </div>
                <div className="col-md-6 text-end">
                  <small className="authorname">ایده نگار</small>{" "}
                  <i className="fa fa-user-circle-o"></i>
                </div>
              </div>
              <hr />
              <p className="mt-5">{ReactHtmlParser(item.articleContent)}</p>
                       </>
            //   saassas
                    )
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Article;
