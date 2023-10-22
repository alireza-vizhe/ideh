"use client"


import { useEffect, useState } from "react"; 
import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";
import { postSchema } from "@/app/secure/newPostSchema";
import { updatePostRoute } from "@/app/utils/routes";

const UpdatePost = (params) => {
 
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [link, setLink] = useState();
    const [status, setStatus] = useState();
    const [singleShow, setSingleShow] = useState();
    // const 

    const route = useRouter();

    useEffect(() => {
        const getData = async () => {
            await axios.post("http://localhost:5000/single-post", {id: params}).then(result => {
              setName(result.data.name)
              setDescription(result.data.description)
              setCategory(result.data.category)
              setLink(result.data.link)
              setStatus(result.data.status)
              setSingleShow(result.data.singleShow)
              console.log(result.data.status);
            })
        }
        getData();
    }, [])


    const [error, setError] = useState([])



    const handleSubmint = async () => {

        try {
          await postSchema.validate({
            name,
            description,
            category,
            link,
            status,
            singleShow
          }, {abortEarly: false})
          await axios.post(updatePostRoute, {
            name,
            description,
            category,
            link,
            id: params,
            status,
            singleShow
        }).then(result => {
            console.log(result);
            route.push("/dashboard")
        })
        } catch (error) {
          setError(error.inner)
        }
    }

  return (
    <>
    <Navbar/>
    <section>
      <div className="container new-post-con">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">بروزرسانی کردن نمونه کار</h3>
              {error
           ? error.map((error, index) => (
               <p key={index} className="alert alert-danger">
                 {error.message}
               </p>
             ))
           : null}
              <label htmlFor="name">عنوان</label>
              <input
                type="text"
                placeholder="عنوان نمونه کار "
                className="form-control my-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">عکس</label>
              <input
                type="text"
                placeholder="عکس نمونه کار "
                className="form-control my-4"

              />
              <label htmlFor="name">توضیحات</label>
              <input
                type="text"
                placeholder="توضیحات نمونه کار "
                className="form-control my-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="name">به عنوان تک نمونه در تک صفحات نمایش داده شود؟</label>
                <select
                  name="status"
                  onChange={(e) => setSingleShow(e.target.value)}
                  value={singleShow}
                  className="form-control my-4"
                >
                  <option value="true">بله</option>
                  <option value="false">خیر</option>
                </select>
                <label htmlFor="name">نوع پروژه</label>
                <select
                  name="status"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="form-control my-4"
                >
                  <option value="انیمیشنال">انیمیشنال</option>
                  <option value="اختصاصی">اختصاصی</option>
                  <option value="فروشگاهی">فروشگاهی</option>
                  <option value="شرکتی">شرکتی</option>
                </select>
              <label htmlFor="name">لینک</label>
              <input
                type="text"
                placeholder="لینک سایت نمونه کار "
                className="form-control my-4"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <label htmlFor="name">وضعیت</label>
                <select
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control my-4"
                  value={status}
                >
                  <option value="public">عمومی</option>
                  <option value="private">خصوصی</option>
                </select>
              <button className="btn btn-success" onClick={handleSubmint}>ثبت</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default UpdatePost;