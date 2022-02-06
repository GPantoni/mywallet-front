import styled from "styled-components";
import ButtonIn from "./ButtonIn";
import ButtonOut from "./ButtonOut";

const StyledFooter = styled.footer`
    width: 100%;
    height: 142px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 25px;
`

export default function Footer() {
    return (
        <StyledFooter>
            <ButtonIn />
            <ButtonOut />
        </StyledFooter>
    )
}