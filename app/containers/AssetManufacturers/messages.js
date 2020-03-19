/*
 * AssetManufacturers Messages
 *
 * This contains all the text for the AssetManufacturers container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AssetManufacturers';

export default defineMessages({
  tableTitle: {
    id: `${scope}.header`,
    defaultMessage: 'Manufacturers',
  },

  tableHeaderId: {
    id: `${scope}.header`,
    defaultMessage: 'ID',
  },

  tableHeaderName: {
    id: `${scope}.header`,
    defaultMessage: 'Name',
  },

  tableHeaderAction: {
    id: `${scope}.header`,
    defaultMessage: 'Action',
  },
});
