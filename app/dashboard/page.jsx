"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import NotFound from "../not-found";
import formatDate from "../utils/formatDate";
import { Helmet } from "react-helmet";
import { articlesRoute, deleteArticleRoute, deletePostRoute, postsRoute } from "../utils/routes";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get(postsRoute).then((result) => {
        setPosts(result.data);
      });
    };
    getData();
  }, []);

  
  useEffect(() => {
    const getData = async () => {
      await axios.get(articlesRoute).then((result) => {
          setArticles(result.data);
      });
    };
    getData();
  }, []);

  
  

  // const isAdmin = localStorage.getItem("admin_of_ideh")
  // console.log(localStorage.getItem("admin-of-ideh"));

  const deletePost = async (id) => {
    await axios
      .post(deletePostRoute, { id })
      .then(async (result) => {
        console.log(result);
        await axios.get(postsRoute).then((result) => {
          
          setPosts(result.data);
        });
      });
  };

  const handleDeleteArticle = async (id) => {
    await axios.post(deleteArticleRoute, { id }).then((result) => {
      //console.log()(result);
      toast.success("مقاله مورد نظر با موفقیت پاک شد");
    });

    await axios.get(articlesRoute).then((result) => {
      setArticles(result.data);
    });
  };

  return (
    <>
      {localStorage.getItem("admin-of-ideh") === "M-A-5822-9260" ? (
        <>
        <Helmet>
          <title>داشبورد | ایده نگار</title>
        </Helmet>
          <Navbar />
          <section className="dashboard">
            <div className="container-fluid">
              <div className="row">
              <div className="col-md-2 sidebar-res">
                  
                  <ul className="dashboard-ul">
                    <Link href="/new-post" className="text-dark text-decoration-none">
                      <li className="alert alert-info">اضافه کردن نمونه کار جدید</li>
                    </Link>
                    <li className="text-dark alert alert-info">لیست کاربران</li>
                    <li className="text-dark alert alert-info">نوشتن مقاله جدید</li>
                  </ul>
                </div>
                <div className="col-md-10 my-3" dir="rtl">
                  <div class="row">
                    <div class="col-md-4 mb-4">
                      <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                تعداد نمونه کارهای وب سایت
                              </div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">
                                {posts.length}
                              </div>
                            </div>
                            <div class="col-auto">
                              <i class="fa fa-share fa-sm fa-fw text-gray-400"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 mb-4">
                      <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                تعداد مقاله های وب سایت
                              </div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">
                                2
                              </div>
                            </div>
                            <div class="col-auto">
                              <i class="fa fa-folder fa-sm fa-fw text-gray-400"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 mb-4">
                      <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                تعداد سفارش های ثبت شده
                              </div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">
                                2
                              </div>
                            </div>
                            <div class="col-auto">
                              <i class="fa fa-folder fa-sm fa-fw text-gray-400"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-8 col-lg-7">
                      <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 class="m-0 font-weight-bold text-primary">
                            پست ها
                          </h6>
                          <form
                            // onSubmit={turnofsubmit}
                            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                          >
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control bg-secondary border-0 small"
                                placeholder="جستجوی نمونه کار ها ..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                // onChange={handleTextSearch}
                              />
                              <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                  <i class="fa fa-search fa-sm"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                          <span>
                            <i class="fa fa-folder fa-sm fa-fw text-gray-400"></i>
                          </span>
                        </div>

                        <div class="card-body">
                          <div class="chart-area">
                            {posts.length ? (
                              posts.map((item) => (
                                <table class="table table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">عنوان نمونه کار</th>
                                      <th scope="col">تاریخ</th>
                                      <th scope="col">وضعیت</th>
                                      <th scope="col">امکانات</th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td>
                                        <Link href="">{item.name}</Link>
                                      </td>
                                      <td>{formatDate(item.createdAt)}</td>
                                      <td>
                                        {/* {item.status === "public" ? ( */}
                                        {item.status === "public" ? (
                                          <span className="badge bg-success">
                                            عمومی
                                          </span>
                                        ) : (
                                          <span className="badge bg-warning">
                                            خصوصی
                                          </span>
                                        )}
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() => deletePost(item._id)}
                                        >
                                          حذف
                                        </button>
                                      </td>
                                      <td>
                                        <Link href={`/update-post/${item._id}`}>
                                          <button className="btn btn-primary btn-sm">
                                            ویرایش
                                          </button>
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              ))
                            ) : (
                              <h6 className="my-4 w-100 text-center bg-warning p-2">
                                نمونه کاری اضافه نشده است
                              </h6>
                            )}

                            {/* <div className="postShowerBtnParent">
                                    <button
                                      className="btn-nav shadow"
                                    
                                    >
                                      مشاهده دوره های موجود
                                    </button>
                                  </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-4 col-lg-5">
                      <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 class="m-0 font-weight-bold text-primary">
                            کاربران موجود در این اکانت
                          </h6>
                          <div class="dropdown no-arrow">
                            <a>
                              <i class="fa fa-user-circle fa-sm fa-fw text-gray-400"></i>
                            </a>
                          </div>
                        </div>

                        <div class="card-body">
                          <div class="chart-pie pt-4 pb-2">
                            <table class="table table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">نام</th>
                                  <th scope="col">تاریخ ورود</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {/* {user ? <td>{item.fullname}</td> : null} */}
                                  {/* {user ? (
                                        <td>{formatDate(user.createdAt)}</td>
                                      ) : null} */}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="mt-4 text-center small">
                            <span class="mr-2">
                              <i class="fa fa-circle text-primary"></i> آنلاین
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-12 row">
                  <h4>سفارشات ثبت شده</h4>
                  {orders.map(item => {
                            console.log(item);
                            return (
                              posts.map(itemm => {
                             if(item.productBuyed) {
                            //  item.productBuyed[0].map(item => item.split("'")[0])
                              if(item.productBuyed == itemm._id){
                                  console.log(itemm.pName);
                                      const im = itemm.img.data.data;
                                      function _arrayBufferToBase64(im) {
                                        var binary = "";
                                        var bytes = new Uint8Array(im);
                                        var len = bytes.byteLength;
                                        for (var i = 0; i < len; i++) {
                                          binary += String.fromCharCode(bytes[i]);
                                        }
                                        return window.btoa(binary);
                                      }
                                  return(
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <img
                          src={`data:image/png;base64,${_arrayBufferToBase64(
                            im
                          )}`}
                          class="img-fluid rounded-3"
                          alt="Shopping item"
                        />
                        <Link href={`/singleproduct/${itemm._id}`}>نام محصول سفارش داده شده: {itemm.pName}</Link>
                                                  <br />
                                                  <small> نام کاربر: {item.userName}</small>
                                                  <br />
                                                  <small> ایمیل کاربر: {item.email}</small>
                      </div>
                    </div>
                  </div>
                            )
                                }
                             }else{
      
                              }
                              })
                            )
                          })}
                </div> */}
                  </div>






























                  <div class="row">
                    <div class="col-xl-8 col-lg-7">
                      <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 class="m-0 font-weight-bold text-primary">
                            مقاله ها
                          </h6>
                          <form
                            // onSubmit={turnofsubmit}
                            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                          >
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control bg-secondary border-0 small"
                                placeholder="جستجوی نمونه کار ها ..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                // onChange={handleTextSearch}
                              />
                              <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                  <i class="fa fa-search fa-sm"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                          <span>
                            <i class="fa fa-folder fa-sm fa-fw text-gray-400"></i>
                          </span>
                        </div>

                        <div class="card-body">
                          <div class="chart-area">
                            {articles.length ? (
                              articles.map((item) => (
                                <table class="table table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">عنوان نمونه کار</th>
                                      <th scope="col">تاریخ</th>
                                      <th scope="col">وضعیت</th>
                                      <th scope="col">امکانات</th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td>
                                        <Link href={`/article/${item._id}`}>{item.articleName}</Link>
                                      </td>
                                      <td>{formatDate(item.createdAt)}</td>
                                      <td>
                                        {/* {item.status === "public" ? ( */}
                                        {item.status === "public" ? (
                                          <span className="badge bg-success">
                                            عمومی
                                          </span>
                                        ) : (
                                          <span className="badge bg-warning">
                                            خصوصی
                                          </span>
                                        )}
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() => handleDeleteArticle(item._id)}
                                        >
                                          حذف
                                        </button>
                                      </td>
                                      <td>
                                        <Link href={`/update-article/${item._id}`}>
                                          <button className="btn btn-primary btn-sm">
                                            ویرایش
                                          </button>
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              ))
                            ) : (
                              <h6 className="my-4 w-100 text-center bg-warning p-2">
                                نمونه کاری اضافه نشده است
                              </h6>
                            )}

                            {/* <div className="postShowerBtnParent">
                                    <button
                                      className="btn-nav shadow"
                                    
                                    >
                                      مشاهده دوره های موجود
                                    </button>
                                  </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    
                    {/* <div className="col-md-12 row">
                  <h4>سفارشات ثبت شده</h4>
                  {orders.map(item => {
                            console.log(item);
                            return (
                              posts.map(itemm => {
                             if(item.productBuyed) {
                            //  item.productBuyed[0].map(item => item.split("'")[0])
                              if(item.productBuyed == itemm._id){
                                  console.log(itemm.pName);
                                      const im = itemm.img.data.data;
                                      function _arrayBufferToBase64(im) {
                                        var binary = "";
                                        var bytes = new Uint8Array(im);
                                        var len = bytes.byteLength;
                                        for (var i = 0; i < len; i++) {
                                          binary += String.fromCharCode(bytes[i]);
                                        }
                                        return window.btoa(binary);
                                      }
                                  return(
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <img
                          src={`data:image/png;base64,${_arrayBufferToBase64(
                            im
                          )}`}
                          class="img-fluid rounded-3"
                          alt="Shopping item"
                        />
                        <Link href={`/singleproduct/${itemm._id}`}>نام محصول سفارش داده شده: {itemm.pName}</Link>
                                                  <br />
                                                  <small> نام کاربر: {item.userName}</small>
                                                  <br />
                                                  <small> ایمیل کاربر: {item.email}</small>
                      </div>
                    </div>
                  </div>
                            )
                                }
                             }else{
      
                              }
                              })
                            )
                          })}
                </div> */}
                  </div>
                </div>
                <div className="col-md-2 sidebar">
                  <h4 className="py-4">ایده نگار پارسا</h4>
                  <ul className="dashboard-ul">
                    <Link href="/new-post" className="text-white">
                      <li>اضافه کردن نمونه کار جدید</li>
                    </Link>
                    <li>لیست کاربران</li> 
                   <Link href="/writing-article" className="text-white">
                   <li>نوشتن مقاله جدید</li></Link>
                  </ul>
                </div>
                
               

              </div>
            </div>
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Dashboard;
