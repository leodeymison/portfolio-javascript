import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,
        colors: {
            text: string,
            primary: string,
            secund: string,
            border: string,
            boxshadow: string,
            terc: string
        },
    }
}