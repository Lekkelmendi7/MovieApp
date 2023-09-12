import { Form, Formik, FormikHelpers } from "formik";
import { UserCredentials } from "./auth.model";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";


export default function AuthForm(props: authFormProps) {
    return (
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            email: Yup.string().required('This field is required to fill!')
            .email('You have to insert a valid email!'),
            password: Yup.string().required('This field is required to fill!')
        })}
        >
            {formikProps => (
                <Form>
                    <TextField displayName="Email" field="email" />
                    <TextField displayName="Password" field="password" type="password"/>

                    <Button disabled={formikProps.isSubmitting} type="submit">Send</Button>
                    <Link className="btn btn-secondary" to="/">Cancel</Link>
                </Form>
            )}
            </Formik>
    )
}


export interface authFormProps{
    model: UserCredentials;
    onSubmit(values: UserCredentials, actions: FormikHelpers<UserCredentials>): void;
}