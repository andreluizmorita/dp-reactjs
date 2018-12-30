import React, { Component } from "react";
import Comment from "./Comment";

class Comments extends Component {
  render() {
    const keys = Object.keys(this.props.comments);

    return (
      <div>
        {/*  COMMENTS */}
        <div>
          {keys.map(key => (
            <Comment key={key} c={this.props.comments[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Comments;
