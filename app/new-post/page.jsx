"use client";

import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import NotFound from "../not-found";
import { postSchema } from "../secure/newPostSchema";
import { Helmet } from "react-helmet";
import { newPostRoute } from "../utils/routes";
import { getCookie, setCookie } from 'cookies-next';

const NewPost = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [link, setLink] = useState();
  const [status, setStatus] = useState("public");
  const [singleShow, setSingleShow] = useState("false");

  const [error, setError] = useState([])
  // const

  const route = useRouter();

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

      const formData = new FormData();
      formData.append("file", image);
      const img = formData.get("file");
      console.log(status);
      await axios
        .post(
          newPostRoute,
          {
            name,
            description,
            category,
            link,
            status,
            textImage: img,
            singleShow
          },
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((result) => {
          console.log(result);
          route.push("/dashboard");
        });
    } catch (error) {
      setError(error.inner)
    }

  };

  return (
    <>
    {getCookie("admin-of-ideh") === "M-A-5822-9260" ? (
      <>
      <Navbar />
      <Helmet>
          <title> پست جدید | ایده نگار</title>
        </Helmet>
      <section>
        <div className="container new-post-con mt-4">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">اضافه کردن نمونه کار جدید</h3>
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
                  placeholder="عنوان نمونه کار جدید"
                  className="form-control my-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">عکس</label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    placeholder="عکس نمونه کار"
                    className="custom-file-input form-control"
                    id="selectedImage"
                  />
                <label htmlFor="name">توضیحات</label>
                <input
                  type="text"
                  placeholder="توضیحات نمونه کار جدید"
                  className="form-control my-4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="name">به عنوان تک نمونه در تک صفحات نمایش داده شود؟</label>
                <select
                  name="status"
                  onChange={(e) => setSingleShow(e.target.value)}
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
                  <option value="شرکتی و خدماتی">شرکتی و خدماتی</option>
                  <option value="فروشگاهی">فروشگاهی</option>
                  <option value="اپلیکیشن">اپلیکیشن</option>
                </select>
                <label htmlFor="name">لینک</label>
                <input
                  type="text"
                  placeholder="لینک سایت نمونه کار جدید"
                  className="form-control my-4"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <label htmlFor="name">وضعیت</label>
                <select
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control my-4"
                >
                  <option value="public">عمومی</option>
                  <option value="private">خصوصی</option>
                </select>
                <button className="btn btn-success" onClick={handleSubmint}>
                  ثبت
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
    ) : (<NotFound/>)}
    </>
  );
};

export default NewPost;
