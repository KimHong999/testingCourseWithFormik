import { FieldArray, Form, Formik } from "formik";
import React from "react";
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";
import { CustomTextArea } from "../CustomTextArea";
import { Lesson } from "./Lesson";
import { courseSchema } from "../../Schemas/input";

export const Chapter = ({ chapterIndex, chapter }) => {

    console.log("chapreindex",chapter)
  return (
    <div>
      <Formik
        initialValues={{}}
        // validationSchema={courseSchema}
      >
        {(props) => (
          <div class="mt-6 block rounded-lg bg-gray-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <Form>
              <div className="flex justify-between">
                <div className="text-xl">Add Chapter</div>
                <div>
                  <CustomButton label="Add" />
                  <CustomButton label="Remove" />
                </div>
              </div>

              <div className="mt-5">
                <CustomInput
                  label="name"
                //   name="name"
                  name={`chapters.${chapterIndex}.name`}
                  value={chapter.name}
                  type="text"
                  placeholder="name"
                  onChange={props.handleChange}
                />
              </div>

              <div className="mt-5">
                <CustomTextArea
                  label="summarize"
                  name={`chapters.${chapterIndex}.summary`}
                  value={chapter.summary}
                  placeholder="please input field"
                  onChange={props.handleChange}
                />
              </div>

              {/* <FieldArray name={`chapters.${chapterIndex}.lessons`}>
                {({ }) => {
                    return (
                    <div>
                        {props?.values?.chapters[chapterIndex].lessons?.length > 0 &&
                        props?.values?.chapters[chapterIndex].lessons.map(
                            (lesson, lessonindex) => {
                            return (
                                <Lesson
                                key={lesson?.id}
                                lessonindex={lessonindex}
                                chapterIndex={chapterIndex}
                                lesson={lesson}
                                />
                            );
                            }
                        )}
                    </div>
                    );
                }}
                </FieldArray> */}
                
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
