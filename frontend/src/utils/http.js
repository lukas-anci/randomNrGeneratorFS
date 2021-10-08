import axios from 'axios';

export const generateNumber = async (length, setRandomNumber, setLength) => {
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
