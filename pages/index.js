import { Slide } from "react-reveal";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solai Raj</title>
      </Head>
      <div className="home">
        <div className="greetbox">
          <Slide left>
            <div className="greettext">
              <p className="msg">Hi , am</p>
              <p className="name">Solai Raj</p>
              <span>
                Student , Web & Mobile Developer ,<br /> IoT enthusiast (AI +
                IoT) , Linux Guy
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
    </>
  );
}
