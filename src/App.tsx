import { FC, ReactElement} from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
// local imports 
import { AppRoutes } from "@/routes/AppRoutes";

const App: FC = (): ReactElement => {
  const {userTheme} = useSelector((state:any) => state.logedInUser)

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