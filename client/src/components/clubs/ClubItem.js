import React from 'react';

const ClubItem = props => {
  return (
    <div>
      <div>Name: {props.data.name}</div>
      <div>
        Location: {props.data.location.name} {props.data.location.address}
      </div>
    </div>
  );
};

export default ClubItem;
