import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {
    let courses = props.courses;
    let category = props.category;

    const [likedCourse, setLikedCoures] = useState("");
    
    function getCourses() {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
            array.forEach(element => {
                allCourses.push(element);
                } )
            })
            return allCourses;
        }

        else{
            return courses[category];
        }
        
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 mt-14'>
        {
            getCourses().map( (element) => (
                <Card key={element.id} 
                likedCourse={likedCourse} 
                setLikedCoures={setLikedCoures} 
                element={element}></Card>
            ))
        }
    </div>
  )
}

export default Cards
