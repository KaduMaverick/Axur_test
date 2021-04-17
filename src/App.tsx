import { PageHeader } from './components/Header';
import { Search } from './components/Search';
import { TermList } from './components/TermList';
import { CrawlContextProvider } from './CrawlContext';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <CrawlContextProvider>
        <PageHeader />
        <Search />
        <TermList />
      </CrawlContextProvider>
    </>
  );
}

export default App;
