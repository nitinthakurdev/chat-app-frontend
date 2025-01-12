import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout:FC = ():ReactElement => {
  return (
    <div className="h-screen flex"  >
        <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}}>
          <div
            className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          >

          </div>
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="text-white font-bold text-4xl font-sans">Simple App</h1>
            <p className="text-white mt-1">The simplest app to use</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a href="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
            </div>
          </div>
        </div>
        <Outlet/>
      </div>
  );
};

export default AuthLayout;