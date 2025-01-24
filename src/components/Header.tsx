import { useLogoutUserMutation } from "@/services/auth.service";
import { logout } from "@/store/slices/LogedinUser";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { FC, ReactElement } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header: FC = (): ReactElement => {
  const [logoutUser, { isLoading }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (): Promise<void> => {
    try {
      const data = await logoutUser('').unwrap()
      toast.success(data.message)
      dispatch(logout())
      navigate("/login")
    } catch (error: any) {
      toast.error(error.data.message || "something went Wrong")
    }
  }

  return (
    <header className="bg-base-100 border-b border-base-300 sticky w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16" >
        <div className="flex items-center justify-between h-full" >
          <div className="flex items-center gap-8 " >
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all" >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center" >
                <MessageSquare className="size-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold" >Chat App</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2 " >
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>


            <Link to={"/profile"} className={`btn btn-sm gap-2`}>
              <User className="size-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>

            <button className="flex gap-2 items-center" disabled={isLoading} onClick={handleLogout} >
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;