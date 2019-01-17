import small from "../assets/small.jpg";
import "../styles/image_viewer.css";

const funcImg = () => {
  const image = document.createElement("img");
  image.src = small;
  document.body.appendChild(image);
};

export { funcImg };
