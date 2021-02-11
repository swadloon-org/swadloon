/**
 * Models for Cliniko API response
 */

export type ClinikoAPIResponseError = Partial<{
  errors: object;
  message: string;
}>;

/**
 * Route https://api.ca1.cliniko.com/v1/services
 */
export type ClinikoServiceRoute = 'services';
export type ClinikoServicePayload = {};
export type ClinikoServiceResponse = {
  services: [
    {
      practitioners: [
        {
          links: {
            self: string;
          };
        }
      ];
      appointment_type: {
        links: {
          self: string;
        };
      };
      business: {
        links: {
          self: string;
        };
      };
    },
    {
      practitioners: [
        {
          links: {
            self: string;
          };
        }
      ];
      appointment_type: {
        links: {
          self: string;
        };
      };
      business: {
        links: {
          self: string;
        };
      };
    }
  ];
  total_entries: number;
  links: {
    self: string;
  };
};
