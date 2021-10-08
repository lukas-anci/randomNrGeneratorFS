const getANumber = (req, res) => {
  try {
    let val = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);
    const value = val.toString();

    res.json(value);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getANumber;
