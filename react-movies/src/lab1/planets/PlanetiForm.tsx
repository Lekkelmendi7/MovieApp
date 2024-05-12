import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import TextField from "../../forms/TextField";
import Button from "../../utils/Button";
import { planetCreationDTO } from "./planets.model";

export default function PlanetiForm(props: planetiFormProps){
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required')
                .max(50, 'Max length is 50 characters').firstLetterUpperCase(),
                type: Yup.string().required('This field is required')
                .max(50, 'Max length is 50 characters').firstLetterUpperCase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />
                    <TextField field="type" displayName="Type" />
                    <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
                    <Link className="btn btn-secondary" to="/planets">Cancel</Link>

                </Form>
            )}

        </Formik>
    )
}

interface planetiFormProps{
    model: planetCreationDTO;
    onSubmit(values: planetCreationDTO, action: FormikHelpers<planetCreationDTO>): void;
}