import React from 'react';
import ReactDOM from 'react-dom';
import {useStyles} from '../styles';
import {ModalProps} from '../../../common/interfaces/ApiDataInterface';
import {useDispatch} from 'react-redux';
import {addMovies} from '../../../store/actions/addMovie';
import {uploadCard} from '../../../common/interfaces/ApiDataInterface';
import {Form, FormikProps, Formik, Field} from 'formik';
import {InputField} from '../../fields/inputField/InputField';
import {SelectField} from '../../fields/selectField/SelectField';
import {genresStub} from '../../../common/static/genresStub';
import {ValidationSchema} from '../../../common/static/validationSchema';

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
    const submit = (values) => {
        // alert(JSON.stringify(values, null, 2));
        dispatch(addMovies(values, callBack))
    }

    return ReactDOM.createPortal(
        <aside className={classes.modalsOverlay}>
            <Formik
                initialValues={uploadData}
                validationSchema={ValidationSchema}
                onSubmit={(values) => submit(values)}>
                {(props: FormikProps<uploadCard>) => (
                    <Form onSubmit={props.handleSubmit} className={classes.modalForm}>
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
                                    <InputField name="release_date" placeholder="Release date" type="date" label="Release date" />
                                </div>
                                <div className={classes.inputItem}>
                                    <InputField name="poster_path" type="text" placeholder="Poster path" label="Poster path" />
                                </div>
                                <div className={classes.inputItem}>
                                    <Field name= 'genres' component={SelectField} options={genresStub} label="Ganres"/>
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
