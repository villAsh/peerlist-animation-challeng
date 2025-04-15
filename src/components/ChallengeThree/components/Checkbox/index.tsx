"use client";
import React, { useState } from "react";
import Label from "../Label";
import InputCheckbox from "../Input";

type Props = {
  label: string;
  id: string;
};
const Checkbox = ({ label, id }: Props) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-row justify-start items-start gap-x-2">
      <InputCheckbox
        checked={checked}
        handleChecked={() => setChecked(!checked)}
        id={id}
      />
      <Label label={label} isChecked={checked} id={id} />
    </div>
  );
};

export default Checkbox;
