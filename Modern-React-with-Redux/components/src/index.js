import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>You sure you want to do this?</div>
      </ApprovalCard>
      <ApprovalCard>
        {/* passing CommentDetail component as props to ApprovalCard component */}
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:00PM"
          commentText="Thank you!"
          source={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 9:00PM"
          commentText="I like the post"
          source={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 1:00PM"
          commentText="It helps me, thanks :)"
          source={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
