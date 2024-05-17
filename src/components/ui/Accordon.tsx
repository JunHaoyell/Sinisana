import React, { useState } from "react";
import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { MinusIcon } from "lucide-react";

interface Props {
  data: {
    title: string;
    description: string;
  }[];
}

export function Accordion({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <BaseAccordion type="single" collapsible className="w-full mt-10">
      {data.map((item, i) => {
        return (
          <AccordionItem key={`item-${i}`} className="" value={`item-${i}`}>
            <AccordionTrigger className="" onClick={() => handleClick(i)}>
              <span className="flex items-center">
                {openIndex === i ? (
                  <img
                    className="h-4 w-4 mr-2 shrink-0 transition-transform duration-200"
                    src="/minusIcon.svg"
                  />
                ) : (
                  <img
                    className="h-4 w-4 mr-2 shrink-0 transition-transform duration-200"
                    src="/plusIcon.svg"
                  />
                )}
                {item.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="ml-7">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}
