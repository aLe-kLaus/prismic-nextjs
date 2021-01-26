import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 2px solid;
  border-color: #190054;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
`;


export const Title = styled.strong`
    color: #28272b;
    font-size: 25px; 
`;

export const Img = styled.img`
    width: 550px;
    height: 300px;
    border-radius: 10px;
    background: black;
    opacity: 50%;
    align-items: center;
    display: block;
    margin-left: auto;
    margin-right: auto;

`;

export const Description = styled.p`
  color: #28272b;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  flex: 1;
`;


export const Subtitlte = styled.strong`
  font-size: 24px;
  color: #28272b;
`;
