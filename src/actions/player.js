import types from './types';

/**
 * @param {Object} param
 * @param {number} param.songId
 * @param {string} param.songName
 * @param {number} param.songSeconds
 * @param {string} param.songAlbum
 * @param {string} param.songArtist
 * @param {string} param.albumCover
 */
export const addToQueue = ({
  songId, songName, songSeconds, songAlbum, songArtist, albumCover
}) => ({
  type: types.ADD_TO_QUEUE,
  songId,
  songName,
  songSeconds,
  songAlbum,
  songArtist,
  albumCover
});

/**
 * @param {number} songId
 */
export const removeFromQueue = (songId) => ({
  type: types.REMOVE_FROM_QUEUE,
  songId
});

export const consumeFromQueue = () => ({
  type: types.CONSUME_FROM_QUEUE,
})

export const clearQueue = () => ({
  type: types.CLEAR_QUEUE,
})

/**
 * @param {Array} newQueue
 */
export const replaceQueue = (newQueue) => ({
  type: types.REPLACE_QUEUE,
  newQueue,
})

