import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import TextLinkExample from "./nevbar";

const Afterlogin = () => {

  return (
    <>
      <div style={{ padding: "10px" }}>
        <div
          style={{ width: "100%", padding: "1rm", border: "1px solid #cccc" }}
        >
          <TextLinkExample />
        </div>

        <div
          style={{
            width: "100%",
            height: "80vh",
            marginTop: "1rem",
            border: "1px solid #cccc ",
          }}
        >

          <Outlet />
        </div>
        <div
          style={{
            width: "100%",
            padding: "1rm",
            marginTop: "1rem",
            border: "1px solid #cccc",
          }}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Afterlogin
