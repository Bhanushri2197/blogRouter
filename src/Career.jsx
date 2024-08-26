import React from 'react'
import CourseCard from './CourseCard'

function Career({career}) {
  return (
    <div>
       <div className="container">
      <div className="row justify-content-center">
    
         {career.map((course) => (
            <CourseCard course={course} key={course.id}/>
        ))}
           
      </div>
      </div>
    </div>
  )
}

export default Career
