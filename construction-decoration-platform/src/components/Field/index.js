// import { Box, Collapse } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { cloneElement, ReactElement } from "react";
import { Controller, useFormContext } from "react-hook-form";

export function Field({ name, component, label }) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) =>
          cloneElement(component, {
            id: name,
            name,
            value,
            onChange(e) {
              if (component.props?.onChange) component.props?.onChange(e);
              onChange(e);
            },
          })
        }
      />
      {/* <div in={!!errors?.[name]} unmountOnExit> */}
        <FieldError>{errors?.[name]?.message}</FieldError>
      {/* </div> */}
    </div>
  );
}
export const FieldLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
`;
export const FieldError = styled.div`
  margin-top: 2px;
  color: red;
  font-size: 12px;
`;
