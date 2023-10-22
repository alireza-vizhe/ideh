import * as Yup from "yup";

export const postSchema = Yup.object().shape({
  description: Yup.string()
    .required("توضحیات الزامی میباشد"),
  name: Yup.string()
    .required("نام الزامی میباشد")
    .min(4, "نام شما نباید کمتر از 4 کاراکتر باشد")
    .max(100, "نام شما نباید کمتر از 4 کاراکتر باشد"),
    category: Yup.mixed().oneOf(
        ["شرکتی و خدماتی", "انیمیشنال", "فروشگاهی", "اپلیکیشن"],
        "یکی از 4 وضعیت نوع پروژه را انتخاب کنید"
      ),
  link: Yup.string()
    .required("آدرس وب سایت شما الزامی می باشد"),
    status: Yup.mixed().oneOf(
        ["private", "public"],
        "یکی از 2 وضعیت را انتخاب کنید"
      ),
      singleShow: Yup.mixed().oneOf(
        ["false", "true"],
        "یکی از 2 وضعیت را انتخاب کنید"
      ),
});
