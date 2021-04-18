import { useCrawlContext } from "../../CrawlContext";
import { TermInfo } from "../TermInfo";
import { Container } from "./styles";

export function TermList() {
  const { terms } = useCrawlContext();

  return (
    <>
      <Container>
        {terms.map((term: any) => (
          <TermInfo term={term} />
        ))}
      </Container>
    </>
  );
}
