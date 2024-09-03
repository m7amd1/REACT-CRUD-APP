import React, { Component } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateCourses(this.props.index, this.input.value);
    this.toggleState();
  }

  // Edit Course
  editCourse = () => {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" ref={v => this.input = v} autoFocus={true} defaultValue={this.props.details.name}/>
        <input type="submit" value="Update Course" />
      </form>
    );
  };
  // toggle state
  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  render() {
    return (
      <>
        {this.state.isEdit ? (
          this.editCourse()
        ) : (
          <li>
            <span>{this.props.details.name}</span>
            <div>
              <button
                onClick={() => {
                  this.toggleState();
                }}
              >
                Update Course
              </button>
              <button
                onClick={() => {
                  this.props.deleteCourse(this.props.index);
                }}
              >
                Delete Course
              </button>
            </div>
          </li>
        )}
      </>
    );
  }
}

export default CourseList;
