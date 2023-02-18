import React from 'react'
import styled from 'styled-components'

const StyledPhoto = styled.div` 
   display: flex;
   flex-direction: column;
   align-items: center;

   h3{
    font-size: 2rem;
    color: ${pr => pr.theme.secondaryColor};
   }
  
  .date{
    color: ${pr => pr.theme.primaryColor};
   }

  .explanation {
    max-width: 50%;
    color: ${pr => pr.theme.thirdColor};
  }
  
  img {
    max-width: 50%;
    object-fit: cover;
  }
  
`

const NasaPhoto = (props) => {
    return (
        <StyledPhoto className='nasa-photo-wrapper'>
            <h3>{props.photo.title}</h3>
            <p className='date'>{props.photo.date}</p>
            <img src ={props.photo.hdurl} />
            <p className='explanation'>{props.photo.explanation}</p>
        </StyledPhoto>
    )
}

export default NasaPhoto;