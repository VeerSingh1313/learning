import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout2 = () => {
  return (
    <>
       <div
          style={{
            width: "100%",
            height: "80vh",
            marginTop: "1rem",
            border: "1px solid #cccc ",
          }}
        >
         
          <Outlet/>
        </div>
    </>
  )
}

export default Layout2
