import React from "react";

/*
 * This story (documentation) shows how to use the Section component and its
 * helping sub-components for the texts. The subcomponents are imported
 * as one object and are renamed to "t", this is shorter. Look below how
 * to wrap texts with them.
 */
import Section, { SectionHeader, SectionText } from "./";

export default {
  title: "Section",
  component: Section,
  parameters: {
    docs: {
      description: {
        /* Optional description of component can be added here */
        component: ` Section component provides a container with paddings.`,
      },
    },
  },
};

export const Default = () => (
  <Section>
    <SectionHeader>Test</SectionHeader>
    <SectionText>Text inside the section (with typography).</SectionText>
    <p>Text inside the section (without typography).</p>
  </Section>
);
