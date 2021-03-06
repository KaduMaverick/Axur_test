import { useCrawlerContext } from "../../context/crawlerContext/CrawlerContext";
import { TermInfo } from "../TermInfo/TermInfo";
import { Container, TermInfoContent, TermInfoHeading } from "./TermList.styles";

export function TermList() {
  const { terms } = useCrawlerContext();

  return (
    <>
      <Container>
        <TermInfoHeading>Lista de Termos:</TermInfoHeading>
        <TermInfoContent>
          {terms
            .slice(0)
            .reverse()
            .map((term) => (
              <TermInfo term={term} key={term.id} />
            ))}
        </TermInfoContent>
      </Container>
    </>
  );
}
