import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import {
  CRAWLER_CACHED_KEY,
  UPDATE_WHOLE_STATE,
} from "../../constants/crawler";
import { Term } from "../../shared/interfaces/crawler.interface";
import { CrawlAction, crawlInitialState, crawlReducer } from "./crawlerReducer";

export const CrawlerContext = createContext({} as ICrawlerContext);

interface ICrawlerContextProvider {
  children: ReactNode;
}

const CrawlerContextProvider: FunctionComponent<ICrawlerContextProvider> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(crawlReducer, crawlInitialState);
  const { terms } = state;

  useEffect(() => {
    const chachedState = localStorage.getItem(CRAWLER_CACHED_KEY);
    if (chachedState) {
      dispatch({
        type: UPDATE_WHOLE_STATE,
        cachedState: JSON.parse(chachedState),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CRAWLER_CACHED_KEY, JSON.stringify(state));
  });

  const ctx: ICrawlerContext = useMemo(
    () => ({
      terms,
      dispatch,
    }),
    [terms, dispatch]
  );

  return (
    <CrawlerContext.Provider value={ctx}>{children}</CrawlerContext.Provider>
  );
};

const useCrawlerContext = (): ICrawlerContext => {
  const context = React.useContext(CrawlerContext);
  if (context === undefined) {
    throw new Error(
      "useCrawlerContext must be used within a CrawlerContextProvider"
    );
  }
  return context;
};

export { CrawlerContextProvider, useCrawlerContext };

export interface ICrawlerContext {
  terms: Term[];
  dispatch: React.Dispatch<CrawlAction>;
}
