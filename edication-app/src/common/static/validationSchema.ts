import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    tagline: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    poster_path: Yup.string().url()
        .required('Required'),
    release_date: Yup.date()
        .required('Required'),
    overview: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    runtime: Yup.number()
        .min(5, 'Too Small!')
        .max(300, 'Too Big!')
        .required('Required'),
    genres: Yup.array()
        .required('Required')
});
