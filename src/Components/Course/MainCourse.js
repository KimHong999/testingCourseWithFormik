import React, { useState } from "react";
import { TableCourse } from "./TableCourse";
import { Courses } from "./Courses";
import { uuidv4 } from "../../utils";

export const MainCourse = ({categories, data, setData}) =>{

    const [editCourseForm, setEditCourseForm] = useState({})
    const [isEditCourse, setEditCourse] = useState(false)

    const saveCourse = (param) => {
       const newCourse ={
            ...param,
            id:uuidv4()
       }
       setData(data.concat(newCourse))
       console.log("save course",param)
    }

    

    const deleteCourse = (id) =>{
        setData(data.map((course)=>course.id !== id ))
    }

    const onEditingCourse = (id) => {

        console.log(isCourseEdit)
        setCourseEdit(pre=>!pre)
        if (isCourseEdit === false) 
        
        {
      
          const result = data?.find((course) => course.id === id);
          setEditForm(result);
       
     
          return;
        }
        // setCourseEdit(false)
        setEditForm({});
      };


    return(
        <div>
            <TableCourse data={data} onEdit={onEditingCourse} categories={categories} />
            <Courses categories={categories} onSave={saveCourse} value={editCourseForm} />
        </div>
    )
}