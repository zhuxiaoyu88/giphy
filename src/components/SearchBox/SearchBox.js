import { useEffect, useState } from "react";
import useDebounce from "../../assets/utils";
import "./SearchBox.css";

export default function SearchBox(props) {
  const [searchResult, setSearchResult] = useState("");

  const debouncedSearch = useDebounce(searchResult, 1000);

  useEffect(() => {
    props.textResult(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-box__input"
        placeholder="Search Giphy"
        onChange={(e) => setSearchResult(e.target.value)}
      ></input>
    </div>
  );
}
