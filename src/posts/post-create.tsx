import { DateInput, required } from "react-admin";

import { SimpleForm, TextInput } from "react-admin";

import { Create } from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <TextInput source="teaser" multiline={true} label="Short description" />
      <DateInput
        label="Publication date"
        source="published_at"
        defaultValue={new Date()}
      />
    </SimpleForm>
  </Create>
);
