import React from 'react'

function CourseCard({course}) {
  return (
    <div className="col">
    <div className="card h-100">
      <img src={course.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{course.courseTitle}</h5>
        <button className="btn">Know More 	&#xf101;</button>
      </div>
    </div>
  </div>
  )
}

export default CourseCard
