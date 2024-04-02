import 'styled-components';
import { defaultTheme } from '../styles/theme/default';

type themeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends themeType{}
}