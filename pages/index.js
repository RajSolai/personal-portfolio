import "../styles/Home.module.css";
import { Slide } from "react-reveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <div className="greetbox">
        <Slide left>
          <div className="greettext">
            <p className="msg">Hi , am</p>
            <p className="name">Solai Raj</p>
            <span>
              Web Dev , App Dev , UI Designer <br /> & Student !
            </span>
            <div className="btn-holder">
              <Link href="/projects">
                <button>View Projects</button>
              </Link>
              <Link href="/profile">
                <button className="secondary-btn">View Profile</button>
              </Link>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="greetimg">
            <img src="/mine.png" className="greetimg-img" alt="" />
          </div>
        </Slide>
      </div>
    </div>
  );
}
