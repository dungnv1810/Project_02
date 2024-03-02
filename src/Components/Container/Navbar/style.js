import styled from "styled-components";
export const NavbarWrapper = styled.div`
    .navbar{
        background-color: rgba(230,37,109) !important;
        font-size: 1.2rem;
    }
    .container{
        display: flex;
        justify-content: space-between;
    }
    .navbar ul li a{
        color: white !important;
        &:hover{
            color: black !important;
        }
    }
    img{
        height: 40px;
    }
    .collapse{
        display: flex;
        justify-content: flex-end;
    }
`;