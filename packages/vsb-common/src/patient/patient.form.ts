import { Form, FORM_INPUT_TYPE } from '@newrade/core-common';

type ExampleFormConfig = {
  fields: {
    firstName: {
      type: FORM_INPUT_TYPE.TEXT;
    };
    lastName: {
      type: FORM_INPUT_TYPE.TEXT;
    };
    email: {
      type: FORM_INPUT_TYPE.TEXT;
    };
    startDate: {
      type: FORM_INPUT_TYPE.DATE;
    };
    nested: {
      fields: {
        firstName: {
          type: FORM_INPUT_TYPE.TEXT;
        };
      };
    };
  };
};

const PatientForm: Form<ExampleFormConfig> = {
  name: 'contact-form',
  fieldsMap: {
    firstName: {
      order: 1,
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Enter value',
      type: FORM_INPUT_TYPE.TEXT,
      validations: [],
    },
    lastName: {
      order: 2,
      name: 'lastname',
      label: 'Last Name',
      placeholder: 'Enter value',
      type: FORM_INPUT_TYPE.TEXT,
    },
    email: {
      order: 3,
      name: 'email',
      label: 'Email',
      placeholder: 'Enter value',
      type: FORM_INPUT_TYPE.TEXT,
    },
    startDate: {
      order: 4,
      name: 'startDate',
      label: 'Start date',
      placeholder: 'Enter start date',
      type: FORM_INPUT_TYPE.DATE,
      defaultValue: new Date('2021-12-12'),
      validations: [
        {
          dateRange: { min: '2021-12-12' },
        },
      ],
    },
    nested: {
      name: 'nested',
      fieldsMap: {
        firstName: {
          order: 1,
          name: 'firstName',
          label: 'First Name',
          placeholder: 'Enter value',
          type: FORM_INPUT_TYPE.TEXT,
        },
      },
    },
  },
};
