import React, { useReducer } from 'react';
import ResultContext from './resultContext';
import resultReducer from './resultReducer';
import {
  ADD_RESULT,
  DELETE_RESULT,
  UPDATE_RESULT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_RESULT,
  CLEAR_FILTER
} from '../types';

const ResultState = props => {
  const initialState = {
    results: [
      {
        _id: '12casd785fas341',
        game: {
          season: 2019,
          round: 1
        },
        team: {
          grade: {
            name: 'League'
          },
          club: {
            name: 'Railway FC'
          }
        },
        goals: 10,
        behinds: 5,
        pointsFor: 65,
        pointsAgainst: 34
      },
      {
        _id: '12casd785faas341',
        game: {
          season: 2019,
          round: 1
        },
        team: {
          grade: {
            name: 'League'
          },
          club: {
            name: 'Brigades FC'
          }
        },
        goals: 5,
        behinds: 4,
        pointsFor: 34,
        pointsAgainst: 65
      },
      {
        _id: '12casd785asfas341',
        game: {
          season: 2019,
          round: 1
        },
        team: {
          grade: {
            name: 'League'
          },
          club: {
            name: 'Railway FC'
          }
        },
        goals: 20,
        behinds: 5,
        pointsFor: 125,
        pointsAgainst: 17
      }
    ]
  };

  const [state, dispatch] = useReducer(resultReducer, initialState);

  //Add Result

  //Delete Result

  //Update Result

  return (
    <ResultContext.Provider
      value={{
        results: state.results
      }}
    >
      {props.children}
    </ResultContext.Provider>
  );
};

export default ResultState;
