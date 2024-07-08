import { getRandomInteger, createRandomIdFromRangeGenerator } from './util.js';

import {
  PICTURE_COUNT,
  MIN_RANDOM_ID,
  MAX_RANDOM_ID,
  MIN_RANDOM_LIKES,
  MAX_RANDOM_LIKES,
  MIN_RANDOM_COMMENTS,
  MAX_RANDOM_COMMENTS,
  MIN_RANDOM_AVATAR,
  MAX_RANDOM_AVATAR,
  MIN_RANDOM_MESSAGE,
  MAX_RANDOM_MESSAGE,
  MIN_RANDOM_PHOTO,
  MAX_RANDOM_PHOTO,
  PHOTO_DESCRIPTION,
  COMMENT_NAMES,
  COMMENT_MESSAGE
} from './constants.js';

const createMessage = () => Array.from(
  {length: getRandomInteger(MIN_RANDOM_MESSAGE, MAX_RANDOM_MESSAGE)},
  () => COMMENT_MESSAGE[getRandomInteger(0, COMMENT_MESSAGE.length - 1)]);

const createComments = () => ({
  id: [createRandomIdFromRangeGenerator(MIN_RANDOM_COMMENTS, MAX_RANDOM_COMMENTS)],
  avatar: `img/avatar-${getRandomInteger(MIN_RANDOM_AVATAR, MAX_RANDOM_AVATAR)}.svg`,
  message: createMessage(),
  name: COMMENT_NAMES[getRandomInteger(0, COMMENT_NAMES.length - 1)],
});

const createPhotoDescription = () => ({
  id: [getRandomInteger(MIN_RANDOM_ID, MAX_RANDOM_ID)],
  url: `photos/${ [getRandomInteger(MIN_RANDOM_PHOTO, MAX_RANDOM_PHOTO)] }.jpg`,
  description: PHOTO_DESCRIPTION[getRandomInteger(0, PHOTO_DESCRIPTION.length - 1)],
  likes: [getRandomInteger(MIN_RANDOM_LIKES, MAX_RANDOM_LIKES)],
  comments: Array.from(
    {length: getRandomInteger(MIN_RANDOM_COMMENTS, MAX_RANDOM_COMMENTS)},
    createComments),
});

const photoDescription = Array.from({length: PICTURE_COUNT}, createPhotoDescription);

export {photoDescription};
