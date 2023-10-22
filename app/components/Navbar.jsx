"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaListUl,
  FaUserAlt,
  FaClosedCaptioning,
  FaWindowClose,
} from "react-icons/fa";
import logo from "../public/img/logo2.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="nav-des">
        <div className="container">
          <div className="row">
            <div className="col-md-2 phone-details-nav-des">
              <a href="tel:09141575822">
                <i className="fa fa-phone"></i>
              </a>
              <span>021-88222222</span>
            </div>

            <div className="col-md-8 des-nav-ul">
              <ul>
                <Link
                  href="/contact-us"
                  className="text-dark text-decoration-none"
                >
                  <li>تماس با ما</li>
                </Link>
                <Link
                  href="/about-us"
                  className="text-dark text-decoration-none"
                >
                  <li>درباره ما</li>
                </Link>
                <Link
                  href="/animation"
                  className="text-dark text-decoration-none"
                >
                  <li>طراحی سایت فروشگاهی</li>
                </Link>
                <Link
                  href="/mobile-app"
                  className="text-dark text-decoration-none"
                >
                  <li>طراحی اپلیکیشن</li>
                </Link>
                <Link
                  href="/nomone-p"
                  className="text-dark text-decoration-none"
                >
                  <li>نمونه کار</li>
                </Link>
                <Link
                  href="/clever-web"
                  className="text-dark text-decoration-none"
                >
                  <li>طراحی سایت</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-2">
              <Link href="/">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  className="img-fluid"
                  alt="a"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="res-nav">
        <div className="container">
          <div className="row">
            <div className="col-2">
              {show ? (
                <FaWindowClose fontSize={30} onClick={() => setShow(!show)} />
              ) : (
                <FaListUl fontSize={30} onClick={() => setShow(!show)} />
              )}
            </div>
            <div className="col-8 logo-parent-res-nav">
              <Link href="/">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  className="img-fluid"
                  alt="a"
                />
              </Link>
            </div>
            <div className="col-2 user-icon-parent-nav">
              <FaUserAlt fontSize={25} />
            </div>
          </div>
        </div>
      </nav>
      {show ? (
        <div className="col-12 res-nav-ul-parent">
          <ul>
            <Link
              href="/contact-us"
              className="text-white text-decoration-none"
            >
              <li>تماس با ما</li>
            </Link>
            <Link href="/about-us" className="text-white text-decoration-none">
              <li>درباره ما</li>
            </Link>
            <Link href="/animation" className="text-white text-decoration-none">
              <li>طراحی سایت انیمیشنال</li>
            </Link>
            <Link
              href="/mobile-app"
              className="text-white text-decoration-none"
            >
              <li>طراحی اپلیکیشن</li>
            </Link>
            <Link href="/nomone-p" className="text-white text-decoration-none">
              <li>نمونه کار</li>
            </Link>
            <Link
              href="/clever-web"
              className="text-white text-decoration-none"
            >
              <li>طراحی سایت</li>
            </Link>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
