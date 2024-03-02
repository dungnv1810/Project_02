import styled from "styled-components";
export const JumbotronWrapper = styled.div`
    .jumbotron{
        padding: 1rem;
        border-radius: 0;
    }
    .btn-outline-light{
        background-color: #007BFF;
        border: 1px solid white;
        color: #fff;
        font-weight: 500;
        &:hover{
            background-color: rgba(230,37,109,1);
            border: 1px solid white;
            color: #fff;
        }
    }
    .welcome p{
        font-size: 1.2rem;
        margin: 1rem 0rem 1.8rem 0rem;
    }
    .welcome hr{
        margin: 1rem auto;
        width: 95%;
        border-top: 2px solid rgba(62,44,100,0.7);
    }
    .fontsize{
        font-size: 3.5rem;
    }
    .faFaceAngry{
        color: #81d8f7;
    }
    .faCoffee{
        color: rgb(177,43,55);
    }
    .faGift{
        color: #d76537;
    }
    h3{
        margin: 0rem 0rem;
    }
    .fun{
        width: 100%;
        border: 1px;
        border-radius: 5px;
    }
    .blinkEyes{
        width: 100px;
        height: 100px;
    }
    .social a{
        font-size: 3rem;
        padding: 3rem;
    }
    .fa-facebook{
        color: #3b5998;
    }
    .fa-twitter{
        color: #00aced
    }
    .fa-google-plus-g{
        color: #dd4b39;
    }
    .fa-instagram{
        color: #517fa4;
    }
    .fa-youtube{
        color: #bb0000;
    }
    footer{
        background-color: #3f3f3f;
        color: #d5d5d5;
        padding-top: 1rem;
    }
    .light{
        border: 1px solid #fff;
    }
`;