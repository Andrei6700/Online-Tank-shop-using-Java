import React from "react";
import { InputBox } from "../components-form/input-box";

export function InputField({ register, errors }) {
  return (
    <div>
      <InputBox register={register} errors={errors} id={'name'} />
      <InputBox register={register} errors={errors} id={'email'} />
      <InputBox register={register} errors={errors} id={'tara'} />
      <InputBox register={register} errors={errors} id={'adresa'} />
      <InputBox register={register} errors={errors} id={'telefon'} />
      <InputBox register={register} errors={errors} id={'bmilitara'} />
      <InputBox register={register} errors={errors} id={'cantitate'} />
    </div>
  )
}