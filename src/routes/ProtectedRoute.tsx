import { FC, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// local imports
import { useGetLogedInUserQuery } from '@/services/auth.service';
import { Navigate } from 'react-router-dom';
import { Header, Loader } from '@/constants/Components.lazy';
import { setdata } from '@/store/slices/LogedinUser';
import { socket } from '@/sockets/sockets.service';

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
    const { data, isLoading } = useGetLogedInUserQuery("");
    const dispatch = useDispatch()




    useEffect(() => {
        if (data) {
            dispatch(setdata(data?.user))
            socket.on("connect",()=>{
                console.log("connected")
              })

              socket.emit("loginUsers",data.user._id)
        }
    }, [data])

    if (isLoading) {
        return <Loader />
    }

    if (data) {
        return (
            <>
                <Header />
                {children}
            </>
        )
    } else {
        return <><Navigate to="/login" /></>
    }
};

export default ProtectedRoute;