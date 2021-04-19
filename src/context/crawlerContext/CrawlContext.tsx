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

export const CrawlContext = createContext({} as ICrawlContext);

interface ICrawlContextProvider {
  children: ReactNode;
}

const CrawlContextProvider: FunctionComponent<ICrawlContextProvider> = ({
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

  const ctx: ICrawlContext = useMemo(
    () => ({
      terms,
      dispatch,
    }),
    [terms, dispatch]
  );

  return <CrawlContext.Provider value={ctx}>{children}</CrawlContext.Provider>;
};

const useCrawlContext = (): ICrawlContext => {
  const context = React.useContext(CrawlContext);
  if (context === undefined) {
    throw new Error(
      "useCrawlContext must be used within a CrawlContextProvider"
    );
  }
  return context;
};

export { CrawlContextProvider, useCrawlContext };

export interface ICrawlContext {
  terms: Term[];
  dispatch: React.Dispatch<CrawlAction>;
}
