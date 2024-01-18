import React, { useState } from "react";
import { TableCourse } from "./TableCourse";
import { Courses } from "./Courses";
import { uuidv4 } from "../../utils";

export const MainCourse = ({categories, data, setData}) =>{

    const [editCourseForm, setEditCourseForm] = useState({})
    const [isCourseEdit,setCourseEdit] = useState(false)
   

    const saveCourse = (param) => {
       const newCourse ={
            ...param,
            id:uuidv4()
       }
       setData(data.concat(newCourse))
       console.log("save course",param)
    }



    const deleteCourse = (id) =>{
        setData(data.filter((course)=>course.id !== id ))
    }

    // const editCourse = (param) => {
    //     console.log("param",param)
    //     setData(data.find((course)=>course.id === param.id ? {...course, ...param} : course))
    // }

    const editCourse = (id) => {

        console.log(isCourseEdit)
        setCourseEdit(pre => !pre)
        if (isCourseEdit === false) 
        
        {
      
          const result = data?.find((course) => course.id === id);
          setEditCourseForm(result);
       
     
          return;
        }
        // setCourseEdit(false)
        setEditCourseForm({});
      };


    return(
        <div>
            <TableCourse data={data} onDelete={deleteCourse} onEdit={editCourse} categories={categories} />
            <Courses categories={categories} onSave={saveCourse} value={editCourseForm} />
        </div>
    )
}