import { ReferenceInput, required, SelectInput } from "react-admin";

import { SimpleForm, TextInput } from "react-admin";

import { Create } from "react-admin";

export const DistrictCreate = () => (
  <Create
    transform={(data) => {
      const provinceId = data.province.id;
      delete data.province;
      return { ...data, provinceId };
    }}
  >
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <ReferenceInput source="province.id" reference="provinces">
        <SelectInput optionText="name" validate={[required()]} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
