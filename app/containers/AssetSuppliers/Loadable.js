/**
 *
 * Asynchronously loads the component for AssetSuppliers
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
