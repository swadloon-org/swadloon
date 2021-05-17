/**
 * @see https://github.com/redguava/cliniko-api/blob/master/sections/treatment_notes.md
 */
export type PatientTreatmentNote = {
  id: string; // '608098929296279562';
  created_at: string | null; // '2021-04-19T00:24:01Z';
  updated_at: string | null; // '2021-04-19T00:24:01Z';
  content: {
    sections: PatientTreatmentNoteSection[];
  };
  draft: false;
  title: string | 'Statut du patient';
  deleted_at: string | null;
  finalized_at: string | null;
  pinned_at: string | null;
  archived_at: string | null;
  author_name: string | null;

  // patient: {
  //   links: {
  //     self: 'https://api.ca1.cliniko.com/v1/patients/563704455636192073';
  //   };
  // };
  // practitioner: {
  //   links: {
  //     self: 'https://api.ca1.cliniko.com/v1/practitioners/463583618652965611';
  //   };
  // };

  /**
   * Used to retrieve the id of the note template
   */
  treatment_note_template: {
    links: {
      self: string; // 'https://api.ca1.cliniko.com/v1/treatment_note_templates/608098732734417720';
    };
  };
  // links: {
  //   self: 'https://api.ca1.cliniko.com/v1/treatment_notes/608098929296279562';
  // };
};

export type PatientTreatmentNoteSection = {
  name?: string; // 'Processus vasectomie';
  questions?: [
    {
      name?: string; // 'Statut du patient';
      type?: 'radiobuttons';
      answers?: PatientTreatmentNoteAnswer[];
    }
  ];
};

export type PatientTreatmentNoteAnswer = {
  value?: string; // 'Nouveau (en attente du formulaire pré-op)';
  selected?: boolean;
};
