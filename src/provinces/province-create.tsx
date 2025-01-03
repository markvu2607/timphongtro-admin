import { required } from "react-admin";

import { SimpleForm, TextInput } from "react-admin";

import { Create } from "react-admin";

export const ProvinceCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" label="Tỉnh thành" validate={[required()]} />
    </SimpleForm>
  </Create>
);
