import VideoPlayer from '@/components/video-player';
import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';

const StyledVideoPlayer = styled(VideoPlayer)`
  width:100%;
  max-width:600px;
  height:auto;
`

const EmbedPage = () => (
  <>
    <Head>
      <title>Igor &lt;&gt; Stir - Video</title>
    </Head>
    <StyledVideoPlayer />
  </>
);

export default EmbedPage;
