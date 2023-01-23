import * as React from 'react';
interface Props {
    text: string;
    styles?: {
        div: React.CSSProperties;
    };
    checked: boolean;
    onChanged?: (checked: boolean) => void;
}
declare const Checkbox: React.NamedExoticComponent<Props>;
export { Checkbox };
