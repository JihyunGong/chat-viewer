import reactDom from "react-dom";

export default function Portal({ children }) {
  const modal = document.getElementById("modal");

  return reactDom.createPortal(children, modal);
}
