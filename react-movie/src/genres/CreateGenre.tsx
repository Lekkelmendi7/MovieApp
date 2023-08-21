import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../utils/Button';

export default function CreateGenre() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  return (
    <>
      <h3>Create Genre</h3>
      <Button onClick={() => {
        // ... saving in the database
        navigate('/genres'); // Use navigate function for navigation
      }}>Save Changes</Button>
    </>
  );
}