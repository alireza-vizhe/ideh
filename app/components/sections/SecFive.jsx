import Image from "next/image";
import vizhegi from "../../public/img/vizhegi.jpg"


const SecFive = () => {
  return (
    <section>
      <div className="container sec-five">
        <div className="row">
          <h5>ویژگی های ما</h5>
          <small className="my-4">
            ما تیمی هستیم خلاق با ایده های ناب
          </small>
          <div className="img-p">
            <img
              src="https://vistaapp.ir/wp-content/uploads/2022/01/Group-868-1.svg"
              className="w-25"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <Image
              src={vizhegi}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="card my-3">
              <div className="card-body row sec-five-boxes-p">
                <div className="col-md-10">
                  <small className="box-title">مناسب ترین قیمت ها</small>
                  <br />
                  <small className="box-des">
                    هیچگاه مناسب ترین قیمت به معنی ارزان ترین نخواهد بود ، در
                    شرکت ایده نگار مناسب ترین قیمت به این معنی است که بیشترین
                    بهره وری با کمترین قیمت اجرا خواهد شد.
                  </small>
                </div>
                <div className="col-md-2">
                  <i className="fa fa-percent"></i>
                </div>
              </div>
            </div>
            <div className="card my-3">
              <div className="card-body row sec-five-boxes-p">
                <div className="col-md-10">
                  <small className="box-title">
                    به روز ترین تکنولوژی های روز
                  </small>
                  <br />
                  <small className="box-des">
                    شرکت ایده نگار از جمله شرکات هایی است که در بخش های طراحی
                    سایت ، طراحی اپلیکیشن و ... از به رزو ترین متد ها و به روز
                    ترین زبان های برنامه نویسی و فریم ورک های استفاده می نماید.
                  </small>
                </div>
                <div className="col-md-2">
                  <i className="fa fa-percent"></i>
                </div>
              </div>
            </div>
            <div className="card my-3">
              <div className="card-body row sec-five-boxes-p">
                <div className="col-md-10">
                  <small className="box-title">وقت شناسی و تحویل به موقع</small>
                  <br />
                  <small className="box-des">
                    تیم ایده نگار همیشه در تلاش بوده که بتواند با استفاده از
                    نیروهای جوان و مجرب به سرعت نیاز مشتریان خود را بر طرف نموده
                    و در زمان مناسب پروژه های نهایی را تحویل دهد و این یکی از
                    اولویت های شرکت ایده نگار می باشد
                  </small>
                </div>
                <div className="col-md-2">
                  <i className="fa fa-percent"></i>
                </div>
              </div>
            </div>
            <div className="card my-3">
              <div className="card-body row sec-five-boxes-p">
                <div className="col-md-10">
                  <small className="box-title">بالا ترین کیفیت</small>
                  <br />
                  <small className="box-des">
                    ایده نگار علاوه بر وقت شناسی در انجام پروژه های نیز سعی بر این
                    دارد که تمامی پروژه ها را با بهترین کیفیت و در زمان مناسب
                    تحویل مشتریان خود دهد که در این مدت نیز در این امر موفق بود
                    و توانسته رضایت مشتریان خود را جلب نماید.
                  </small>
                </div>
                <div className="col-md-2">
                  <i className="fa fa-percent"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecFive;
