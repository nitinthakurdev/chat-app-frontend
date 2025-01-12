import { FC, ReactElement } from "react";
import { AppRoutes } from "@/routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
};

export default App;