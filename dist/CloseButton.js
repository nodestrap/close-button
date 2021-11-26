// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// nodestrap components:
import { ButtonIcon, } from '@nodestrap/button-icon';
export function CloseButton(props) {
    // jsx:
    return (React.createElement(ButtonIcon
    // other props:
    , { ...props, 
        // accessibilities:
        label: props.label ?? 'Close', 
        // appearances:
        icon: props.icon ?? 'close', 
        // variants:
        btnStyle: props.btnStyle ?? 'icon' }));
}
CloseButton.prototype = ButtonIcon.prototype; // mark as ButtonIcon compatible
export { CloseButton as default };
