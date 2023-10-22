"use client"

import { writeArticleSchema } from "@/app/secure/writingArticleSchema";
import axios from "axios";
import { CKEditor } from "ckeditor4-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { writingArticleRoute } from "../utils/routes";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import NotFound from "../not-found";

const WritingArticle = () => {

    const [articleName, setArticleName] = useState();
    const [articleContent, setArticleContent] = useState();
    const [status, setStatus] = useState("private");
    const [image, setImage] = useState();
    const [category, setCategory] = useState();

    const [error, setError] = useState([]); 

    const route = useRouter();

    const handleArticle = async () => {
        // setLoading(true)
        //console.log()(category);
        console.log("sih");
        
        const formData = new FormData();
      formData.append("file", image);
      const img = formData.get("file");
      //console.log()(formData.get("file"), img);
        try {
          await writeArticleSchema.validate({
            articleName,
            articleContent,
            image,
            status
          }, {abortEarly: false})
          await axios.post(writingArticleRoute, {
            articleName,
            articleContent,
            category,
            status,
            textImage: img,
          }, { headers: { "Content-Type": "multipart/form-data" } }).then(result => {
            //console.log()(result);
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
            //console.log()(error);
            setError(error.inner)
          
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
              {/* {SUC ? (
            SUC.length ? (
              <p className="alert alert-success">{SUC}</p>
            ) : null
          ) : null} */}
          {error
            ? error.map((error, index) => (
                <p key={index} className="alert alert-danger">
                  {error.message}
                </p>
              ))
            : null}
          {/* {serverError ? (
            serverError.length >= 1 ? (
              <p className="alert alert-danger">{serverError}</p>
            ) : (
              serverError.length < 1 && null
            )
          ) : null} */}
                <div class="form-group has-error text-left">
                  <label for="slug">نام مقاله</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="نام مقاله خود را وارد کنید"
                    onChange={(e) => setArticleName(e.target.value)}
                  />
                </div>
                <div className="text-left">
                          <label htmlFor="postImg">عکس مقاله</label>
                          </div>
                          <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <div className="custom-file">
                              <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="custom-file-input"
                                id="selectedImage"
                              />
                            </div>
                            <label
                              htmlFor="selectedImage"
                              className="custom-file-label"
                              id="image-Status"
                            >
                              عکس مورد نظر را انتخاب کنید
                            </label>
                          </div>
                <div class="form-group has-error text-left">
                  <label for="description">محتوای مقاله</label>
                  <CKEditor
                    onChange={(e) => setArticleContent(e.editor.getData())}
                    name={articleContent}
                  />
                  {/* <textarea rows="5" class="form-control" name="description" placeholder="درباره پست خود توضیح دهید (لطفا بیشتر از 50 کاراکتر باشد)" onChange={(e) => setDescription(e.target.value)}></textarea> */}
                </div>
                <div class="form-group has-error text-left">
                  <label for="slug">دسته بندی مقاله</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="دسته بندی مقاله خود را وارد کنید"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                {/* <div class="form-group has-error">
                            <label for="slug">وضعیت</label>
                            <select
                              name="status"
                              id="status"
                              className="form-control"
                              onChange={(e) => setStatus(e.target.value)}
                            >
                              <option value="public">عمومی</option>
                              <option value="private">خصوصی</option>
                            </select>
                          </div> */}
            <button onClick={handleArticle} className="btn btn-success my-4">ثبت مقاله</button>
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

export default WritingArticle;