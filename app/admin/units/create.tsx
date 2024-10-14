import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" label="Unit ID" validate={[required()]} />
        <TextInput source="title" label="title" validate={[required()]} />
        <TextInput
          source="description"
          label="Description"
          validate={[required()]}
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Create>
  );
};
