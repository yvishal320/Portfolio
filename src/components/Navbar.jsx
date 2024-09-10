import logo from "../assets/VishalLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-28" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/vishalyadav2202"><FaLinkedin /></a>
        <a href="https://github.com/yvishal320/yvishal320"><FaGithub /></a>
        <FaSquareXTwitter />
        <a href="https://www.instagram.com/rao_vishal321?igsh=bm50MHl5NmpsbjFp&utm_source=qr"><FaInstagram /></a>
      </div>
    </nav>
  )
}

export default Navbar
