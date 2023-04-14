import * as Yup from 'yup';


export const FormScchema= Yup.object({
    name:Yup.string().min(3).max(20).required('Name is Must'),
    
    email:Yup.string().email().required('Email is must')

});