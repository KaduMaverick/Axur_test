import { PageHeader } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { TermList } from "./components/TermList/TermList";
import { CrawlerContextProvider } from "./context/crawlerContext/CrawlerContext";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <CrawlerContextProvider>
        <PageHeader />
        <Search />
        <TermList />
      </CrawlerContextProvider>
    </>
  );
}

export default App;
