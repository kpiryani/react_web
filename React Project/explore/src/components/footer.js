import React from "react";
import "../components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>Copyright &#169; 2025 Krish Piryani. All rights reserved.</div>
      <br />
      <div>
        Developed in <a className="vscode-link" href="https://code.visualstudio.com/">VS Code</a> with <a className="react-link" href="https://react.dev/">React.js</a> and deployed with <a className="github-link" href="https://vercel.com/">Vercel</a>.
      </div>
    </footer>
  );
};

export default Footer;
