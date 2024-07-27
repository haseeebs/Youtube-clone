export const VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const VIDEO_ID_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&id=`;

export const SEARCH_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const VIDEO_LIST = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&q=`;