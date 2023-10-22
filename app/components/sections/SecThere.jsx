import Image from "next/image";
import more from "../../public/img/more.png"


const SecThere = () => {
  return (
    <section>
      <div className="container sec-there-p">
        <div className="row">
          <h5 className="mb-5 mt-4">با ما بیشتر آشنا شوید</h5>
          <div className="col-md-6 sec-three-bg-txt">
            <h6 className="sec-there-txt-title">
              شرکت <span>ایده نگار</span>
            </h6>
            <p className="text-end my-4">
              گروه نرم افزاری ایده نگار حاصل یک تفکر خلاق همراه با پشتکار متکی
              به دانش روز دنیا می باشد که در سال 1400 فعالیت خود را در زمینه
              طراحی سایت و اپلیکیشن شروع کرده و در این رمینه همواره تلاش دارد تا
              بهترین خدمات را به مشتریان خود ارائه دهد.
            </p>
            <a
              href="tel:09141575822"
              className="head-btn my-2 text-decoration-none"
            >
              تماس با ما
            </a>
            <div className="row my-4 sec-three-details-p mx-2">
              <div className="col-3">
                <p>+100</p>
                <small>مشتری راضی</small>
              </div>
              <div className="col-3">
                <p>+200</p>
                <small>پروژه موفق</small>
              </div>
              <div className="col-3">
                <p>+50</p>
                <small>کارمند فعال</small>
              </div>
              <div className="col-3">
                <p>+30</p>
                <small>مشتری خارجی</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src={more}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecThere;
