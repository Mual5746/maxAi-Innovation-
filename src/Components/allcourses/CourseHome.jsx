import Back from "../Common/Back/Back"
import Navbar from '../Navbar/Navbar'
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Title from "../Title/Title"

const CourseHome = () => {
  return (
    <>
      <Navbar/>
      <Back title='Explore Courses' />
      <Title subTitle='Kurser som vi erbjuder' />

      <CoursesCard />
      <Title subTitle='Kurser inom olika området ' />

      <OnlineCourses />
    </>
  )
}

export default CourseHome
