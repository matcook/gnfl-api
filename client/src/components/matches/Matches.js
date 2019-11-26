import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import MatchItem from './MatchItem';
import MatchForm from './MatchForm';

const Matches = () => {
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
  const rounds = matches.map(match => match.round);

  return (
    <Fragment>
      <div className="container">
        <div>Form</div>
        <div>
          <h1>results</h1>
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
          <select>
            {matches.map(match => (
              <option key={match._id} value={match.round}>
                {match.round}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default Matches;
