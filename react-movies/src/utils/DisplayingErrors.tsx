
export default function DisplayingErrors(props: displayErrorsProps){
    const style = {color: 'red'};
    return(
        <>
        {props.errors ? <ul style={style}>
            {props.errors.map((error,index) => <li key={index}>{error}</li>)}
        </ul>: null}
        </>
    )
}

export interface displayErrorsProps{
    errors ?: string[];
}