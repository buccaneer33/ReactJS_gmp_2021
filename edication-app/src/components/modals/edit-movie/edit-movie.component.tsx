import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {useStyles} from '../styles';
import {ModalProps, newMovieCard} from '../../../common/interfaces/ApiDataInterface';
import {useDispatch} from 'react-redux';
import {editMovie} from '../../../store/actions/editMovie';
import {Form, FormikProps, Formik, Field, useFormikContext} from 'formik';
import {InputField} from '../../fields/inputField/InputField';
import {SelectField} from '../../fields/selectField/SelectField';
import {genresStub} from '../../../common/static/genresStub';
import {ValidationSchema} from '../../../common/static/validationSchema';

interface errorsProps {
    id: number;
    message: string;
}
interface EditProps extends ModalProps {
    filmData: newMovieCard
}

export const EditMovieComponent: React.FC<EditProps> = ({closeModal, filmData}) => {

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
                response?.messages.forEach((message, index) => errors.push({id: index, message: message}))
            }
        }
    }

    /* только для хука */
    const AutoSubmitToken = () => {
        const { values, submitForm } = useFormikContext();
        useEffect(() => {
            if ((values as newMovieCard).token.length >= 6  ) {
                const {token, ...newObj} = values as newMovieCard;
                dispatch(editMovie(newObj as newMovieCard, callBack))
            }
        }, [values, submitForm]);
        return null;
    };

    return ReactDOM.createPortal(
        <aside className={classes.modalsOverlay}>
            <Formik
                initialValues={Object.assign(filmData, {token: ''})}
                validationSchema={ValidationSchema}
                onSubmit={(values, actions) => {
                    // alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}>
                {(props: FormikProps<newMovieCard>) => (
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
                                    <Field name= {'genres'} component={SelectField} options={genresStub} />
                                </div>
                                <div className={classes.inputItem}>
                                    <InputField name="overview" type="text" placeholder="Owerview here" label="Owerview" />
                                </div>
                                <div className={classes.inputItem}>
                                    <InputField name="runtime" type="number" placeholder="Runtime here" label="Runtime" />
                                </div>
                                <div className={classes.inputItem}>
                                    <Field name="token" type="text" />
                                </div>
                                <AutoSubmitToken />
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
