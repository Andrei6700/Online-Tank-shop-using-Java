import React from 'react';
import './Form-style.css';
import { InputField } from '../components-form/input-fileds';
import { InputButtons } from '../components-form/input-button';
import { OnSubmit } from '../components-form/on-submit';
import { useFormData } from '../components-form/form-data';
import { useParams } from 'react-router-dom';

export const Form = () => {
  const { register, handleSubmit, errors } = useFormData();
  const { id } = useParams();

  const onSubmit = (data) => {
    const formData = {
      ...data,
      tank: id,
    };
    OnSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField register={register} errors={errors} />
      <InputButtons register={register} />
    </form>
  );
};