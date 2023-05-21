import React from 'react'
import { Player, BigPlayButton ,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton} from 'video-react';
import { useGlobalContext } from './context/fetchContext'
import styled from 'styled-components';
import './styles/scss/video-react.scss';
import Loading from './componants/Loading';


const Video = () => {
   const  {video,loading}  = useGlobalContext();
    // console.log(video);
   if ((video.length < 1)) {
      return (
      <main className='section'>
        <h2 className='section-title'>
        no cocktails matched your search criteria
       </h2>
      </main>
    )}
    return (
    <Wrapper>
      {video.map((video,index)=>{
        return(
        <div key={index} className="vid">
        <Player src={video.urls}>
        <ControlBar autoHide={true}>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
          </div>
        )
      })}
    <div>
      {loading && <Loading />}
    </div>
    </Wrapper>
  )
   }

export default Video

const Wrapper = styled.section`
      width:75vw;
      margin:0 auto;
       display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-flow: dense;
      margin-top: 1.5rem;
      margin-bottom:2rem;
        
      .vid{
        display:flex;
        flex-direction:column;

      }
      .load{
        display:flex;
        justify-content:center;
      }

`