import { useField } from "formik";
import React from "react";

export const CustomSelect = ({label, options=[], placeholder, ...props}) => {

    const [field, meta] = useField(props)

    return(
        <div>
            <>
            
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <select {...field} {...props}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" >{placeholder}</option>
                        {
                            options.map(item => <option key={item.id} value={item.id} >{item.name}</option>)
                        }
                    {meta.touched && meta.error ? "input-error" : ""}
                </select>
                {meta.touched && meta.error && <div id="error" >{meta.error}</div>}

            </>
        </div>
  
    )
}