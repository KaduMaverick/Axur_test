import { Term } from "../../shared/interfaces/crawler.interface"

export const crawlInitialState = {
  terms: [],
};

export type CrawlerState =  {
  terms: Term[]
}

export type CrawlAction =
  | {
      type: "addTerm";
      term: Term;
    }
  | {
      type: "updateTermUrls";
      termId: string;
      urls: string[];
    }
  | {
      type: "updateWholeState";
      cachedState: CrawlerState;
  };

  
export function crawlReducer(state: CrawlerState, action: CrawlAction):CrawlerState {
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