import React, { useReducer } from 'react';
import ClubContext from './clubContext';
import clubReducer from './clubReducer';
import {
  ADD_CLUB,
  DELETE_CLUB,
  UPDATE_CLUB,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const ClubState = props => {
  const initialState = {
    clubs: [
      {
        teams: [
          {
            grade: {
              name: 'League'
            }
          }
        ],
        _id: '5dd2419e6350e5270cf992d5',
        name: 'Railway FC',
        location: {
          name: 'The Rec',
          address: 'Augustus St'
        },
        phone: '1234 5678',
        email: 'test@test.com',
        president: 'John Doe'
      },
      {
        teams: [
          {
            grade: {
              name: 'League'
            }
          }
        ],
        _id: '5dd2419e6350e5270cf992d5',
        name: 'Rovers FC',
        location: {
          name: 'The Rec',
          address: 'Augustus St'
        },
        phone: '1234 5678',
        email: 'test@test.com',
        president: 'John Doe'
      },
      {
        teams: [
          {
            grade: {
              name: 'League'
            }
          }
        ],
        _id: '5dd2419e6350e5270cf992d5',
        name: 'Towns FC',
        location: {
          name: 'The Rec',
          address: 'Augustus St'
        },
        phone: '1234 5678',
        email: 'test@test.com',
        president: 'John Doe'
      },
      {
        teams: [
          {
            grade: {
              name: 'League'
            }
          }
        ],
        _id: '5dd2419e6350e5270cf992d5',
        name: 'Chapman Valley FC',
        location: {
          name: 'The Rec',
          address: 'Augustus St'
        },
        phone: '1234 5678',
        email: 'test@test.com',
        president: 'John Doe'
      },
      {
        teams: [
          {
            grade: {
              name: 'League'
            }
          }
        ],
        _id: '5dd2419e6350e5270cf992d5',
        name: 'Northampton FC',
        location: {
          name: 'The Rec',
          address: 'Augustus St'
        },
        phone: '1234 5678',
        email: 'test@test.com',
        president: 'John Doe'
      },
      {
        teams: [
          {
            grade: {
              name: 'League'
            }
          }
        ],
        _id: '5dd2419e6350e5270cf992d5',
        name: 'Mullewa FC',
        location: {
          name: 'The Rec',
          address: 'Augustus St'
        },
        phone: '1234 5678',
        email: 'test@test.com',
        president: 'John Doe'
      },
      {
        teams: [
          {
            grade: {
              name: 'League'
            }
          }
        ],
        _id: '5dd2419e6350e5270cf992d5',
        name: 'Brigades FC',
        location: {
          name: 'The Rec',
          address: 'Augustus St'
        },
        phone: '1234 5678',
        email: 'test@test.com',
        president: 'John Doe'
      }
    ]
  };

  const [state, dispatch] = useReducer(clubReducer, initialState);

  //Add Club

  //Delete Club

  //Edit Club

  //Set current club

  //Clear current club

  return (
    <ClubContext.Provider
      value={{
        clubs: state.clubs
      }}
    >
      {props.children}
    </ClubContext.Provider>
  );
};

export default ClubState;
