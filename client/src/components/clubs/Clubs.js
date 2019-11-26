import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClubForm from './ClubForm';
import ClubItem from './ClubItem';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [teams, setTeams] = useState([]);
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getData = async () => {
      try {
        const [club, team, venue] = await Promise.all([
          axios.get(`/api/club`, { cancelToken: source.token }),
          axios.get(`/api/team`, { cancelToken: source.token }),
          axios.get(`/api/venue`, { cancelToken: source.token })
        ]);
        setClubs(club.data);
        setTeams(team.data);
        setVenues(venue.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request Cancelled');
        } else {
          console.log(err);
        }
      }
    };
    getData();
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <div>
      <h1>CLUBS</h1>
      <div>
        <ClubForm teams={teams} location={venues} />
        {clubs.map(club => (
          <ClubItem key={club._id} data={club} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
