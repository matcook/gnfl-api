import React, { Fragment, useContext } from 'react';
import ResultContext from '../../context/result/resultContext';
import LadderItem from './LadderItem';

const Ladder = () => {
  const resultContext = useContext(ResultContext);

  const { results } = resultContext;

  let teams = ['Railway FC', 'Brigades FC'];
  let ladder = [];

  teams.forEach(team => {
    let pointsForTotal = 0;
    let pointsAgainstTotal = 0;
    let played = 0;
    let win = 0;
    let loss = 0;
    let draw = 0;
    let points = 0;
    let stats = {};
    results.forEach(result => {
      if (result.team.club.name === team) {
        // console.log(result.team.club.name + result.pointsFor);
        pointsForTotal += result.pointsFor;
        pointsAgainstTotal += result.pointsAgainst;
        played++;
        if (result.pointsFor > result.pointsAgainst) {
          win++;
        }
        if (result.pointsFor < result.pointsAgainst) {
          loss++;
        }
        if (result.pointsFor === result.pointsAgainst) {
          draw++;
        }
      }

      let percentage = Number(
        ((pointsForTotal / pointsAgainstTotal) * 100).toFixed(2)
      );
      points = win * 4 + draw * 2;
      stats = {
        name: team,
        pointsFor: pointsForTotal,
        pointsAgainst: pointsAgainstTotal,
        percentage,
        points,
        win,
        loss,
        draw,
        played
      };
    });
    ladder.push(stats);
  });
  console.log(ladder);

  return (
    <Fragment>
      <h3>Ladder</h3>
      <table>
        <tbody>
          <tr>
            <th>Club</th>
            <th>P</th>
            <th>PTS</th>
            <th>%</th>
            <th>W</th>
            <th>L</th>
            <th>D</th>
            <th>F</th>
            <th>A</th>
          </tr>
          {ladder.map(team => (
            <LadderItem key={team.name} team={team} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Ladder;
