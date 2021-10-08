import './App.css';
import Display from './components/Display';
import Button from './components/Button';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { generateNumber } from './utils/http';

function App() {
  const [randomNumber, setRandomNumber] = useState('----');
  const [length, setLength] = useState(4);

  // generateNumber(length, setRandomNumber, setLength);

  const generateNumber = async () => {
    try {
      const response = await axios.get(
        `http://sandbox.enzosystems.com:4000/randomnumber?length=${length}`
        // `http://localhost:5000/api/number`
      );

      console.log('response.data', response.data);
      setRandomNumber(response.data);

      if (length < 6) {
        setLength(length + 1);
      } else {
        setLength(4);
      }
    } catch (error) {
      console.log({ msg: error });
    }
  };

  return (
    <div className="App">
      <Display randomNumber={randomNumber} />
      <Button length={length} generateNumber={generateNumber} />
    </div>
  );
}

export default App;
