import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import TextField from "../../forms/TextField";
import Button from "../../utils/Button";
import { sculptorCreateDTO } from "./sculptors.model";

export default function SculptorForm(props: sculptorFormProps){
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
                    <TextField field="dataLindjes" displayName="DataLindjes" />
                    <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
                    <Link className="btn btn-secondary" to="/sculptors">Cancel</Link>

                </Form>
            )}

        </Formik>
    )
}

interface sculptorFormProps{
    model: sculptorCreateDTO;
    onSubmit(values: sculptorCreateDTO, action: FormikHelpers<sculptorCreateDTO>): void;
}