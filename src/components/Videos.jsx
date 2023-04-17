import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChanelCard } from './';

const Videos = ({ videos }) => {
	console.log(videos);
	return (
		<Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
			{videos.map((item, idx) => (
				<Box key={idx}>
					{item.id.videoId}
					{item.id.channelId}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
//&& <VideoCard video={item} />
//&& <ChanelCard video={item} />
