import React from 'react'
import CourseCard from './CourseCard'

function FullStackDev({fullStacks}) {
  return (
    <div>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {fullStacks.map((course) => {
            <CourseCard course={course} key={course.id}/>
        })}
       
           
      </div>
      </div>
    </div>
  )
}

export default FullStackDev
