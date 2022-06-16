import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const { sign } = useContext(HoroscopeContext);
  const [match, setMatch] = useState(false);
  return (
    <div>
      <button className="match-button" onClick={() => setMatch(!match)}>
        {match ? "Hide Match" : "Reveal Match!"}
      </button>
      {match && <div className="match">Match: {sign.match}</div>}
    </div>
  );
};

export default Match;
