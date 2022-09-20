import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-10 footer bg-primary text-accent footer-center">
        <div>
          <p>Let's write today's diary.</p>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Footer);
