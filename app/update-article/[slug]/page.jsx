"use client"

import axios from "axios";
import Link from "next/link";
import { CKEditor } from "ckeditor4-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { editArticleRoute, getSingleArticleArticle } from "@/app/utils/routes";

const UpdateArticle = (params) => {

    const [articleName, setArticleName] = useState();
    const [articleContent, setArticleContent] = useState();
    const [status, setStatus] = useState("public");

    // const id = params;

    const route = useRouter();

    const [error, setError] = useState([])

    useEffect(() => {
        const getArticle = async () => {
            await axios.post(getSingleArticleArticle, {id: params}).then(result => {
                ////console.log()()(result);
                setArticleName(result.data.articleName)
                setArticleContent(result.data.articleContent);
                setStatus(result.data.status);
            })
        }
        getArticle();
    } , [])

    const editArticle = async () => {
     console.log("asas");
      try {
        await axios.post(editArticleRoute , {
          articleName,
          articleContent,
          status,
          id: params
        }).then(result => {
          if(result.data.messageSUC){
              if(result.data.message){
                setServerError(result.data.message)
              
              }else{
                route.push("/dashboard")
                toast.success(result.data.messageSUC);
               
              }
            }else{
             
            }
        })
      } catch (error) {
          ////console.log()()(error);
      }
    };

    return (
      <>
      {localStorage.getItem("admin-of-ideh") === "M-A-5822-9260" ? (
        <>
          <Navbar/>
        <section className="py-5">
          <div className="container">
            <div className="row my-5">
          
              <div className="col-md-12 questionsFont">
                <div className="card">
                  <div className="card-body text-center">
                    <h5>ویرایش مقاله</h5>
                  
              {error
                ? error.map((error, index) => (
                    <p key={index} className="alert alert-danger">
                      {error.message}
                    </p>
                  ))
                : null}
            
                    <div class="form-group has-error text-left">
                      <label for="slug">نام مقاله</label>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={articleName}
                        placeholder="نام مقاله خود را وارد کنید"
                        onChange={(e) => setArticleName(e.target.value)}
                      />
                    </div>
                    <div class="form-group has-error text-left">
                      <label for="description">محتوای مقاله</label>
                      <CKEditor
                        onChange={(e) => setArticleContent(e.editor.getData())}
                        name={articleContent}
                      />
                      {/* <textarea rows="5" class="form-control" name="description" placeholder="درباره پست خود توضیح دهید (لطفا بیشتر از 50 کاراکتر باشد)" onChange={(e) => setDescription(e.target.value)}></textarea> */}
                    </div>
                    <div class="form-group has-error">
                                <label for="slug">وضعیت</label>
                                <select
                                  name="status"
                                  id="status"
                                  value={status}
                                  className="form-control"
                                  onChange={(e) => setStatus(e.target.value)}
                                >
                                  <option value="public">عمومی</option>
                                  <option value="private">خصوصی</option>
                                </select>
                              </div>
                <button onClick={editArticle} className="btn btn-success mt-4">ویرایش مقاله</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        </>
        ) : (
          <NotFound />
        )}
               </>
    )
}

export default UpdateArticle;