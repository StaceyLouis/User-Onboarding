
import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),
  password: yup
    .string()
    .min(6,"Password must contain at least 6 characters")
    .required( "Passwword is required"),
  terms: yup
    .boolean()
    .oneOf([true],"You must agree to terms and conditions")
})

export default formSchema