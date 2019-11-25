import React, { Fragment, useContext, useEffect, useState } from 'react';
import LadderItem from './LadderItem';
import ClubContext from '../../context/club/clubContext';
import axios from 'axios';

const Ladder = () => {
  const [matches, setMatches] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [grades, setGrades] = useState([]);
  const [gradeQuery, setGradeQuery] = useState('League');
  const [seasonQuery, setSeasonQuery] = useState('2019');

  useEffect(() => {
    const getMatches = async () => {
      const result = await axios.get(`/api/game/${gradeQuery}/${seasonQuery}`);
      setMatches(result.data);
    };

    const getOptions = async () => {
      const result = await axios.all([
        axios.get('/api/grade'),
        axios.get('/api/season')
      ]);
      setGrades(result[0].data);
      setSeasons(result[1].data);
    };

    getMatches();
    getOptions();
  }, [seasonQuery, gradeQuery]);

  const { clubs } = useContext(ClubContext);
  const teams = clubs.map(club => club.name);

  return (
    <Fragment>
      <h3>Ladder</h3>
      <select onChange={e => setSeasonQuery(e.target.value)}>
        {seasons.map(season => (
          <option key={season._id} value={season.year}>
            {season.year}
          </option>
        ))}
      </select>
      <select onChange={e => setGradeQuery(e.target.value)}>
        {grades.map(grade => (
          <option key={grade._id} value={grade.name}>
            {grade.name}
          </option>
        ))}
      </select>
      <ul>
        {matches.map(match => (
          <li key={match._id}>{match.season}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Ladder;
