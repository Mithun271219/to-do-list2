import * as yup from "yup";

export const Schema = yup.object({
    task: yup.string().min(3).required('name is required')
})