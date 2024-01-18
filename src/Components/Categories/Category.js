import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { CustomInput } from '../CustomInput';
import { categorySchema } from '../../Schemas/input';
import { CustomButton } from '../CustomButton';

export const Category = ({onSave, value}) =>{

console.log("value",value)


    const onSubmit = (values, actions) =>{
        // console.log("values",values)
        // console.log("action", actions)
        if (values.id) {
            onSave(values, true);
            return;
          }
          onSave(values, false);
          actions.resetForm();
          
    }


    // console.log("value:",values.name)
    

    return(
        <div>
            <Formik
            enableReinitialize={true}
            initialValues={{
                id: value?.id || "",
                name: value?.name || "",
                code: value?.code || "",
            }}
              
            validationSchema={categorySchema}
            onSubmit={onSubmit}
            >
            {props => (
                <div className="w-full max-w-lg ml-40">
                    <div className="text-xl font-bold flex items-center justify-center mt-5"> Add Category</div>
                    <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className='mb-6' >
                            <CustomInput label="name" type="text" placeholder="name" name="name" onChange={props.handleChange} value={props.values.name}/>
                        </div>
                        <div className='mb-6' >
                            <CustomInput label="code" type="text" placeholder="code" name="code" onChange={props.handleChange}  value={props.values.code} />
                        </div>
                        <CustomButton label="submit" type='submit' > {value?.id? "update" : "save"} </CustomButton>
                    </Form>
                </div>
            )}
            </Formik>
        </div>
    )
};