import React from "react";
import styled from "styled-components";

import CourseClass from "./CourseClass";

function Course({ course }) {
  return (
    <div>
      <CourseTitle>
        {course.name}
        <span>
          ({course.credit} SKS, Term {course.term})
        </span>
      </CourseTitle>
      <CourseContainer>
        <Header>
          <div>Pilih</div>
          <div>Nama Kelas</div>
          <div>Waktu</div>
          <div>Ruang</div>
          <div>Pengajar</div>
        </Header>
        {course.classes.map(currentClass => (
          <CourseClass
            key={currentClass.name}
            course={course}
            courseClass={currentClass}
          />
        ))}
      </CourseContainer>
    </div>
  );
}

const CourseContainer = styled.div`
  border: 2px solid #308077;
  margin-bottom: 32px;
`;

const Header = styled.div`
  background-color: #308077;
  font-family: Proxima Nova;
  font-weight: 400;
  color: white;
  display: flex;

  div {
    font-size: 16px;
    padding: 12px;
  }

  &:nth-child(1) {
    flex: 1;
  }
  &:nth-child(2) {
    flex: 3;
  }
  &:nth-child(3) {
    flex: 3;
  }
  &:nth-child(4) {
    flex: 1;
  }
  &:nth-child(5) {
    flex: 4;
  }
`;

const CourseTitle = styled.h2`
  font-size: 1.5rem;
  color: #ce9d4d;
  font-weight: bold;

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #222;
    font-weight: 400;
  }
`;

export default Course;
