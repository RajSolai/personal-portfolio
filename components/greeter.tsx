import Link from "next/link";

const Greeter: React.FC<any> = () => {
  return (
    <>
      <section className="section home" id="home">
        <div className="greetbox animate__animated animate__fadeInDown">
          <div className="greettext">
            <p className="msg"> &nbsp;Hi , am</p>
            <p className="name">Solai Raj</p>
            <span>
              Student , Web & Mobile Developer ,<br /> IoT enthusiast (AI + IoT)
              , Linux Guy
            </span>
            <div className="btn-holder">
              <a href="#projects">
                <button>View Projects</button>
              </a>
              <a href="#profile">
                <button className="secondary-btn">View Profile</button>
              </a>
            </div>
          </div>
          <div className="greetimg">
            <img
              src="/mine.png"
              className="greetimg-img"
              alt="Solai Raj's Image"
              height="220px"
              width="130px"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Greeter;
