//using Typescript with class component

import React from "react";
interface myProps {
  message: string;
}
type myState = {
  count: number;
};
class ButtonUi extends React.Component<myProps, myState> {
  state: myState = {
    count: 0,
  };

  render(): React.ReactNode {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          You Said {this.props.message} {this.state.count} times
        </p>
        <br />
        <button
          className="bg-blue-600 px-5 py-2 rounded text-white ml-3 mt-2"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {this.props.message}
        </button>

        <button
          className="bg-blue-600 px-5 py-2 rounded text-white ml-3 mt-2"
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          {" Reset"}
        </button>
      </div>
    );
  }
}
export default ButtonUi;
