import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundColor: string;
        elementsBackgroundColor: string;
        elementsBorder: string;
        TextColorSecondary: string;
        TextColorMain: string
    }
}