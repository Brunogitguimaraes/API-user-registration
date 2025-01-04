
import styled from "styled-components"



export const Container = styled.div`
background: linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%);
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
padding: 20px;
height: 100vh;
`


export const Title = styled.h1`
color: #5F9EA0;
text-align: center;
font-size: 38px;
font-style: normal;
font-weight: 600;

`

export const Form = styled.form`
display: flex;
justify-content: center;
gap: 30px;
margin-bottom: -50px;
max-width: 500px;
`

export const ContainerInputs = styled.div`
display: flex;
gap: 20px;
`

export const ContainerInputs2 = styled.div`
width: 500px;
`

export const Input = styled.input`
border-radius: 10px;
border: 1px solid #d2dae2;
background-color: #fff;
padding: 12px 20px;
width: 100%;
`

export const InputLabel = styled.label`
color: #fff;
font-size: 12px;
font-weight: 500;

span{
    color:#ef4f45;
    font-weight: bold;
}
`