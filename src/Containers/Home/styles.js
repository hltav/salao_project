import styled from 'styled-components'


export const Container = styled.section`
  
    margin: 50px;
    border: 2px solid transparent;
    border-image: linear-gradient(305deg, rgba(234,191,185,1) 0%, rgba(255,232,229,1) 25%, rgba(184,107,119,1) 50%, rgba(255,232,229,1) 75%, rgba(234,191,185,1) 100%);
    border-image-slice: 1;
    padding: 25px;

    img{
        margin: 20px
    }

`
export const Content = styled.section`
    
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    background: #FFE8E5;
    border-radius: 10px;
    height: 100%;
    align-items: center;

`
export const Data = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 35% 0;
`
export const Label = styled.label`
    color: #B86B77;
    font-weight: 700;
    font-size: 15px;
    padding-bottom: 3px;

`
export const Input = styled.input`
    border: none;
    border-radius: 5px;
    height: 30px;
    margin-bottom: 15px;
    outline: none;

`
export const Button = styled.button`
    width: 160px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background: #EABFB9;
    font-size: 20px;
    color: #B86B77;
    margin-bottom: 35px;


`