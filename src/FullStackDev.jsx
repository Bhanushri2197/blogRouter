import React from 'react'
import CourseCard from './CourseCard'

function FullStackDev({fullStacks}) {
  return (
    <div>
      <div className="container">
      <div className="row justify-content-center">
        {fullStacks.map((course) => (
            <CourseCard course={course} key={course.id}/>
        ))}
       
           
      </div>
      </div>
    </div>
  )
}

export default FullStackDev
