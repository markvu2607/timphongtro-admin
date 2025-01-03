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
      <TextInput source="name" validate={[required()]} label="Quận huyện" />
      <ReferenceInput source="province.id" reference="provinces">
        <SelectInput
          optionText="name"
          validate={[required()]}
          label="Tỉnh thành"
        />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
