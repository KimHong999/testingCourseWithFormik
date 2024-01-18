import React, { useMemo } from "react";
import { CustomButton } from "../CustomButton";

export const TableCourse = ({data, categories}) => {
    

    return (
        <div>
            <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-6 py-4">id</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">summarize</th>
                        <th scope="col" className="px-6 py-4">Categories</th>
                        <th scope="col" className="px-6 py-4">Total Chapter</th>
                        <th scope="col" className="px-6 py-4">Total Lesson</th>
                        <th scope="col" className="px-6 py-4" >Edit</th>
                        <th scope="col" className="px-6 py-4" >Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data?.map((cousData)=>(
                            <tr key={cousData.id} class="border-b border-secondary-700 bg-zinc-100">
                                <td class="px-6 py-4" >{cousData.id}</td>
                                <td class="px-6 py-4" >{cousData.name}</td>
                                <td class="px-6 py-4" >{cousData.summary}</td>
                                <td class="px-6 py-4" >{categories.find(cate=> cate.id === cousData.category_id).name}</td>
                                <td class="px-6 py-4" >{cousData?.chapters?.length}</td>
                                <td class="px-6 py-4" > {cousData?.chapters?.reduce((sum, chapter) => {
                                    return sum + chapter?.lessons?.length;}, 0)}
                                </td>
                                <td>
                                    <CustomButton label="Edit" />
                                </td>
                                <td>
                                    <CustomButton label="Delete" />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}