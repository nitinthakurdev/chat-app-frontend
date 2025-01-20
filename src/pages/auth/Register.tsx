import { useFormik } from 'formik';
import { Eye, EyeOff, Lock, Mail, MessageSquare, Upload, User } from 'lucide-react';
import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
// local imports
import { RegisterValidation } from '@/validations/AuthValidation';
import { Input } from '@/constants/ui.lazy';
import { AuthImagePattern } from '@/constants/Components.lazy';
import {  useSignUpMutation } from '@/services/auth.service';
import { IRegisterData } from '@/types/Auth.types';

const Register: FC = (): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [image, setImage] = useState<string | null>(null);
    const [signUp,{isLoading}] = useSignUpMutation()
    const { errors, values, handleBlur, handleChange, handleSubmit, touched,setFieldValue } = useFormik({
        initialValues: { username: "", email: "", password: "",image:null },
        validationSchema: RegisterValidation,
        onSubmit: async (value) => {
            try {
                const formData = new FormData();
                formData.append("username",value.username)
                formData.append("email",value.email)
                formData.append("password",value.password)
                if(value.image){
                    formData.append("image",value.image)
                }
                const data = await signUp(formData as unknown as IRegisterData)
                console.log(data)
                // toast.success(data.data?.message as string)
            } catch (error) {
                console.log(error)
                // toast.error(error)
            }
            
        }
    })
    const handleFileChnage = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        if(file){
            setFieldValue('image',file[0])
            const reader = new FileReader();
            reader.onload = () =>{
                setImage(reader.result as string)
            };
            reader.readAsDataURL(file[0])
        }
    }
    

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
                            <p className='text-base-content/60' >Get started with your  free Account</p>
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
                                    onBlur={handleBlur} />
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
                                <Input type={showPassword ? "text" : 'password'}
                                    className={`input input-bordered w-full pl-10`}
                                    placeholder='Password'
                                    id='password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <button type="button" className='absolute inset-y-0 right-0 pr-3 flex items-center' onClick={() => setShowPassword(!showPassword)} >
                                    {showPassword ? <EyeOff className="size-5 text-base-content/40" /> : <Eye className="size-5 text-base-content/40" />}
                                </button>
                            </div>
                            {touched.password && errors.password && <p>{errors.password}</p>}

                        </div>
                        <div className='form-control ' >
                            <span className='label' >
                                File upload
                            </span>
                            <label htmlFor="file" className='label dark:border border-slate-700 rounded-md h-12 px-3 cursor-pointer'>
                                <span className='label-text font-medium' >Upload File </span>

                                <div className='' >
                                    <div className=' pl-3 flex items-center pointer-events-none' >
                                        <Upload className='size-5 text-base-content/40' />
                                    </div>
                                    <Input type="file"
                                        className={`input input-bordered w-full pl-10`}
                                        id='file'
                                        name='file'
                                        onChange={handleFileChnage}
                                        hidden={true} />
                                </div>
                            </label>
                            {touched.image && errors.image && <p>{errors.image}</p>}

                        </div>
                       {image && <div >
                            <img src={image} alt='preview' className='h-16 w-16 rounded-full object-cover' />
                        </div>}
                        <button type='submit' className='btn btn-primary w-full' disabled={isLoading} >
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