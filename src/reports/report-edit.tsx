import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ReportEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="reason" />
      <TextInput source="description" />
      <TextInput source="status" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      <TextInput source="deletedAt" />
    </SimpleForm>
  </Edit>
);
