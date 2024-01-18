import * as yup from 'yup'


export const categorySchema = yup.object().shape({
    name : yup.string().min(5, "name must be long").required("please input name"),
    code : yup.string().min(3, "code must be than 3").required("please input code")
})

export const courseSchema = yup.object().shape({
    name: yup.string().min(1, "name must be long").required("please input name of course"),
    summary: yup.string().min(1, "summary must be long").required("please input field"),
    category_id: yup.string().required("please selected"),
    chapters: yup.array().of(yup.object()
      .shape({
          name: yup.string().required("please input chapter name"),
          summary: yup.string().required("please input field"),
          lessons: yup.array().of(
            yup.object().shape({
              name: yup.string().required("please input lesson name"),
              summary: yup.string().required("please input field"),
            })
        ),
      })
  ),
})