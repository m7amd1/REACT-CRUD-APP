import React from "react";

const AddCourse = (props) => {
  return (
    <form className="form" onSubmit={props.addCourse}>
      <input type="text" autoFocus={true} value={props.current} onChange={props.updateCourse}/>
      <input type="submit" value="Add Course"/>
    </form>
  );
}

export default AddCourse;
