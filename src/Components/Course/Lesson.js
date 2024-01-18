import { Form, Formik } from "formik";
import React from "react";
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";
import { CustomTextArea } from "../CustomTextArea";
import { courseSchema } from "../../Schemas/input";

export const Lesson = ({lessonIndex, lesson, chapterIndex}) => {
    return (
        <div>
            <Formik
            initialValues={{}}
            // validationSchema={courseSchema}
            >

            {props =>(
                <div class="mt-6 block rounded-lg bg-gray-50 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <Form>
                        <div className="flex justify-between">
                            <div className="text-xl">Add Lesson</div>
                            <div>
                                <CustomButton label="Add" />
                                <CustomButton label="Delete" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <CustomInput label="name" name={`chapters.${chapterIndex}.lesson.${lessonIndex}`} value={lesson.name} type="text" placeholder="name"  onChange={props.onChange} />
                        </div>
                        <div className="mt-5">
                            <CustomTextArea label="name" type="text" placeholder='please input field' name={`chapters.${chapterIndex}.lesson.${lessonIndex}`} value={lesson.content} onChange={props.onChange} />
                        </div>
                    </Form>
                </div>
            )}

            </Formik>
        </div>
    )
}