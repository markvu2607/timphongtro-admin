import {
  Edit,
  ImageField,
  ImageInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { RichTextInput } from "./richtext-input";

export const NewsEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" label="ID" fullWidth disabled />

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

      <ImageInput
        source="thumbnail"
        label="Thumbnail"
        maxSize={5000000}
        validate={[required()]}
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      <TextInput source="status" label="Status" fullWidth disabled />
      <TextInput source="createdAt" label="Created at" fullWidth disabled />
      <TextInput source="publishedAt" label="Published at" fullWidth disabled />

      <RichTextInput source="content" label="Content" />
    </SimpleForm>
  </Edit>
);
