import { FC, ReactNode, useEffect } from 'react';
// local imports
import { useGetLogedInUserQuery } from '@/services/auth.service';
import { Navigate } from 'react-router-dom';
import { Header, Loader } from '@/constants/Components.lazy';
import { useDispatch } from 'react-redux';
import { setdata } from '@/store/slices/LogedinUser';
import { getOnlineUser, setupSocketconnection } from '@/sockets/sockets.service';

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
    const { data, isLoading } = useGetLogedInUserQuery("");
    const dispatch = useDispatch()


    useEffect(() => {
        if (data) {
            dispatch(setdata(data?.user))
            sessionStorage.setItem("id",data?.user?._id)
            setupSocketconnection();
            getOnlineUser();
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