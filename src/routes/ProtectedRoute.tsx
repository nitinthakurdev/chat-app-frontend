import  { FC, ReactNode } from 'react';
// local imports
import { useGetLogedInUserQuery } from '@/services/auth.service';

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
    const {data,isError} = useGetLogedInUserQuery("");
    console.log(data,isError)
    return (
        <div>{children}</div>
    );
};

export default ProtectedRoute;