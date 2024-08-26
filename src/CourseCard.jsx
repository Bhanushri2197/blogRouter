import React from 'react'

function CourseCard({course}) {
  return (
    <div className="card">
      <img src={course.img} className="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{course.courseTitle}</h5>
        <button className="btn cardBtn mt-3">Know More  &#10148;</button>
      </div>
    </div>

  )
}

export default CourseCard
