import VideoPlayer from '@/components/video-player';
import { NextPage } from 'next';
import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';

const StyledVideoPlayer = styled(VideoPlayer)`
  width:100%;
  max-width:600px;
  height:auto;
`

const EmbedPage: NextPage = () => (
  <>
    <Head>
      <title>Igor &lt;&gt; Stir - Video</title>
    </Head>
    <StyledVideoPlayer />
  </>
);

export default EmbedPage;
