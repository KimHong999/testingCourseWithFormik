import { useField } from "formik";
import React from "react";

export const CustomTextArea = ({label, ...props}) => {

    const [field, meta] = useField(props)

    return(
        <div>
            <form >
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <textarea {...field} {...props} id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    {meta.touched && meta.error ? "input-error" : ""}
            </form>
            {meta.touched && meta.error && <div id="error" >{meta.error}</div> }
        </div>
    )
}