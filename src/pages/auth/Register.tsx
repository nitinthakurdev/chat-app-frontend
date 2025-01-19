import { useFormik } from 'formik';
import { Eye, EyeOff, Lock, Mail, MessageSquare, User } from 'lucide-react';
import { FC, ReactElement, useState } from 'react';
// local imports
import { RegisterValidation } from '@/validations/AuthValidation';
import { Input } from '@/constants/ui.lazy';
import { Link } from 'react-router-dom';
import { AuthImagePattern } from '@/constants/Components.lazy';

const Register: FC = (): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: { username: "", email: "", password: "", image: null },
        validationSchema: RegisterValidation,
        onSubmit: (value) => {
            console.log(value)
        }
    })
    
    return (
        <div className='min-h-screen grid lg:grid-cols-2'>
            {/* left side */}
            <div className='flex flex-col justify-center items-center p-6 sm:p-12' >
                <div className='w-full max-w-md space-y-8' >
                    {/* logo */}
                    <div className='text-center mb-8 ' >
                        <div className='flex flex-col items-center gap-2 group' >
                            <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all' >
                                <MessageSquare className='size-6 text-primary' />
                            </div>
                            <h1 className='text-2xl font-bold mt-2 ' >Create Account</h1>
                            <p className='text-base-content/60' >Get started with your  free Accoutn</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-6' >
                        <div className='form-control' >
                            <label htmlFor="username" className='label'>
                                <span className='label-text font-medium' >Username</span>
                            </label>
                            <div className='relative' >
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none' >
                                    <User className='size-5 text-base-content/40' />
                                </div>
                                <Input type='text' 
                                className={`input input-bordered w-full pl-10`} 
                                placeholder='Username'
                                id='username' 
                                name='username' 
                                value={values.username} 
                                onChange={handleChange} 
                                onBlur={handleBlur} />
                            </div>
                            {touched.username && errors.username && <p>{errors.username}</p>}

                        </div>
                       
                        <div className='form-control' >
                            <label htmlFor="email" className='label'>
                                <span className='label-text font-medium' >Email</span>
                            </label>
                            <div className='relative' >
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none' >
                                    <Mail className='size-5 text-base-content/40' />
                                </div>
                                <Input type='email' 
                                className={`input input-bordered w-full pl-10`} 
                                placeholder='E-mail'
                                id='email' 
                                name='email' 
                                value={values.email} 
                                onChange={handleChange} 
                                onBlur={handleBlur}  />
                            </div>
                            {touched.email && errors.email && <p>{errors.email}</p>}

                        </div>
                        <div className='form-control' >
                            <label htmlFor="email" className='label'>
                                <span className='label-text font-medium' >Password</span>
                            </label>
                            <div className='relative' >
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none' >
                                    <Lock className='size-5 text-base-content/40' />
                                </div>
                                <Input type={showPassword ? "text" :'password'} 
                                className={`input input-bordered w-full pl-10`} 
                                placeholder='Password'
                                id='password' 
                                name='password' 
                                value={values.password} 
                                onChange={handleChange} 
                                onBlur={handleBlur}  />
                                <button type="button"className='absolute inset-y-0 right-0 pr-3 flex items-center' onClick={()=>setShowPassword(!showPassword)} >
                                    {showPassword ? <EyeOff className="size-5 text-base-content/40" /> : <Eye className="size-5 text-base-content/40" /> }
                                </button>
                            </div>
                            {touched.password && errors.password && <p>{errors.password}</p>}

                        </div>
                        <button type='submit' className='btn btn-primary w-full' >
                            Create Account
                        </button>
                    </form>

                    <div className='text-center' >
                        <p className='text-base-content/60'>
                        Already have an account?{" "}
                        <Link to="/login" >Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* right side*/}
            <AuthImagePattern title='Join our community' subtitle='Connect with friends, share moments, and stay in touch with you ' />
        </div>
    );
};

export default Register;