import React, { useReducer } from "react";
import MatchContext from "./matchContext";
import matchReducer from "./matchReducer";
import {
  ADD_MATCH,
  DELETE_MATCH,
  UPDATE_MATCH,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MATCH,
  CLEAR_FILTER
} from "../types";

const MatchState = props => {
  const initialState = {
    matches: [
      {
        _id: "12casd785fas341",
        season: 2019,
        round: 1,
        date: new Date(),
        homeTeam: {
          club: {
            name: "Railway FC"
          }
        },
        awayTeam: {
          club: {
            name: "Brigades FC"
          }
        },
        location: {
          name: "The Rec",
          address: "Augustus St"
        },
        grade: {
          name: "League"
        }
      }
    ]
  };

  const [state, dispatch] = useReducer(matchReducer, initialState);

  //Add Result

  //Delete Result

  //Update Result

  return (
    <MatchContext.Provider
      value={{
        results: state.results
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default MatchState;
