import { forwardRef } from "react";
import Page from "./PageLayout";

const About = forwardRef((props, ref) => {
  return (
    <Page ref={ref} title="About" setActivePage={props.setActivePage}>
      <div className="bg-cod-gray-950 font-iAMono h-screen px-4 py-2 sm:px-24 sm:py-12"></div>
    </Page>
  );
});

export default About;
