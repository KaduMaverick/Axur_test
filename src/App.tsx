import { PageHeader } from "./components/Header";
import { Search } from "./components/Search";
import { TermList } from "./components/TermList";
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
