import React from 'react';
import styled from 'styled-components'
import VideoPlayer from '@/components/video-player';

const StyledVideoPlayer = styled(VideoPlayer)``;

const VideoContainer = styled.div`
  background-color: rgb(250, 250, 250);

  ${StyledVideoPlayer} {
    display: block;
    margin: auto;
    width: 1050px;
    max-width: 100%;
    cursor: pointer;
  }
`

const Video: React.FC = () => (
  <VideoContainer>
    <StyledVideoPlayer />
  </VideoContainer>
);


export default Video;