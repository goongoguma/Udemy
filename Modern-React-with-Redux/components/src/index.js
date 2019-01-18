import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:00PM"
        commentText="Thank you!"
        source={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 9:00PM"
        commentText="I like the post"
        source={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 1:00PM"
        commentText="It helps me, thanks :)"
        source={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
