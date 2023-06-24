import React from 'react';
import './Form-style.css';
import { InputField } from '../components-form/input-fileds';
import { InputButtons } from '../components-form/input-button';
import { OnSubmit } from '../components-form/on-submit';
import { useFormData } from '../components-form/form-data';

export const Form = () => {
  const { register, handleSubmit, errors } = useFormData();

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <InputField register={register} errors={errors} />
      <InputButtons register={register} />
    </form>
  )
}
