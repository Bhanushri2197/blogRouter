import React from 'react'
import CourseCard from './CourseCard'

function DataScience({dataScience}) {
  return (
    <div>
      <div className="container">
      <div className="row justify-content-center">
    
         {dataScience.map((course) => (
            <CourseCard course={course} key={course.id}/>
        ))}
           
      </div>
      </div>
    </div>
  )
}

export default DataScience
