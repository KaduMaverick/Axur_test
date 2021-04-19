import { useCrawlerContext } from "../../context/crawlerContext/CrawlerContext";
import { TermInfo } from "../TermInfo";
import { Container } from "./styles";

export function TermList() {
  const { terms } = useCrawlerContext();

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
