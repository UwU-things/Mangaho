import { useState, useEffect } from 'react';

import { ImageDetails } from "../styles/components/ImageDetails";
import Skeleton from './Skeleton';

import axios from 'axios';

interface Props {
    data: Data,
    width?: string,
    height?: string
}

interface Data {
    id: string,
    attributes: {
        title: {
            en: string
        },
        id: string,
    }
    relationships: [
        {
            id?: string,
            type: string
        }
    ]

}

const Image = ({ data, width, height }: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [src, setSrc] = useState<string>("");

    useEffect(() => {

        async function fetchData() {
            const coverPromise = new Promise<string>((resolve, reject) => {
                const index = data.relationships.map((item) => item.type).indexOf('cover_art');
                axios.get(`https://api.mangadex.org/cover/${data.relationships[index].id}`)
                    .then((res) => {
                        resolve(`https://uploads.mangadex.org/covers/${data.id}/${res.data.data.attributes.fileName}`);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })

           const resolvedPromise = await coverPromise
            setSrc(resolvedPromise);

        }

        fetchData()
    }, [])

    const onLoad = () => {
        setImageLoaded(true);
    }

    return (
        <ImageDetails $width={width} $height={height}>
            {!imageLoaded && <Skeleton style={{ position: 'absolute' }} width={width} height={height} />}
            <img src={src} onLoad={onLoad} />
        </ImageDetails>
    );
}


export default Image;