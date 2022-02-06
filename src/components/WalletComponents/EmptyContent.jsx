import styled from "styled-components";

const Content = styled.div`
    height: 446px;
    width: 326px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #FFFFFF;
    
    border-radius: 5px;
    border-style: none;

    div{
        width: 180px;
    }
    
    h1{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
    }
`

export default function EmptyContent(){
    return (
        <Content>
            <div><h1>Não há registros de entrada ou saída</h1></div>
        </Content>
    )
}