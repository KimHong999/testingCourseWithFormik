import { Form } from "formik";
import React from "react";
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";
import { CustomTextArea } from "../CustomTextArea";
import { uuidv4 } from "../../utils";

export const Lesson = ({ lessonIndex, lessons, chapterIndex, props, push, remove }) => {
    // console.log("props",props)


  return (
    <div class="mt-6 block rounded-lg bg-gray-50 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <Form>
        <div className="flex justify-between">
          <div className="text-xl">Add Lesson</div>
          <div>
            <CustomButton label="Add" onClick={()=>{
              push({
                id: uuidv4(),
                name: "",
                summary: "",
              })
            }} />
            <CustomButton label="Remove" onClick={()=>remove(lessonIndex)} />
          </div>
        </div>
        <div className="mt-5">
          <CustomInput
            label="name"
            name={`chapters.${chapterIndex}.lessons.${lessonIndex}.name`}
            value={lessons?.name}
            type="text"
            placeholder="name"
            onChange={props.handleChange}
          />
        </div>
        <div className="mt-5">
          <CustomTextArea
            label="content"
            type="text"
            placeholder="please input field"
            name={`chapters.${chapterIndex}.lessons.${lessonIndex}.content`}
            value={lessons?.content}
            onChange={props.handleChange}
          />
        </div>
      </Form>
    </div>
  );
};
