import { styled } from "styled-components"

export const SkeletonDetails = styled.div<{$width?: string, $height?: string}>`
    width: ${props => props.$width ? props.$width : "auto"};
    height: ${props => props.$height ? props.$height : "auto"};

    animation: skeleton-loading 1s linear infinite alternate; 

    
    @keyframes skeleton-loading {
    0%{
        background-color: hsl(200, 20%, 70%);
    }

    100%{
        background-color: hsl(200, 20%, 95%);
    }
    }
`