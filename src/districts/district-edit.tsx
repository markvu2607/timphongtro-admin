import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const DistrictEdit = () => (
  <Edit
    mutationMode="pessimistic"
    transform={(data) => {
      const provinceId = data.province.id;
      delete data.province;
      return { ...data, provinceId };
    }}
  >
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceInput source="province.id" reference="provinces">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
