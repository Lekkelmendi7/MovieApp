import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import TextField from "../../forms/TextField";
import Button from "../../utils/Button";
import { bankaCreationDTO } from "./bankat.model";

export default function BankaForm(props: bankaFormProps){
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required')
                .max(50, 'Max length is 50 characters').firstLetterUpperCase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />
                    <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
                    <Link className="btn btn-secondary" to="/bankat">Cancel</Link>

                </Form>
            )}

        </Formik>
    )
}

interface bankaFormProps{
    model: bankaCreationDTO;
    onSubmit(values: bankaCreationDTO, action: FormikHelpers<bankaCreationDTO>): void;
}