import React from 'react';

const LadderItem = ({ team }) => {
  const {
    name,
    played,
    points,
    percentage,
    win,
    loss,
    draw,
    pointsFor,
    pointsAgainst
  } = team;
  return (
    <>
      <h1>s</h1>
      <tr>
        <td>{name}</td>
        <td>{played}</td>
        <td>{points}</td>
        <td>{percentage}</td>
        <td>{win}</td>
        <td>{loss}</td>
        <td>{draw}</td>
        <td>{pointsFor}</td>
        <td>{pointsAgainst}</td>
      </tr>
    </>
  );
};

export default LadderItem;
