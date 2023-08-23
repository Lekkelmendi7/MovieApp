import ActorForm from "./ActorForm";

export default function EditActor(){
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm 
            model={{name: 'Cilian Muprhy',
            dateOfBirth: new Date('1972-05-25'),
            biography: `#Something
            This person was born in **England**`,
            pictureURL: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/21/1464198499-peaky.jpg'
            }}
            onSubmit={values => console.log(values)}
            />
        </>
    )
}