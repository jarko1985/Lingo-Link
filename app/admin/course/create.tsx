import {
  Create,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" label="Course ID" validate={[required()]} />
        <TextInput source="title" label="title" validate={[required()]} />
        <TextInput source="imageSrc" label="Image" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
