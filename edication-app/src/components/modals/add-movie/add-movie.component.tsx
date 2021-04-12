import React from 'react';
import ReactDOM from 'react-dom';
import {useStyles} from '../styles';
import {ModalProps} from '../../../common/interfaces/ApiDataInterface';
import {useDispatch} from 'react-redux';
import {addMovies} from '../../../store/actions/addMovie';
import {uploadCard} from '../../../common/interfaces/ApiDataInterface';
import {Form, FormikProps, Formik, Field} from 'formik';
import * as Yup from "yup";
import {InputField} from '../../fields/inputField/InputField';
import {SelectField} from '../../fields/selectField/SelectField';
import {DateField} from '../../fields/dateField/DateField';
import {genresStub} from '../../../common/static/genresStub';

interface errorsProps {
    id: number;
    message: string;
}

const uploadData: uploadCard = {
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: [],
}

const ValidationSchema = Yup.object().shape({
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

export const AddMovieComponent: React.FC<ModalProps> = ({closeModal}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const errors: errorsProps[] = [];

    const callBack = (result, response) => {
        if (result.ok) {
            errors.length = 0;
            closeModal();
        } else {
            errors.length = 0;
            if (response?.messages) {
                response?.messages.forEach((message, index) => {
                    errors.push({id: index, message: message})
                })
            }
        }
    }

    return ReactDOM.createPortal(
        <aside className={classes.modalsOverlay}>
            <Formik
                initialValues={uploadData}
                validationSchema={ValidationSchema}
                onSubmit={(values) => {
                    // alert(JSON.stringify(values, null, 2));
                    dispatch(addMovies(values, callBack))
                }}>
                {(props: FormikProps<uploadCard>) => (
                    <Form className={classes.modalForm}>
                        <div className={classes.modalContent}>
                            <div className={classes.modalHeader}>
                                <h2 className={classes.title}>add movie</h2>
                                <button className={classes.closeButton} onClick={closeModal}>
                                    <svg viewBox="0 0 40 40">
                                        <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                                    </svg>
                                </button>
                            </div>
                            <div className={classes.modalBody}>
                                <div className={classes.inputItem}>
                                    <InputField name="title" placeholder="title here" type="text" label="Title" />
                                </div>
                                <div className={classes.inputItem}>
                                    <InputField name="tagline" placeholder="Tagline" type="text" label="Tagline" />
                                </div>
                                <div className={classes.inputItem}>
                                    <DateField name="release_date" placeholder="Release date" type="date" label="Release date" />
                                </div>
                                <div className={classes.inputItem}>
                                    <InputField name="poster_path" type="text" placeholder="Poster path" label="Poster path" />
                                </div>
                                <div className={classes.inputItem}>
                                    <Field name= {'genres'} component={SelectField} options={genresStub} />
                                </div>
                                <div className={classes.inputItem}>
                                    <InputField name="overview" type="text" placeholder="Owerview here" label="Owerview" />
                                </div>
                                <div className={classes.inputItem}>
                                    <InputField name="runtime" type="number" placeholder="Runtime here" label="Runtime" />
                                </div>
                            </div>
                            <div className={classes.modalFooter}>
                                <button type="reset" className={classes.resetButton}>reset</button>
                                <button type="submit" className={classes.submitButton}>submit</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </aside>,
        document.body
    );
}
