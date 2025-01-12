import React from "react";
import "../components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>Copyright &#169; 2025 Krish Piryani. All rights reserved.</div>
      <br />
      <div>
        Coded in <a className="vscode-link" href="#your-vscode-link">VS Code</a> with <a className="react-link" href="#your-react-link">React.js</a> and deployed with <a className="github-link" href="#your-github-link">Github</a>.
      </div>
    </footer>
  );
};

export default Footer;
