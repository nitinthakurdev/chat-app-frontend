import { Loader } from "lucide-react";
import { FC, ReactElement } from "react";

const CustomLoader:FC = ():ReactElement => {
  return (
    <div className="flex items-center justify-center h-screen" >
        <Loader className="size-10 animate-spin" />
    </div>
  );
};

export default CustomLoader;