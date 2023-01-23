/// <reference types="react" />
import { StateControl } from '../state-control/state-control.js';
import { PageState } from '../state/page-state.js';
interface Props {
    stateControl: StateControl;
    pageState: PageState;
}
declare function Page(props: Props): JSX.Element;
export { Page };
