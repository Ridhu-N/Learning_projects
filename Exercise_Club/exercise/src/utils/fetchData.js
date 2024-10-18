export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key":'22fa6ea2b8msh57b83fd8c39949dp16ddf4jsn36f86ec2c4a8',
    "X-RapidAPI-Host": 'exercisedb.p.rapidapi.com',
  },
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '22fa6ea2b8msh57b83fd8c39949dp16ddf4jsn36f86ec2c4a8'
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
