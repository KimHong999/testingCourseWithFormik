
import { useState } from 'react';
import './App.css';
import { Category } from './Components/Categories/Category';
import { TableCategory } from './Components/Categories/TableCategory';
import {uuidv4} from './utils/index'
import { MainCategory } from './Components/Categories/MainCategory';
import { MainCourse } from './Components/Course/MainCourse';

function App() {

  const [categories, setCategories] = useState([
    {
      id: "12835ce6-163e-402b-b500-5651fd4d8091",
      name: "Mobile App",
      code: "111",
    },
    {
      id: "12835ce6-163e-402b-b500-5651fd4d8092",
      name: "Web Developing",
      code: "211",
    },
    {
      id: "12835ce6-163e-402b-b500-5651fd4d8093",
      name: "BackEnd",
      code: "311",
    },
  ]);

  const [courses, setCourses] = useState([
    {
      id: 10,
      name: "The Baddy Course",
      category_id: "12835ce6-163e-402b-b500-5651fd4d8093",
      summary: "This is the best course",
      chapters: [
        {
          id: 1,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
        {
          id: 2,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
        {
          id: 3,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "The Awesome Course",
      category_id: "12835ce6-163e-402b-b500-5651fd4d8092",
      summary: "An amazing course for learners",
      chapters: [
        {
          id: 2,
          name: "The Exciting Chapter",
          summary: "Get ready for an exciting journey",
          lessons: [
            {
              id: 2,
              name: "The Exciting Lesson",
              summary: "Discover new concepts and ideas",
            },
            {
              id: 3,
              name: "The Exciting Lesson",
              summary: "Discover new concepts and ideas",
            },
          ],
        },
        {
          id: 1,
          name: "The Chapter Course",
          summary: "This Chapter is so cool",
          lessons: [
            {
              id: 1,
              name: "The Lesson Course",
              summary: "This Lesson is so cool",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      name: "The Coding Course",
      category_id: "12835ce6-163e-402b-b500-5651fd4d8092",
      summary: "Unlock the world of coding",
      chapters: [
        {
          id: 3,
          name: "The Programming Chapter",
          summary: "Master the art of programming",
          lessons: [
            {
              id: 3,
              name: "The Coding Lesson",
              summary: "Hands-on coding experience",
            },
            {
              id: 4,
              name: "The Coding Lesson",
              summary: "Hands-on coding experience",
            },
          ],
        },
      ],
    },
    // ... add more courses as needed
  ]);

  const [isEditCategory, setEditCategory] = useState(false)

  const [form, setForm] = useState({
    id:"",
    name:"",
    code:""
  });

  const saveCategory = (param) =>{
    const newCategory ={
      ...param,
      id : uuidv4()
    }
    setCategories(categories.concat(newCategory))
  }

  const deleteCategory = (id) =>{
    setCategories(categories.filter(cate => cate.id !== id))
    setCourses(courses.filter((cours)=>cours.category_id !== id))
  }

  const editCategory = (params) => {
    // setEditCategory((pre) => !pre);
    setEditCategory(params?.cate?.id);
    if (isEditCategory === params?.cate?.id) {
      console.log("form is editing");
      setForm({
        id: "",
        name: "",
        code: "",
      });
      setEditCategory(false)    
    }
    setForm({ ...params.cate});
    return;
  };



  // const onEditCategory = (params) => {
  //   setEditCategory(params?.category?.id);
  //   if (isEditCategory === params?.category?.id) {
  //     setForm({
  //       id: "",
  //       name: "",
  //       code: "",
  //     });
  //     setEditCategory(false);
  //     return;
  //   }

  //   setForm({ ...params.category });
  // };


 
  // console.log("saveCategory", categories)
 

  return (
    <div className="App">
      <MainCategory categories={categories} onSave={saveCategory} onDelete={deleteCategory} isEdit={isEditCategory} form={form} onEdit={editCategory} />

      <div className='mt-6'>
      <MainCourse categories={categories} data={courses} setData={setCourses} />
      </div>
    </div>
  );
}

export default App;
