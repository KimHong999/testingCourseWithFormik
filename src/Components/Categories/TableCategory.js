import React, { useState } from "react"; 
import { CustomButton } from "../CustomButton";

export const TableCategory = ({categories, onDelete, isEdit, onEdit}) => {

    // console.log("edit", isEdit)
    
    // console.log("cat",categories)
    return(
        <table className="table-auto">
            <thead>
                <tr class="border-b border-secondary-700 bg-zinc-200">
                    <th  scope="col" class="px-6 py-3" >ID</th>
                    <th  scope="col" class="px-6 py-3" >Name</th>
                    <th  scope="col" class="px-6 py-3" >Code</th>
                    <th  scope="col" class="px-6 py-3" >Edit</th>
                    <th  scope="col" class="px-6 py-3" >Delete</th>
                </tr>
            </thead>
            <tbody class="text-center">
                {
                    categories?.map((cate)=>{
                        return(
                            <tr key={cate?.id} class="border-b border-secondary-700 bg-zinc-100">
                                <td class="px-6 py-4" >{cate?.id}</td>
                                <td class="px-6 py-4" >{cate?.name}</td>
                                <td class="px-6 py-4" >{cate?.code}</td>
                                <td class="px-6 py-4" >
                                    <CustomButton onClick={()=>{
                                        onEdit({
                                            cate,
                                            isEdit:!isEdit
                                           })
                                    }} label="Edit" />
                                </td>
                                <td class="px-6 py-4" >
                                    <CustomButton onClick={()=>onDelete(cate.id)} label="Delete" />
                                </td>
                            </tr>
                        )
                    })
                }
             

                {/* <tr class="border-b border-secondary-700 bg-zinc-100">
                    <td class="px-6 py-4">The Sliding</td>
                    <td class="px-6 py-4">Malcolm Lockyer</td>
                    <td class="px-6 py-4">1961</td>
                    <td class="px-6 py-4">sd</td>
                    <td class="px-6 py-4">sd</td>
                </tr> */}
            </tbody>
        </table>
    )
}