/*
 * AssetHomePage Messages
 *
 * This contains all the text for the AssetHomePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AssetHomePage';

export default defineMessages({
  tableTitle: {
    id: `${scope}.header`,
    defaultMessage: 'Assets',
  },

  tableHeaderId: {
    id: `${scope}.header`,
    defaultMessage: 'Id',
  },

  tableHeaderSerialNo: {
    id: `${scope}.header`,
    defaultMessage: 'Serial No.',
  },

  tableHeaderAssetTag: {
    id: `${scope}.header`,
    defaultMessage: 'Asset Tag',
  },

  tableHeaderAssetName: {
    id: `${scope}.header`,
    defaultMessage: 'Asset Name',
  },

  tableHeaderStatusType: {
    id: `${scope}.header`,
    defaultMessage: 'Status Type',
  },

  tableHeaderManufacturer: {
    id: `${scope}.header`,
    defaultMessage: 'Manufacturer',
  },

  tableHeaderCategory: {
    id: `${scope}.header`,
    defaultMessage: 'Category',
  },

  tableHeaderAction: {
    id: `${scope}.header`,
    defaultMessage: 'Action',
  },

});
