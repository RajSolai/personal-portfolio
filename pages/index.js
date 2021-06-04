import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solai Raj</title>
      </Head>
      <motion.div
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 100,
        }}
      >
        <div className="home">
          <div className="greetbox">
            <div className="greettext">
              <p className="msg"> &nbsp;Hi , am</p>
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
            <div className="greetimg">
              <img src="/mine.png" className="greetimg-img" alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
