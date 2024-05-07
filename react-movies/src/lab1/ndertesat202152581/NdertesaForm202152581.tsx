import { Formik, Form, FormikHelpers } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '../../forms/TextField';
import Button from '../../utils/Button';
import { ndertesaCreationDTO } from './ndertesat.model';
import * as Yup from 'yup';

export default function NdertesaForm202152581(props: ndertesatFormProps){
    return (

        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                emertimi: Yup.string().required('This field is required')
                .max(50, 'Max length is 50 characters').firstLetterUpperCase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="emertimi" displayName="Emertimi" />

                    <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
                    <Link className="btn btn-secondary" to="/ndertesat">Cancel</Link>

                </Form>
            )}

        </Formik>
    )
}

interface ndertesatFormProps{
    model: ndertesaCreationDTO;
    onSubmit(values: ndertesaCreationDTO, action: FormikHelpers<ndertesaCreationDTO>): void;
}




