import styled from "styled-components"
import { motion } from "framer-motion"



export const Principaldiv = styled(motion.div)`
position: relative;
overflow:hidden;
border-radius: 15px;
perspective:1000px;

cursor: pointer;

`
export const Divworld = styled.div`


`
export const Span = styled.span`
text-transform:uppercase;
font-weight: bold;
`
export const ButtonBuy = styled.button`
 background-color: ${props => props.cor || '#f4c430'} ;
 color:black;
 width: 6vw;
 height: 5vh;
 font-weight: bold;
 border-radius:10px ;
 :hover{
     color: #FFF;
 }
`
export const Circle = styled.div`
width: 22vw;
height: 22vw;
background-color:${props => props.cor || '#f4c430'} ;
position: absolute;
top:-7vh;
right:-7vw;
border-radius:100% 100% 100% 100%  ;

`
export const ImgLogo = styled.img`
width: 3vw;

`
export const Tenis = styled(motion.div)`


`