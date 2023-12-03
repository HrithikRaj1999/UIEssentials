import * as Yup from 'yup';

const SignUpvalidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(5)
});

export default SignUpvalidationSchema;