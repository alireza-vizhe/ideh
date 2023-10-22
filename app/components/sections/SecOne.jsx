import servicesImg from "../../public/img/service.jpg";
import seoImg from "../../public/img/seo.jpg";
import shopImg from "../../public/img/shop.jpg";
import appImg from "../../public/img/app.jpg";
import Image from "next/image";

const SecOne = () => {
  return (
    <section className="sec-one mb-5">
      <div className="container">
        <div className="row">
          <h2 className="my-4">خدماتی که ما به مشتریان ارائه میدیم</h2>
          <div className="col-md-3 col-6 sec-one-card-parent">
            <div className="card">
              <div className="card-body">
                <Image src={appImg} className="img-fluid" alt="" />
                <small>طراحی اپلیکیشن</small>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 sec-one-card-parent">
            <div className="card">
              <div className="card-body">
              <Image src={shopImg} className="img-fluid" alt="" />
                <small>طراحی سایت فروشگاهی</small>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 sec-one-card-parent">
            <div className="card">
              <div className="card-body">
              <Image src={servicesImg} className="img-fluid" alt="" />
                <small>طراحی سایت شرکتی و خدماتی</small>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 sec-one-card-parent">
            <div className="card">
              <div className="card-body">
              <Image src={seoImg} className="img-fluid" alt="" />
                <small>سئو وب سایت</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecOne;
