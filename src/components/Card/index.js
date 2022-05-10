import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="tc bg-green dib br3 grow ma2 bw2 shadow-5 pa3">
        <img
          alt="robot"
          src={`https://robohash.org/${this.props.id}?200x200`}
        ></img>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
