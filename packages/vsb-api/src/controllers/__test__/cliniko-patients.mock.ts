export const patientWithTreatmentNote = {
  treatment_notes: [
    {
      id: '610802452278544812',
      created_at: '2021-04-22T17:55:26Z',
      updated_at: '2021-04-22T17:55:26Z',
      content: {
        sections: [
          {
            name: 'Processus vasectomie',
            questions: [
              {
                name: 'Statut du patient',
                type: 'radiobuttons',
                answers: [
                  { value: '1. Nouveau (en attente du formulaire pré-op)' },
                  { value: '2. Formulaire pré-op (doit remplir le formulaire)' },
                  {
                    value: '3. Formulaire pré-op rempli (en attente de rdv pour scéance info)',
                    selected: true,
                  },
                  { value: '4. Rendez-vous fixé pour scéance info' },
                  { value: '5.1 En attente pour rdv examen physique' },
                  { value: '5.2 En attente pour rdv opératoire et suivi post-op' },
                  { value: '5.3 En attente pour autre(s) raison(s)' },
                  { value: '6.1 Rdv planifié (examen physique)' },
                  { value: '6.2 Rdv planifié (vasectomie + suivi post-op)' },
                  { value: '7. En attente pour rdv appel de suivi post-op' },
                  { value: '8. En attente du résultat spermogramme' },
                  { value: '9. Dossier complété' },
                  { value: '0. Abandon / désistement' },
                ],
              },
              { name: 'Note', type: 'paragraph' },
            ],
          },
        ],
      },
      draft: true,
      title: 'Statut du patient',
      deleted_at: null,
      finalized_at: null,
      pinned_at: null,
      archived_at: null,
      author_name: 'Isabelle Caron',
      patient: { links: { self: 'https://api.ca1.cliniko.com/v1/patients/608094149761042909' } },
      practitioner: {
        links: { self: 'https://api.ca1.cliniko.com/v1/practitioners/610800730013436468' },
      },
      treatment_note_template: {
        links: {
          self: 'https://api.ca1.cliniko.com/v1/treatment_note_templates/608098732734417720',
        },
      },
      links: { self: 'https://api.ca1.cliniko.com/v1/treatment_notes/610802452278544812' },
    },
    {
      id: '608099824973121549',
      created_at: '2021-04-19T00:25:48Z',
      updated_at: '2021-04-19T00:25:48Z',
      content: {
        sections: [
          {
            name: 'Processus vasectomie',
            questions: [
              {
                name: 'Statut du patient',
                type: 'radiobuttons',
                answers: [
                  { value: 'Nouveau (en attente du formulaire pré-op)' },
                  { value: 'Formulaire pré-op (a reçu le formulaire)', selected: true },
                  { value: 'Formulaire pré-op rempli' },
                  { value: 'Rendez-vous fixé pour appel avec Dr. Boucher' },
                  { value: 'En attente pour rappel de suivi post-chirurgie' },
                ],
              },
            ],
          },
        ],
      },
      draft: false,
      title: 'Statut du patient',
      deleted_at: null,
      finalized_at: '2021-04-19T00:25:48Z',
      pinned_at: null,
      archived_at: null,
      author_name: 'Philippe Léger',
      patient: { links: { self: 'https://api.ca1.cliniko.com/v1/patients/608094149761042909' } },
      practitioner: {
        links: { self: 'https://api.ca1.cliniko.com/v1/practitioners/463583618652965611' },
      },
      treatment_note_template: {
        links: {
          self: 'https://api.ca1.cliniko.com/v1/treatment_note_templates/608098732734417720',
        },
      },
      links: { self: 'https://api.ca1.cliniko.com/v1/treatment_notes/608099824973121549' },
    },
    {
      id: '608099689027340300',
      created_at: '2021-04-19T00:25:31Z',
      updated_at: '2021-04-19T00:25:31Z',
      content: {
        sections: [
          {
            name: 'Processus vasectomie',
            questions: [
              {
                name: 'Statut du patient',
                type: 'radiobuttons',
                answers: [
                  { value: 'Nouveau (en attente du formulaire pré-op)', selected: true },
                  { value: 'Formulaire pré-op (a reçu le formulaire)' },
                  { value: 'Formulaire pré-op rempli' },
                  { value: 'Rendez-vous fixé pour appel avec Dr. Boucher' },
                  { value: 'En attente pour rappel de suivi post-chirurgie' },
                ],
              },
            ],
          },
        ],
      },
      draft: false,
      title: 'Statut du patient',
      deleted_at: null,
      finalized_at: '2021-04-19T00:25:31Z',
      pinned_at: null,
      archived_at: null,
      author_name: 'Philippe Léger',
      patient: { links: { self: 'https://api.ca1.cliniko.com/v1/patients/608094149761042909' } },
      practitioner: {
        links: { self: 'https://api.ca1.cliniko.com/v1/practitioners/463583618652965611' },
      },
      treatment_note_template: {
        links: {
          self: 'https://api.ca1.cliniko.com/v1/treatment_note_templates/608098732734417720',
        },
      },
      links: { self: 'https://api.ca1.cliniko.com/v1/treatment_notes/608099689027340300' },
    },
  ],
  total_entries: 3,
  links: {
    self:
      'https://api.ca1.cliniko.com/v1/treatment_notes?page=1&q%5B%5D=patient_id%3A%3D608094149761042909&sort=updated_at%3Adesc',
  },
};
