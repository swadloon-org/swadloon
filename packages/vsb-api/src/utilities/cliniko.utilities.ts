/**
 * Extract the id from a self link
 * @see https://github.com/redguava/cliniko-api/blob/master/sections/treatment_notes.md#get-treatment-notes
 * @example
 *  ```json
 *    "treatment_note_template": {
 *      "links": {
 *        "self": "https://api.au1.cliniko.com/v1/treatment_note_templates/789"
 *      }
 *    },
 *  ```
 */
export function getIdFromSelfLink(path?: string | null) {
  if (!path) {
    return undefined;
  }

  // receive https://api.au1.cliniko.com/v1/treatment_note_templates/789

  const reg = /(\/(?<id>\d+))/gi;

  const match = reg.exec(path);
  const id = match?.groups?.id;
  const number = Number(id);

  if (isNaN(number)) {
    return undefined;
  }

  // returns 789

  return number;
}
