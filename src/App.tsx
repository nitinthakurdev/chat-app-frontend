import { FC, ReactElement, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
// local imports 
import { AppRoutes } from "@/routes/AppRoutes";
import { setupSocketconnection } from "@/sockets/sockets.service";

const App: FC = (): ReactElement => {
  const {userTheme} = useSelector((state:any) => state.logedInUser)

  useEffect(()=>{
    setupSocketconnection()
  
  },[])
  return (
    <main data-theme={userTheme}>
    <Toaster/>
    {/* routes */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </main>
  );
};

export default App;