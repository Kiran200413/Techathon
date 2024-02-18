import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Notes = () => {
    const [notes, setNotes] = useState('');
    const [data,setData]=useState();
    const [open,setopen]=useState(false);
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    // Function to update data in the backend
    const updateData = () => {
        
        if (!userData) {
            console.error('User data not found in sessionStorage');
            return;
        }

        const { _id } = userData; // Assuming _id is the identifier for the user data
        const updatedData = {
            notes: userData.notes+notes
        };

        axios.put(`http://localhost:5000/update/${_id}`, updatedData)
            .then(res => {
                console.log("Data updated:", res.data);
                // Optionally, you can clear the notes field after successful submission
                setNotes('');
            })
            .catch(err => {
                console.error('Error updating data:', err);
            });
    };
    const opeNotes = () => {

        axios.get('http://localhost:5000/findall')
          .then((res) => {
            setData(res.data);
    
    
            const authenticatedUser = res.data.find(item => item.usermail === userData.usermail );
            sessionStorage.setItem('userData', JSON.stringify(authenticatedUser));
            setopen(true)
            
          })
          .catch((err) => {
            console.log(err);
          })
    
    
      }
    return (
        <div className='notes'>
            
            {!open && <p><label>Write Notes Here</label><textarea value={notes}  style={{ width: '100%', height: '80%' }}  onChange={(e) => setNotes(e.target.value)} ></textarea><Button variant="success" onClick={updateData}>Submit</Button><Button variant="success" onClick={opeNotes}>Open Notes</Button></p>}
            
            {open && userData.notes}
        </div>
    );
};

export default Notes;
