import {
  ImageInput,
  ImageField,
  required,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SimpleForm, TextInput } from "react-admin";
import { Create } from "react-admin";

import { RichTextInput } from "./richtext-input";

export const NewsCreate = () => (
  <Create
    transform={(data) => {
      const provinceId = data.province.id;
      delete data.province;
      return { ...data, provinceId };
    }}
  >
    <SimpleForm>
      <TextInput
        source="title"
        label="Title"
        fullWidth
        validate={[required()]}
      />

      <TextInput
        source="shortDescription"
        multiline={true}
        label="Short description"
        fullWidth
        validate={[required()]}
      />

      <ReferenceInput source="province.id" reference="provinces">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ImageInput source="thumbnail" label="Thumbnail" maxSize={5000000}>
        <ImageField source="src" title="title" />
      </ImageInput>

      <RichTextInput source="content" label="Content" />
    </SimpleForm>
  </Create>
);
