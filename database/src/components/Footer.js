import Clock from "./Clock";
import { useContext } from "react";

function Footer() {
  return (
    <footer className={"footer light"}>
      <div className={"container footer-flex footer-light"}>
        <ul className={"social social-light"}>
          <li className="social-item">
            <a href="/">Twitter</a>
          </li>
          <li className="social-item">
            <a href="/">LinkedIn</a>
          </li>
          <li className="social-item">
            <a href="/">Instagram</a>
          </li>
        </ul>
        <Clock />
        {/* {toggle ? <Clock/>: ''} */}
        {/* <button onClick={()=>setToggle(!toggle)}>toggle</button> */}
      </div>
    </footer>
  );
}

export default Footer;
