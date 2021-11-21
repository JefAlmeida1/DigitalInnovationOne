import styled from 'styled-components';

export const Wrapper = styled.div`

    display: flex;
    align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`

    display: flex;
    align-items: center;
    div{
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div`

    display: flex;
    align-items: center;
    margin-top: 8px;
    h3{
        margin-right: 8px;
    }
    a{
        font-size: 18px;
        color: blue;
        font-weight: bold;
    }
`;

export const WrapperInfoUser = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-countent: space-between;
    height: 200px;
    margin-left: 8px;
    
    h1{
        font-size: 36px;
        font-weight: bold;
    }
    h3{
        font-size: 18px;
        font-wight: blod;
    }
    h4{
        font-size: 16px;
        font-wight: blod;
    }
`;

export const WrapperImage = styled.img`

    border-radius: 50px;
    width: 200px;
    margin: 10px;
`;