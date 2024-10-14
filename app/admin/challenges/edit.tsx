import {
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
  SelectInput,
  Edit,
} from "react-admin";

export const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" label="Lesson ID" validate={[required()]} />
        <TextInput source="question" label="Question" validate={[required()]} />
        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
          validate={[required()]}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Edit>
  );
};
