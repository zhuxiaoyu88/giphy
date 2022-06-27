import { useState, useEffect } from "react";
import CardList from "../components/CardList/CardList";
import Navbar from "../components/Navbar/Navbar";

export default function IronManList() {
  const [listGiphy, setListGiphy] = useState({
    loading: false,
    data: null,
    error: false
  });
  let content = "";

  useEffect((prevdata) => {
    setListGiphy({
      loading: true,
      data: null,
      error: false
    });

    fetch(generateEndpoint())
      .then((response) => response.json())
      .then((body) => {
        setListGiphy({
          loading: true,
          data: body.data,
          error: false
        });
      })
      .catch((err) => {
        setListGiphy({
          loading: false,
          data: err,
          error: true
        });
        console.log(err);
      });
  }, []);

  if (listGiphy.loading) {
    content = <div>Loading ...</div>;
  }

  if (listGiphy.data) {
    content = <CardList dataGiphy={listGiphy.data}></CardList>;
  }

  if (listGiphy.error) {
    content = <div>Failed to load data. Please try again !</div>;
  }

  function generateEndpoint(keywordParams = "Iron Man", limit = 9) {
    const APIKEY = process.env.REACT_APP_KEY;
    const keyword = new URLSearchParams(keywordParams);
    const ENDPOINT = `${process.env.REACT_APP_BASE_URL}/search?api_key=${APIKEY}&q=${keyword}&limit=${limit}&rating=g&lang=en`;

    return ENDPOINT;
  }

  return (
    <div>
      <Navbar></Navbar>
      <main className="container container--padding-top">
        <div className="main-heading">
          <h1 className="main-heading__title text-center">Iron Man Giphy</h1>
        </div>
        <div className="content text-center">{content}</div>
      </main>
    </div>
  );
}
