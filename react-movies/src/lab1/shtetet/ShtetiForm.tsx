import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { shtetiCreationDTO } from "./shtetet.model";
import TextField from "../../forms/TextField";
import Button from "../../utils/Button";

export default function ShtetiForm(props: shtetiFormProps){
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
                    <Link className="btn btn-secondary" to="/shtetet">Cancel</Link>

                </Form>
            )}

        </Formik>
    )
}

interface shtetiFormProps{
    model: shtetiCreationDTO;
    onSubmit(values: shtetiCreationDTO, action: FormikHelpers<shtetiCreationDTO>): void;
}