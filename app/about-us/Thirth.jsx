import Image from "next/image";
import alireza from "../public/img/alireza.jpeg";
import mitra from "../public/img/mitra.jpeg"

const Thirth = () => {
  return (
    <section>
      <div className="container">
        <div className="row thirth-about-p">
          <div className="col-md-6">
            <div className="card about-thirth-box">
              <div className="card-body text-center">
                <Image
                  src={mitra}
                  className="img-fluid"
                  width="250px"
                  height="250px"
                  alt="عکس مدیر عامل شرکت ایده نگار پارسا"
                />
                <h4 className="my-4">مدیر عامل</h4>
                <h6>میترا عاقی</h6>
                <div className="my-4">
                <small className="text-secondary">
                  تجربه: 5 سال فعالیت در حوزه طراحی وب فرانت اند و بک اند, تجربه
                 دیحیتال مارکتینگ با روش ساستک, تجربه مدیریت استارتاپ خدماتی, برنامه نویسی اپلیکیشن موبایل به مدت 2 سال ...
                </small>
                </div>
                <br />
                <i className="fa fa-instagram fs-2"></i>
                <i className="fa fa-linkedin fs-2 mx-5"></i>
                <i className="fa fa-area-chart fs-2"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card about-thirth-box">
              <div className="card-body text-center">
                <Image
                  src={alireza}
                  className="img-fluid"
                  width="250px"
                  height="250px"
                  alt="عکس مدیر فنی شرکت ایده نگار پارسا"
                />
                <h4 className="my-4">مدیر فنی</h4>
                <h6>علیرضا ویژه</h6>
                <div className="my-4">
                <small className="text-secondary">
                  تجربه: 5 سال فعالیت در حوزه طراحی وب فرانت اند و بک اند, تجربه
                 دیحیتال مارکتینگ با روش ساستک, تجربه مدیریت استارتاپ خدماتی, برنامه نویسی اپلیکیشن موبایل به مدت 2 سال ...
                </small>
                </div>
                <br />
                <i className="fa fa-instagram fs-2"></i>
                <i className="fa fa-linkedin fs-2 mx-5"></i>
                <i className="fa fa-area-chart fs-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thirth;
