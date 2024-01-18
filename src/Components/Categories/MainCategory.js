import React, { useEffect, useState } from "react";
import { Category } from "./Category";
import { TableCategory } from "./TableCategory";

export const MainCategory = ({categories=[], onSave, onDelete, form, isEdit, onEdit }) =>{


    return(
        <div>
             <div className='flex justify-between' >
                <Category onSave={onSave} value={form} />
                
                <TableCategory categories={categories} onDelete={onDelete} isEdit={isEdit} onEdit={onEdit} />
            </div>
        </div>
    )
}