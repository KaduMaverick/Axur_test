import React, { FC, ReactNode, useState } from "react";
import {
  AccordionButton,
  AccordionContainer,
  AccordionContent,
  AccordionWrapper,
} from "./Accordion.styles";

interface IAccordion {
  children: ReactNode;
}

export const Accordion: FC<IAccordion> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <AccordionWrapper>
      <AccordionButton onClick={() => setOpen(!open)}>
        {open ? "Esconder" : "Ver mais"}
      </AccordionButton>
      <AccordionContainer open={open}>
        <AccordionContent>{children}</AccordionContent>
      </AccordionContainer>
    </AccordionWrapper>
  );
};
