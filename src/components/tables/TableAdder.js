import './tableAdder.css';
import {Navigation} from '../navigation/Navigation';
import {useState} from 'react';
export const TableAdder = () => {
  const [team, setTeam] = useState('Personal');

  const createTable = () => {
    console.log('hej');
  };
  const chooseTeam = (event) => setTeam(event.target.value);

  return (
    <>
      <Navigation />
      <div className="tableCreator">
        <p className="title">Stwórz nową tablicę:</p>
        <form className="createTableForm" onSubmit={createTable} action="#">
          <label htmlFor="tableTitle">Nazwa tablicy:</label>
          <input type="text" name="tableTitle" />
          <label htmlFor="selectType">Wybierz zespół:</label>
          <select
            id="team"
            value={team}
            className="selectType"
            name="selectType"
            onChange={chooseTeam}
          >
            <option value="Personal">Prywatna tablica</option>
            <option value="Nuclear penguins">Nuclear penguins</option>
            <option value="Front-Family">Front-Family</option>
            <option value="All you need is code">All you need is code</option>
          </select>
          <button className="submit" type="submit">
            Utwórz
          </button>
        </form>
      </div>
    </>
  );
};
