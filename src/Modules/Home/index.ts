import * as Components from './Components';
import * as Rematch from './Rematch';
import * as Screens from './Screens';
import * as Services from './Services';

/**
 * The module index is responsible for maintaining its public API.
 * This is the exposed surface where modules can interface with each other.
 */
const HomeModule = {Components, Screens, Rematch, Services};
export default HomeModule;
