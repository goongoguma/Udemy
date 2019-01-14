// const getPuzzle = wordCount => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then(response => {
//       // response.json() asynchronously parses the JSON in the response received from the fetch.
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch puzzle");
//       }
//     })
//     .then(data => {
//       return data.puzzle;
//     });
// };

const getPuzzle = async wordCount => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    // parsing json is a slow operation so it needs await
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

const getCountry = async countryCode => {
  const res = await fetch("//restcountries.eu/rest/v2/all");
  if (res.status === 200) {
    const data = await res.json();
    return data.find(country => country.alpha2Code === countryCode).name;
  } else {
    throw new Error("Unable to get country data");
  }
};

const getLocation = async () => {
  const res = await fetch("//ipinfo.io/json?token=20efd7cde00eea");
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Unable to get location data");
  }
};

getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country;
};
