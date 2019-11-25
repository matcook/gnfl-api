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
    const source = axios.CancelToken.source();

    const getData = async () => {
      try {
        const [grade, season] = await Promise.all([
          axios.get(`/api/grade`, { cancelToken: source.token }),
          axios.get(`/api/season`, { cancelToken: source.token })
        ]);
        setGrades(grade.data);
        setSeasons(season.data);

        const matches = await axios.get(
          `/api/game/${gradeQuery}/${seasonQuery}`,
          { cancelToken: source.token }
        );
        setMatches(matches.data);
        console.log(matches);
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
