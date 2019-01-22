import React from "react";

const ImageList = props => {
  return (
    <div>
      {props.images.map(({ description, id, urls }) => (
        <img key={id} src={urls.regular} alt={description} />
      ))}
    </div>
  );
};

export default ImageList;
