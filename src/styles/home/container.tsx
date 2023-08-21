import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin-top: 100px;

    .list{
        display: flex;
        max-width: 1200px;
        width: 100%;
        
        flex-wrap: wrap;
        gap: 20px 0px;
    }

    .card{
        width: 150px;

        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            font-size: 1rem;
            text-align: center;
        }
    }


`