import { useCrawlContext } from "../../context/crawlerContext/CrawlContext";
import { TermInfo } from "../TermInfo";
import { Container } from "./styles";

export function TermList() {
  const { terms } = useCrawlContext();

  return (
    <>
      <Container>
        {terms.map((term) => (
          <TermInfo term={term} />
        ))}
      </Container>
    </>
  );
}
