import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBox from "../components/SearchBox/SearchBox";
import CardList from "../components/CardList/CardList";

export default function SearchIronMan() {
  const [listGiphy, setListGiphy] = useState({
    loading: false,
    data: null,
    error: false
  });
  let content = "";
  const [dataRes, setDataRes] = useState();

  function setDataSearch(val) {
    setDataRes(val);
  }

  useEffect(
    (prevdata) => {
      setListGiphy({
        loading: true,
        data: null,
        error: false
      });

      fetch(generateEndpoint(dataRes))
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
    },
    [dataRes]
  );

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
    const APIKEY = process.env.APP_KEY;
    const keyword = new URLSearchParams(keywordParams);
    const ENDPOINT = `${process.env.BASE_URL}/search?api_key=${APIKEY}&q=${keyword}&limit=${limit}&rating=g&lang=en`;

    return ENDPOINT;
  }

  return (
    <div>
      <Navbar></Navbar>
      <main className="container container--padding-top">
        <h1 className="main-heading__title text-center">Search Giphy</h1>
        <SearchBox textResult={setDataSearch} />
        {dataRes ? (
          <p className="text-center">
            Search result of <i>"{dataRes}"</i>
          </p>
        ) : (
          ""
        )}
        <div className="content text-center">{content}</div>
      </main>
    </div>
  );
}
