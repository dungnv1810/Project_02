import styled from "styled-components";
export const CarouselWrapper = styled.div`
    .btn{
        margin: 0px 5px;
        box-shadow: -2px 2px 5px #000;
    }
    .carousel-caption{
        position: absolute;
        top: 75%;
        text-shadow: -2px 2px 2px #000;
    }
    .carousel-caption h1{
        font-size: 4rem;
        text-transform: uppercase;
        text-shadow: -2px 2px 2px #000;
    }
    .carousel-caption h3{
        font-size: 2rem;
        text-shadow: -2px 2px 2px #000;
    }
    .carousel-caption p{
        font-size: 1rem;
    }
    .btn-outline-light{
        background-color: none;
        border: 1px solid white;
        color: #fff;
        font-weight: 500;
        &:hover{
            background-color: rgba(230,37,109,1);
            border: 1px solid white;
            color: #fff;
        }
    }
    @media (max-width: 992px){

    }
    @media (max-width: 760px){
        
    }
    @media (max-width: 567px){
        
    }
`;