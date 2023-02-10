import React from "react"
import { Group, FormLabel, Input } from "./form-input.styles"

const FormInput = ({label, ...otherProps}) => {
  return (
    <Group>
      <Input {...otherProps}/>
      {
        label && (
          <FormLabel shrink={otherProps.value.length}>
            {label}
          </FormLabel>
        )
      }
    </Group>
  )
}

export default FormInput