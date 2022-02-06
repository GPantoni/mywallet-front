import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    height: 88px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 24px;

    h1{
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;

        color: #FFFFFF;
    }

    ion-icon{
        color: #FFFFFF;
    }
`

export default function Header() {
    return (
        <HeaderStyled>
            <h1>Olá, Fulano</h1>
            <ion-icon name="exit-outline" size="large"></ion-icon>
        </HeaderStyled>
    )
}