import React from "react";
import { SkeletonDetails } from "../styles/components/SkeletonDatails"

interface Props{
    width?: string,
    height?: string,
    style?: React.CSSProperties
}

const Skeleton = ({width, height, style} : Props) => {
    return(
        <SkeletonDetails style={{...style}} $width={width} $height={height}/>
    )
}


export default Skeleton;