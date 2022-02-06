import styled from "styled-components";

const StyledButton = styled.button`
    width: 155px;
    height: 114px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 12px;

    background: #A328D6;
    border-radius: 5px;
    border-style: none;

    span{
        width: 64px;
        height: 40px;

        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        text-align: left;

        color: #FFFFFF;
    }

    ion-icon{
        color: #FFFFFF;
    }
`

export default function ButtonIn() {
    return (
        <StyledButton>
            <ion-icon name="add-circle-outline" size="large"></ion-icon>
            <span>Nova entrada</span>
        </StyledButton>
    )
}