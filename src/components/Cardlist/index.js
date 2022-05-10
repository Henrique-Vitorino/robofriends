import React from "react";
import Card from "../Card";
import Scroll from "../Scroll";

class Cardlist extends React.Component {
  render() {
    return (
      <Scroll>
        <div className="flex flex-wrap">
          {this.props.cards
            .filter((robot) =>
              robot.name.toLowerCase().includes(this.props.filter.toLowerCase())
            )
            .map((robot) => (
              <Card
                name={robot.name}
                email={robot.email}
                id={robot.name}
                key={robot._id}
              ></Card>
            ))}
        </div>
      </Scroll>
    );
  }
}

export default Cardlist;
