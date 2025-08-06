// import img_1 from '../../Data/assets/image_1.jpg';
// import img_2 from '../../Data/assets/image_2.jpg';
//  import img_3 from 'http:/localhost:3000/assets/image_3.jpg';
import Course from "./Course.jsx";
import {useState, useEffect} from "react";
import useFetch from "../useFetch.jsx";



function CourseList() {
    const [courses, setCourses, error, setError] = useFetch('http://localhost:3001/courses');
    // USE EFFECT -----------------(it is useful when working with API's to get the json data)



    // only for courses we can use as [courses, subjects] and
                    // if [] mean one time call(first time only)



    // handle delete in courseList and re-render--------------------------
    function handleDelete(id) {
        const newCourse=courses.filter((course)=>course.id !== id);
        setCourses(newCourse);
    }


    // sorting and filtering-----------------------------------------------
    //courses.sort((a,b) => b.price - a.price);
    //const vfmCourses=courses.filter((course)=>course.name !== '')



    // rendering courseList containers----------------------------------
    const coursesList = courses.map((course)=>(

        <Course key={course.id}
                course_id={course.id}
                name={course.name}
                price={course.price}
                rating={course.rating}
                image={course.image}
                deleteItem={handleDelete}/>)
    )

    if (courses.length===0) {
        return <>
            {(!error) && <p>Loading....</p>}
            {error && <p>{error}</p >}
        </>
    };

    return(
        <>
            {coursesList}
        </>
    );
}
export default CourseList;

// npx json-server --watch Data/dummyData.json --port 3000 --static ./Data