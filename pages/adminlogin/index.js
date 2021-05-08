import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";

const Admin = () => {
  const [secretKey, setSecretKey] = useState("");
  const router = useRouter();
  const makeLogin = () => {
    console.log(secretKey);
    localStorage.setItem("isLogged",true);
    router.push("/addproject");
  }
  return (
    <>
      <Head>
        <title>Solai Raj - Login</title>
      </Head>
      <div className="admin-login">
        <div className="login-warp">
          <div className="login-form">
            <input
              type="text"
              onChange={(e) => setSecretKey(e.target.value)}
              placeholder="Enter The Secret Key !"
            />
            <button type="submit" onClick={makeLogin}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
