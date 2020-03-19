/*
 * AssetMgmtItemTable Messages
 *
 * This contains all the text for the AssetMgmtItemTable component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AssetMgmtItemTable';

export default defineMessages({
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
