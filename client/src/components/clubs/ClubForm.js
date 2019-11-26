import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClubForm = props => {
  const [club, setClub] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    president: '',
    teams: []
  });

  const { name, location, phone, email, president, teams } = club;

  useEffect(() => {
    location === '' && document.clubForm.reset();
  }, [location]);

  const onChange = e => {
    setClub({ ...club, [e.target.name]: e.target.value });
  };

  const addClub = async () => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };

    try {
      await axios.post('/api/club', club, config);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    addClub();
    setClub({
      name: '',
      location: '',
      phone: '',
      email: '',
      president: '',
      teams: []
    });

    console.log(club);
  };

  return (
    <form name="clubForm" onSubmit={onSubmit}>
      <h2>Add Club</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <select id="venues" name="location" onChange={onChange}>
        {location === '' && <option default>Select...</option>}
        {props.location.map(venue => (
          <option key={venue._id} value={venue._id}>
            {venue.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="President"
        name="president"
        value={president}
        onChange={onChange}
      />
      <input type="submit" value="Add Club" />
    </form>
  );
};

export default ClubForm;
