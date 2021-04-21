import { render } from "@testing-library/react";
import { TermInfo } from "./TermInfo";

describe("TermInfo Render correctly", () => {
  it("Should have urls empty list", () => {
    const termMock = {
      id: "GCXdhsjr",
      keyword: "security",
    };

    const { queryByTestId } = render(<TermInfo term={termMock} />);

    expect(queryByTestId("urls-empty")).toBeTruthy();
    expect(queryByTestId("urls-list")).not.toBeTruthy();
  });

  it("should have urls list rendered", () => {
    const termMock = {
      id: "GCXdhsjr",
      keyword: "security",
      urls: [
        "http://hiring.axreng.com/index2.html",
        "http://hiring.axreng.com/htmlman1/chcon.1.html",
        "http://hiring.axreng.com/htmlman1/cp.1.html",
        "http://hiring.axreng.com/htmlman1/dir.1.html",
        "http://hiring.axreng.com/htmlman1/id.1.html",
      ],
    };

    const { queryByTestId, queryAllByTestId } = render(
      <TermInfo term={termMock} />
    );

    expect(queryByTestId("urls-empty")).not.toBeTruthy();
    expect(queryByTestId("urls-list")).toBeTruthy();
    expect(queryAllByTestId("url").length).toBe(termMock.urls.length);
  });
});
