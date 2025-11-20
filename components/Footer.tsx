"use client";
import Link from "next/link";
import MontrealTime from "./Montreal";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social">
                <Link href='https://facebook.com' className="pill">FB</Link>
                <Link href='https://instagram.com' className="pill">IG</Link>
                <Link href='https://linkedin.com' className="pill">IN</Link>
                <Link href='https://behance.net' className="pill">BE</Link>

                <Link href='/contact' className="pill contact">CONTACT ♥</Link>
            </div>

            <div className="footer-bottom">
                <div className="footer-left">🌐 MONTREAL — <MontrealTime/></div>
                <div className="footer-center">
                    <Link href='/'>PRIVACY POLICY</Link>
                    <Link href='/'>PRIVACY NOTICE</Link>
                    <Link href='/'>ETHICS REPORT</Link>
                    <Link href='/'>CONSENT CHOICES</Link>
                </div>
                <div className="footer-right">
                    <a href="#top">BACK TO TOP</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
