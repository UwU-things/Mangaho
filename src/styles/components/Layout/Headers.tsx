import { styled } from "styled-components";


export const Header = styled.div`
    
    width: 100%;
    height: 50px;
    padding: 5px 20px;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
    z-index: 999;

    nav{
        width: 100%;
        max-width: 1200px;

        display: flex;
        align-items: center;
        gap: 30px;

        .logo{
            font-size: 2rem;
            font-family: 'Kanit', sans-serif;
            color: #7d12ff;
        }

        a{
            text-decoration: none;
            color: black;

            font-size: 1.2rem;
        }
    }
`