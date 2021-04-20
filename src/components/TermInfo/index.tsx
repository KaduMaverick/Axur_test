import React, { useEffect, useState } from "react";
import useSWR from "swr";
// import { useCrawlerContext } from '../../CrawlContext'
import { getCrawlTerm } from "../../services/crawlerService";
import { Term } from "../../shared/interfaces/crawler.interface";
import { Accordion } from "../Accordion";
import {
  TermInfoCard,
  TermInfoCardHeading,
  TermInfoLink,
  TermInfoMessage,
  TermInfoStatus,
} from "./styles";

interface ITermInfo {
  term: Term;
}

export const TermInfo: React.FC<ITermInfo> = ({ term }) => {
  const [urls, setUrls] = useState(term.urls);
  const [pollingInterval, setPollingInterval] = useState(3000);

  const { data } = useSWR(term.id, getCrawlTerm, {
    revalidateOnFocus: false,
    refreshInterval: pollingInterval,
  });

  useEffect(() => {
    if (data?.urls) {
      setUrls(data.urls);
    }

    if (data?.status === "done") {
      setPollingInterval(0);
    }
  }, [data]);

  return (
    <TermInfoCard>
      <TermInfoCardHeading>Termo: {term.keyword}</TermInfoCardHeading>
      <TermInfoStatus>
        {data?.status === "active" ? "Em progresso" : "Concluido"}
      </TermInfoStatus>
      {urls && urls.length ? (
        <Accordion>
          <div data-testid="urls-list">
            {urls.map((url: any, idx: number) => {
              return (
                <>
                  <TermInfoLink
                    href={url}
                    target="_blank"
                    key={idx}
                    data-testid={"url"}
                  >
                    {url}
                  </TermInfoLink>
                  <br />
                </>
              );
            })}
          </div>
        </Accordion>
      ) : (
        <div data-testid="urls-empty">
          <TermInfoMessage>Sem Resultados</TermInfoMessage>
        </div>
      )}
    </TermInfoCard>
  );
};
