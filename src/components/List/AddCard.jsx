import React from 'react'
import styled from 'styled-components'

const AddCard = ({cartTitle,id}) => {
  
  
  return (
    <AddCardStyle  key={id}>
    
    {cartTitle }
     
    
     
    </AddCardStyle>
  )
}
const AddCardStyle= styled("div")`

height: 30px;
border-radius: 5px;
background-color: #2c2929;
margin: 10px;
 
 
`

export default AddCard
