import React from "react";
import NewComment from "./NewComment";
import Comments from "./Comments";
import Comment from "./Comment";
import { shallow } from "enzyme";

describe("<Comments />", () => {
  it("shold handle changes in textarea", () => {
    const wrapper = shallow(<NewComment />);
    const event = {
      target: {
        value: "teste"
      }
    };
    wrapper.find("textarea").simulate("change", event);

    expect(wrapper.state().newComment).toBe("teste");
  });

  it("should call sendComment on button click", () => {
    const sendComment = jest.fn();
    const wrapper = shallow(<NewComment sendComment={sendComment} />);
    const event = {
      target: {
        value: "teste"
      }
    };
    wrapper.find("textarea").simulate("change", event);
    wrapper.find("button").simulate("click");

    expect(sendComment).toBeCalledWith("teste");
    expect(wrapper.state().newComment).toBe("");
  });
});
