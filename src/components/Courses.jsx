import React from 'react';

// Course List Component (Receives Props)
const CourseList = (props) => {
  const { courses } = props;  // Destructuring props
  return (
    <ul>
      {courses.map((course, index) => (
        <li key={index}>{course}</li>  // Using 'key' for the mapped list
      ))}
    </ul>
  );
};

const Courses = () => {
  const courseList = [
    'Computer Science',
    'Information Technology',
    'Mechanical ',
    'Electrical'
  ];

  return (
    <div>
      <CourseList courses={courseList} /> {/* Passing courseList as props */}
    </div>
  );
};

export default Courses;
