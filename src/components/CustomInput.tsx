import { Field } from "formik";
import React from "react";
import { Input } from "./ui/input";
import { CustomInputPropsType} from "@/interface_types/SignUp";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";

const CustomInput = (props: CustomInputPropsType) => {
  const { name, placeholder } = props;
  return (
    <Field name={name}>
      {({ field, form: { touched, errors } }: any) => (
        <div>
          <Input
            {...field}
            className={cn({
              "focus-visible:ring-blue-500": true,
              "focus-visible:ring-red-500": false,
            })}
            placeholder={placeholder}
          />
          {touched[field.name] && errors[field.name] && (
            <Label className={"text-red-600"}>{errors[field.name]}</Label>
          )}
        </div>
      )}
    </Field>
  );
};

export default CustomInput;
