import { useCrawlerContext } from "../../context/crawlerContext/CrawlerContext";
import { TermInfo } from "../TermInfo";
import { Container, TermInfoContent, TermInfoHeading } from "./styles";

export function TermList() {
  const { terms } = useCrawlerContext();

  return (
    <>
      <Container>
        <TermInfoHeading>Lista de Termos:</TermInfoHeading>
        <TermInfoContent>
          {terms.map((term) => (
            <TermInfo term={term} />
          ))}
        </TermInfoContent>
      </Container>
    </>
  );
}
