import styled from 'styled-components'


export const StyledCard = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${props => props.first};
    background-image: linear-gradient(${props => props.range}deg, ${props => props.first} 0%, ${props => props.second} 100%);
    border-radius: 10px;


    @media screen and (max-width: 992px) {
        height: 100px;
        width: 100%;
    }
    
`