import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const NotFound = () => {
    return (
        <>
        <Navbar/>
        <div id="notfound" dir="rtl">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>صفحه مورد نظر قابل دسترسی نمی باشد</h2>
                <p>متاسفانه صفحه ای که دنبال آن میگردید پیدا نشد ممکنه در دست تعمیر و یا کلا وجود خارجی نداشته باشد</p>
                <Link href="/">برو به صفحه اصلی</Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default NotFound;