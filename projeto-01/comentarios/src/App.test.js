import React from "react";
import App from "./App";
import { shallow } from "enzyme";

import NewComment from "./NewComment";
import Comments from "./Comments";

describe("<App />", () => {
  it("renders without crashing", () => {
    const database = {
      ref: jest.fn()
    };
    database.ref.mockReturnValue({
      on: jest.fn()
    });
    const wrapper = shallow(<App database={database} />);
    expect(wrapper.find(Comments).length).toBe(1);
    expect(wrapper.find(NewComment).length).toBe(1);
    expect(wrapper.find("p").length).toBe(1);
  });

  it("adds new comment", () => {
    const database = {
      ref: jest.fn()
    };
    const child = jest.fn();
    const update = jest.fn();
    database.ref.mockReturnValue({
      on: jest.fn(),
      update,
      child
    });
    const push = jest.fn();
    child.mockReturnValue({
      push
    });
    push.mockReturnValue({
      key: "1"
    });
    const wrapper = shallow(<App database={database} />);
    wrapper.instance().sendComment("new Comment");
    expect(child).toBeCalledWith("comments");
    expect(update).toBeCalledWith({
      "comments/1": {
        comment: "new Comment"
      }
    });
  });
});
