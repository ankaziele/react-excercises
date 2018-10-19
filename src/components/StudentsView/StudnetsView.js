import React, { Component } from "react";

import { Link } from "react-router-dom";

class StudentsView extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    fetch('/data/students.json')
      .then(response => response.json()
      ).then(arrayOfStudents => this.setState({ students: arrayOfStudents }));
  }

  render() {
    return (
      <div>
        <h1>Students View</h1>
        <p>{this.props.title}</p>
        <ul>
          {this.state.students.map(student => (
            <p key={student.id}>
              <Link to={'/students/' + student.id}>{student.name} {student.surname} </Link>
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentsView;
