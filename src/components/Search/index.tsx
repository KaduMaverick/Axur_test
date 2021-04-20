import { FormEvent, useEffect, useState } from "react";
import { useCrawlerContext } from "../../context/crawlerContext/CrawlerContext";
import { postCrawlTerm } from "../../services/crawlerService";
import { Term } from "../../shared/interfaces/crawler.interface";
import { SearchContainer, SearchInput, SearchInputMessage } from "./styles";

export const Search = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState<null | string>(null);
  const { terms, dispatch } = useCrawlerContext();

  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 6000);
  }, [message]);

  const hasAlreadyBeenSearched = (): boolean =>
    terms.map((term: Term) => term.keyword).includes(value.trim());

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim() === "") return;

    console.log(value.length);
    if (value.length < 4 || value.length > 32) {
      setMessage("O termo buscado precisa ter entre 4  a 32 caracteres");
      return;
    }

    if (hasAlreadyBeenSearched()) {
      setMessage(`O termo ${value.trim()} já foi buscado`);
      console.warn(`The term ${value.trim()} has already been crawled`);
      return;
    }

    postCrawlTerm(value.trim()).then((crawlResponse) => {
      dispatch({
        type: "addTerm",
        term: { ...crawlResponse, keyword: value.trim() },
      });
      setValue("");
    });
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} role="search">
        <SearchInput
          data-testid="search-button"
          value={value}
          placeholder="Busque um termo"
          maxLength={32}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <SearchInputMessage>{message && message}</SearchInputMessage>
    </SearchContainer>
  );
};
