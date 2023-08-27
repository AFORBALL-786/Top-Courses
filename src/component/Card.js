import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

function Card(props) {
    let course = props.element;
    let likedCourse = props.likedCourse;
    let setLikedCoures = props.setLikedCoures;

    function clickHandler(){
        if(likedCourse.length === 0){
            setLikedCoures([course.id]);
            toast.success("Liked Sucessfully");
        }

        else{
            if(likedCourse.includes(course.id)){
                setLikedCoures((prev) => prev.filter( (cid) => (cid !== course.id ) ))
                toast.warning("Liked Removed");
            }

            else{
                setLikedCoures((prev) => [...prev,course.id]);
                toast.success("Liked Sucessfully");
            }
        }
    }

  return (
    <div className='w-[300px] bg-[#22223B] text-white rounded-md overflow-hidden'>

        <div className=' relative'>
            <img src={course.image.url}/>
            <div className=' w-[40px] h-[40px] bg-white rounded-full flex justify-center absolute right-2 -translate-y-5'>
                <button onClick={clickHandler}>
                    {
                        likedCourse.includes(course.id) ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                    }
                </button>
            </div>
        </div>

        <div className='p-4 mt-4'>
            <p className='font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2'>
                {
                    course.description.length > 100 ? `${course.description.substring(0,100)}...` : course.description
                }
                </p>
        </div>

    </div>
  )
}

export default Card
