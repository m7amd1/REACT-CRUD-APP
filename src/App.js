import React, { Component } from "react";
import AddCourse from "./Component/AddCourses/AddCourse";
import CourseList from "./Component/CourseList/CourseList";
class App extends Component {
  state = {
    courses: [
      { name: "html" },
      { name: "css" },
      { name: "js" },
      { name: "react" },
    ],
    current: ''
  };

  // update Course

  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }
  // add Course

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current === null || current === '') {
      return (
        <p>enter a valid value</p>
      )
    } else {
      courses.push({name: current})
      this.setState({
        courses,
        current: ''
      })
    }
  }

  // delete course 
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }


  // edit course 
  updateCourses = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }
  
  render() {
    const { courses } = this.state;
    let length = courses.length;
    const coursesList = length ? (
      courses.map((course, index) => {
        return <CourseList updateCourses={this.updateCourses} deleteCourse={this.deleteCourse} index={index} details={course} key={index} />;
      })
    ): (
      <p>No Courses to Show!</p>
    )
    return (
      <section className="app">
        <h2 className="title">Add Courses</h2>
        <AddCourse current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        <ul className="ul">{coursesList}</ul>
      </section>
    );
  }
}

export default App;
