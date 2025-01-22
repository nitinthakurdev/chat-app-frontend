import { FC, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
// local imports 
import { AppRoutes } from "@/routes/AppRoutes";
import { Toaster } from "react-hot-toast";

const App: FC = (): ReactElement => {
  return (
    <>
    <Toaster/>
    {/* routes */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;