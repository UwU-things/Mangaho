import { styled } from "styled-components";

export const ImageDetails = styled.div<{ $width?: string, $height?: string }>`
    width: ${props => props.$width ? props.$width : "auto"};
    height: ${props => props.$height ? props.$height : "100%"};

    position: relative;

    border-radius: 6px;

    img{
        width: ${props => props.$width ? props.$width : "auto"};
        height: ${props => props.$height ? props.$height : "100%"};

        object-fit: cover;
    }
`