import Image from "next/image";
import serviceI from "../../public/img/sec-online.png"


const SecFour = () => {
  return (
    <section className="sec-four my-5">
      <div className="container">
        <div className="row sec-four-row">
          <div className="col-md-4 ">
            <Image
              src={serviceI}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <h5>
              به مشاوره نیاز دارید
            </h5>
            <p className="my-5 text-white">
              با ما در ارتباط باشید تا از بهترین و عالی ترین خدمات ما استفاده کنید کافیست تا در بخش پایین شماره تلفن خود را وارد کنید
            </p>
            <span className="sec-four-input-p">
              <button className="btn-input my-3">ارسال</button>
              <input type="text" placeholder="شماره تماس خود را وارد کنید" />
            </span>
            <button className="sec-four-btn mx-2">
              <i className="fa fa-whatsapp m-2"></i> پشتیبانی در واتس اپ{" "}
            </button>
            <a href="tel:09141575822" className="sec-four-btn m-2 text-decoration-none">
              <i className="fa fa-phone m-2"></i> تماس مستقیم{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecFour;
