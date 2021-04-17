import React from 'react';
import styled from 'styled-components'
import VideoPlayer from '@/components/video-player';

const VideoContainer = styled.div`
  background-color: rgb(250, 250, 250);
`

const Video = () => (
  <VideoContainer>
    <VideoPlayer
      src="https://stream.mux.com/fP01JD01eB5Q00KVFekCvA4zEueY8wJr00EN2mLtytNkLYk.m3u8"
      poster="https://image.mux.com/fP01JD01eB5Q00KVFekCvA4zEueY8wJr00EN2mLtytNkLYk/thumbnail.png?time=0" />
  </VideoContainer>
);


export default Video;