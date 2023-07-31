import { forwardRef } from "react";
import Page from "./PageLayout";

const Contact = forwardRef((props, ref) => {
  return (
    <Page ref={ref} title="Contact" setActivePage={props.setActivePage}>
      <div className="font-iAMono h-screen px-4 py-2 sm:px-24 sm:py-12"></div>
    </Page>
  );
});

export default Contact;
