import { FieldArray, Form, Formik } from "formik";
import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomSelect } from "../CustomSelect";
import CreatetableSelect from "react-select/creatable";
import { CustomTextArea } from "../CustomTextArea";
import { Chapter } from "./Chapter";
import { uuidv4 } from "../../utils";
import { CustomButton } from "../CustomButton";
import { courseSchema } from "../../Schemas/input";

export const Courses = ({ categories, onSave, value }) => {
  // console.log("categories:",categories)
  console.log("value",value)

  const initialValues = {
    name: "",
    category_id: "",
    summary: "",
    chapters: [
      {
        id: uuidv4(),
        name: "",
        summary: "",
        lessons: [
          {
            id: uuidv4(),
            name: "",
            content: "",
          },
        ],
      },
    ],
  };

  const onSubmit = (values, actions) => {
    if (values.id) {
      onSave(values, true);
      return;
    }
    onSave(values, false);
    actions.resetForm();
    console.log("values", values);
    console.lod("actioins", actions)
  };

  return (
    <div>
      <Formik
      enableReinitialize={true}
        initialValues={value.id ? value : initialValues}
        // validationSchema={courseSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
            console.log("props...",props.values)
          return (
            <div class="mt-6 block w-7/12 rounded-lg bg-gray-50 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <Form className="shadow-md rounded px-6 pt-6 pb-6 ">
                <div className="text-xl">Add Course</div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="relative mb-6 mt-6" data-te-input-wrapper-init>
                    <CustomInput
                      label="name"
                      type="text"
                      placeholder="name"
                      name="name"
                      onChange={props.handleChange}
                      value={props?.values?.name}
                    />
                  </div>
                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <CustomSelect
                      label="Categories:"
                      placeholder="Please selected"
                      name="category_id"
                      onChange={props.handleChange}
                      options={categories}
                      value={props?.values?.category_id}
                    />
                  </div>
                </div>

                <label>choose study tag</label>
                <CreatetableSelect
                  isMulti
                  onChange={props.handleChange}
                  name="tag"
                  closeMenuOnSelect={false}
                />

                <div className="mt-5">
                  <CustomTextArea
                    label="Summarize"
                    onChange={props.handleChange}
                    name="summary"
                    placeholder="please input field"
                    value={props?.values.summary}
                  />
                </div>

                <FieldArray name="chapters" >
                    {({})=>(
                        <>
                            {props?.values?.chapters.length>0 && props?.values?.chapters.map((chapter,chapterIndex)=>(
                                <Chapter  key={chapter.id} chapterIndex={chapterIndex} chapter={chapter} props={props} />

                            ))} 
                        </>
                    )}
                </FieldArray>
                

                <CustomButton label="Save" type="submit" />
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
