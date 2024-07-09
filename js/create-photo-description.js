import { getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement } from './util.js';

import {
  PICTURE_COUNT,
  MIN_RANDOM_ID,
  MAX_RANDOM_ID,
  MIN_RANDOM_LIKES,
  MAX_RANDOM_LIKES,
  MIN_RANDOM_COMMENTS_ID,
  MAX_RANDOM_COMMENTS_ID,
  MIN_RANDOM_AVATAR,
  MAX_RANDOM_AVATAR,
  MIN_RANDOM_MESSAGE,
  MAX_RANDOM_MESSAGE,
  MIN_RANDOM_PHOTO,
  MAX_RANDOM_PHOTO,
  PHOTO_DESCRIPTION,
  COMMENT_NAMES,
  COMMENT_MESSAGE,
} from './constants.js';

const createMessage = () => Array.from(
  {length: getRandomInteger(MIN_RANDOM_MESSAGE, MAX_RANDOM_MESSAGE)},
  () => getRandomArrayElement(COMMENT_MESSAGE));

const createComments = () => ({
  id: [createRandomIdFromRangeGenerator(MIN_RANDOM_COMMENTS_ID, MAX_RANDOM_COMMENTS_ID)],
  avatar: `img/avatar-${getRandomInteger(MIN_RANDOM_AVATAR, MAX_RANDOM_AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(COMMENT_NAMES),
});

const createPhotoDescription = () => ({
  id: [getRandomInteger(MIN_RANDOM_ID, MAX_RANDOM_ID)],
  url: `photos/${ [getRandomInteger(MIN_RANDOM_PHOTO, MAX_RANDOM_PHOTO)] }.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION),
  likes: [getRandomInteger(MIN_RANDOM_LIKES, MAX_RANDOM_LIKES)],
  comments: Array.from(
    {length: getRandomInteger(MIN_RANDOM_COMMENTS_ID, MAX_RANDOM_COMMENTS_ID)},
    createComments),
});

const photoDescription = Array.from({length: PICTURE_COUNT}, createPhotoDescription);

export {photoDescription};
