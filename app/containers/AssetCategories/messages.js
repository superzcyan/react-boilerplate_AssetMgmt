/*
 * AssetCategories Messages
 *
 * This contains all the text for the AssetCategories container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AssetCategories';

export default defineMessages({
  tableTitle: {
    id: `${scope}.header`,
    defaultMessage: 'Categories',
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
