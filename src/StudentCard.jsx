import { useState } from "react";

// This component creates a student card with a name, major year, image, and a button that when pressed will show/hide a bio.

function StudentCard(props) {
  // Defines different props used on the card
  const { name, major, year, bio, imageUrl } = props;
  // Defines the current state (bio not showing/ false) and creates a function to change the value based on user interaction
  const [showBio, setShowBio] = useState(false);

  // Function that when called, changes the value of showBio
  const toggleBio = () => {
    // Uses setShowBio to change the value of showBio to it's opposite (if true, now false and vice versa)
    setShowBio(!showBio);
  };

  // Where all the visual aspects of the student card are loaded and styled
  return (
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Uses props to load the image and create alt text*/}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      {/* Uses props to display name, major, and year of student */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>

      {/* Creates button where onclick calls the toggleBio function, changing the state of showBio using setShowBio */}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {/* If statement where if showBio boolean is true, button text is 'Hide Bio' and if showBio is false, button text is 'Show Bio'*/}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {/* If showBio is true, bio text shows, if false it does not. */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;
