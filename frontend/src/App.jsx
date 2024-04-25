import { useEffect, useState } from "react";
import "./App.css";

const url =
  "https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D?exact=true&titleType=movie";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

function App() {
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("Abraham Lincoln vampire slayer");

  const getData = async () => {
    try {
      const response = await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles/search/title/${query}?exact=true&titleType=movie`
      );
      const data = await response.json();
      setContent(data);
      console.log(content);
    } catch {
      console.error("Det har skjedd en feil");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
}

export default App;
