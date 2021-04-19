import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
} from "react";
const CACHED_KEY = "crawl-context-state";
export const CrawlContext = createContext({} as ICrawlContext);

interface ICrawlContextProvider {
  children: ReactNode;
}

const initialState = {
  terms: [],
};

type CrawlAction =
  | {
      type: "addTerm";
      term: object;
    }
  | {
      type: "updateTermUrls";
      termId: string;
      urls: string[];
    }
  | {
      type: "updateWholeState";
      cachedState: object;
    };

function crawlReducer(state: any, action: CrawlAction) {
  switch (action.type) {
    case "addTerm": {
      return {
        ...state,
        terms: [...state.terms, action.term],
      };
    }
    case "updateWholeState": {
      return {
        ...action.cachedState,
      };
    }
    default: {
      return { ...state };
    }
  }
}

const CrawlContextProvider: FunctionComponent<ICrawlContextProvider> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(crawlReducer, initialState);
  const { terms } = state;

  useEffect(() => {
    const chachedState = localStorage.getItem(CACHED_KEY);
    if (chachedState) {
      dispatch({
        type: "updateWholeState",
        cachedState: JSON.parse(chachedState),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CACHED_KEY, JSON.stringify(state));
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
  terms: any;
  dispatch: React.Dispatch<CrawlAction>;
}
