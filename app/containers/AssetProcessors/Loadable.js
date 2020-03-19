/**
 *
 * Asynchronously loads the component for AssetProcessors
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
