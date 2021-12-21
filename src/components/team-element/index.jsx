import React, { Component } from "react";
import Select from "react-select";
export class TeamElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team_name: this.props.dugaar + "-р баг",
      selected: [],
      data: [],
    };
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  handleChange = (selected) => {
    this.setState({ selected: selected });
    let data = { id: this.props.dugaar, selected: selected };
    this.props.onSelected(data);
  };

  render() {
    let options = [];
    this.props.data.map((el) =>
      options.push({ value: el.id, label: el.first_name + " " + el.email })
    );
    return (
      <div>
        <h4 className="border-bottom my-5 pb-1">{this.state.team_name}</h4>
        <Select
          isMulti
          onChange={this.handleChange}
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    );
  }
}

export default TeamElement;
