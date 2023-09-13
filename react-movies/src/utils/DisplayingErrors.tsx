export default function DisplayingErrors(props: displayErrorsProps) {
    const style = { color: 'red' };
  
    // Check if props.errors is an array before mapping
    if (!Array.isArray(props.errors) || props.errors.length === 0) {
      return null; // Return null or an appropriate message when there are no errors
    }
  
    return (
      <ul style={style}>
        {props.errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    );
  }
  
  export interface displayErrorsProps {
    errors?: string[];
  }