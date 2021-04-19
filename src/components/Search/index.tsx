import { FormEvent, useState } from "react";
import { useCrawlerContext } from "../../context/crawlerContext/CrawlerContext";
import { postCrawlTerm } from "../../services/crawlerService";
import { Term } from "../../shared/interfaces/crawler.interface";
import { SearchContainer, SearchInput } from "./styles";

export const Search = () => {
  const [value, setValue] = useState("");
  const { terms, dispatch } = useCrawlerContext();

  const hasAlreadyBeenSearched = (): boolean =>
    terms.map((term: Term) => term.keyword).includes(value.trim());

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim() === "") return;

    if (hasAlreadyBeenSearched()) {
      console.warn(`The term ${value.trim()} has already been crawled`);
      return;
    }

    postCrawlTerm(value.trim()).then((crawlResponse) =>
      dispatch({ type: "addTerm", term: { ...crawlResponse, keyword: value } })
    );
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} role="search">
        <SearchInput
          data-testid="search-button"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </SearchContainer>
  );
};
