import React from 'react'
import CourseCard from './CourseCard'

function CyberSecurity({cyberSecurity}) {
  return (
    <div>
      <div className="container">
      <div className="row justify-content-center">
    
         {cyberSecurity.map((course) => (
            <CourseCard course={course} key={course.id}/>
        ))}
           
      </div>
      </div>
    </div>
  )
}

export default CyberSecurity
