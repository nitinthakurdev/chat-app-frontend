import * as yup from "yup";

export const RegisterValidation = yup.object({
    username:yup.string().min(2).required("Username must be Required"),
    email:yup.string().email("Enter valid Email address").required("Email must be required"),
    password:yup.string().min(4).max(12).required("Password must be required"),
})

export const LoginValidation = yup.object({
    username:yup.string().min(2).required("Username must be Required"),
    password:yup.string().min(4).max(12).required("Password must be required"),
})