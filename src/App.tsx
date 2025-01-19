import { FC, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
// local imports 
import { AppRoutes } from "@/routes/AppRoutes";

const App: FC = (): ReactElement => {

  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
};

export default App;