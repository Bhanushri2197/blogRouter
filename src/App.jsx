import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CourseList from './CourseList'
import NavBar from './NavBar'
import FullStackDev from './FullStackDev'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'

function App() {

  const fullStacks = [
    {
      id : 1,
      courseTitle : 'Java Full Stack Development Course MERN Full Stack Development',
      img : "https://static.guvi.in/blog/zenThumbnail/java-fsd.webp"
    },
    {
      id : 2,
      courseTitle : ' MERN Full Stack Development',
      img : "https://static.guvi.in/blog/zenThumbnail/mern-fsd.webp"
    },
    {
      id : 3,
      courseTitle : ' Python Full Stack Development',
      img : "https://static.guvi.in/blog/zenThumbnail/mern-fsd.webp"
    }
  ]

  const dataScience = [
    {
      id : 4,
      courseTitle : 'Data Science Course',
      img : "https://static.guvi.in/blog/zenThumbnail/data-science.webp"
    },
    {
      id : 5,
      courseTitle : ' Data Engineering Course with Bigdata and Hadoop',
      img : "https://static.guvi.in/blog/zenThumbnail/mern-fsd.webp"
    },
    {
      id :6,
      courseTitle :'Advanced Cloud Computing with Microsoft Azure course',
      img : 'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science.png'
    }
  ]
  const cyberSecurity = [
    {
      id : 7,
      courseTitle : 'Cybersecurity Vs Ethical Hacking: Beginner',
      img : "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-600x314.png"
    },
    {
      id : 8,
      courseTitle : ' Cybersecurity Vs Ethical Hacking: Intermediate',
      img : "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif"
    },
    {
      id : 9,
      courseTitle : ' Cybersecurity Vs Ethical Hacking: Advanced',
      img : "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp"
    }
  ]
  const career= [
    {
      id : 10,
      courseTitle : 'Automation testing Course with Java',
      img : "https://static.guvi.in/blog/zenThumbnail/java-at.webp"
    },
    {
      id : 11,
      courseTitle : ' UI/UX Design course',
      img : "https://static.guvi.in/blog/zenThumbnail/ui-ux.webp"
    }
  ]

  return (
    <>
        <BrowserRouter>
          <NavBar/>
          <Routes>
               <Route index path='/' element={<CourseList
                 fullStacks = {fullStacks}
                 dataScience = {dataScience}
                 cyberSecurity = {cyberSecurity}
                 career = {career}
                 />} />
               <Route path='/full-stack-development' element={<FullStackDev fullStacks = {fullStacks}/>} />
               <Route path='/data-science' element={<DataScience dataScience={dataScience}/>}/>
               <Route path='/cyber-security' element={<CyberSecurity cyberSecurity={cyberSecurity}/>} />
               <Route path='/career' element={<Career career={career}/>} />
          </Routes>
        </BrowserRouter>
  
    </>
  )
}

export default App
