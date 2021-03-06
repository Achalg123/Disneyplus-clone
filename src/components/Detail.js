import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
              <img src="data:image/jpeg;base64,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"/>  
            </Background>
            <ImageTitle>
               <img src="data:image/jpeg;base64,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"/> 
            </ImageTitle>

            <Control>
               <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>Play</span>
               </PlayButton>
               <TrailorButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>Trailor</span> 
               </TrailorButton>
               <AddButton>
                    <span>+</span>
               </AddButton>
               <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
               </GroupWatchButton>
            </Control>
            <SubTitle>
                2021 . 7m . Family, Kids, Animation
            </SubTitle>
            <Description>
            The Company operates in four business segments: Media Networks, Parks, Experiences and Products, Studio Entertainment, and Direct-To-Consumer (DTC) and International. ... The Company's International Channels produce local programs or acquire rights from its domestic studios and from third parties.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
      min-height:calc(100vh-70px);
      padding: 0 calc(3.5vw + 5px);
      position:relative;
`
const Background = styled.div`
      position: fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index:-1;

      img{
          width:100%;
          height:100%;
          object-fit : cover;
      }

`

const ImageTitle = styled.div`
      height: 30vh;
      min-height:170px;
      width:35vw;
      min-width:200px;
      margin-top:60px;

      img{
          width:100%;
          height:100%;
          over-fit:contain;
      }

`

const Control = styled.div`
       display:flex;
       align-items:center;
`

const PlayButton = styled.button`
       border-radius:4px;
       font-size:15px;
       padding:0px 24px;
       margin-right:22px;
       display: flex;
       align-items:center;
       height:56px;
       background:rgb(249,249,249);
       border:none;
       letter-spacing:1.8px;
       cursor:pointer;

       &:hover{
           background:rgb(198,198,198);
       }

`

const TrailorButton = styled(PlayButton)`

      background:rgba(0 , 0, 0, 0.3);
      border:1px solid rgb(249,249,249);
      color:rgb(249,249,249);
      text-transform:uppercase;
`

const AddButton = styled.button`

      margin-right:16px;
      width:44px;
      height:44px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      border:2px solid white;
      background: rgba(0 ,0, 0, 0.6);
      cursor:pointer;

      span{
          font-size:30px;
          color:white;
      }

`

const GroupWatchButton = styled(AddButton)`
       background:rgb(0,0,0);
`

const SubTitle = styled.div`

     color: rgb(249,249,249);
     font-size:15px;
     min-height:20px;
     margin-top:26px;

`

const Description= styled.div`

      line-height:1.4;
      font-size:20px;
      margin-top:16px;
      color: rgb(249,249,249);
      max-width:760px;

`