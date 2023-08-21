import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '../styles/home/container';

import Image from '../components/Image';
import Layout from '../components/Layout';

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

function Home() {

    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://api.mangadex.org/manga')
                .then(async (res) => {
                    setData(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        fetchData()
    }, [])

    return (
        <Layout>
            <Container>
                <div className='list'>
                    {
                        data ? data.map((item, key) => {
                            return (
                                <div className='card' key={key}>
                                    <Image height='150px' width="105px" data={item}/>
                                    <h1>{item.attributes.title.en}</h1>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </Container>
        </Layout>
    )
}


export default Home;