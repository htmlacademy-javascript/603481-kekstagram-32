const DESCRIPTION = ['Пляж не далеко от города', 'Указатель с надписью "GO TO THE BEACH"', 'Фото пляжа',
  'Девушка с фотоаппаратом на пляже', 'Суп с рисовыми фигурками', 'Машина на улице возле дома с откратыми дверями',
  'Дошечка с дольками клубники', 'Кружки с напитком и виноградом', 'Девушка на пляже смотрит на летящий самолет',
  'Обувь на подставке', 'Дорога с огороженной зулунью', 'Машина возле гаража', 'Вкусный салат', 'Кот в бутерброде',
  'столик с диваном', 'Небо с самолетом в далеке', 'Аркестр', 'Машина в каменном здании',
  'Девушкаины ноги подходят к шкафу', 'Отель с пальмами', 'на столе лежит тарелка с салатом и вилка', 'Закат на пляже',
  'Краб на камне' , 'Люди на концерте'];

const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Артём', 'Иван', 'Екатерина', 'Анна', 'Борис', 'Генадий', 'Вячеслав', 'Никита', 'Ольга', 'Олег',
  'Инакентий', 'Елена', 'Сватлана', 'Григорий'];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = function (min, max) {
  const previousValues = new Set();

  return () => {
    if (previousValues.size >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }

    let currentValue;
    do {
      currentValue = getRandomInteger(min, max);
    } while (previousValues.has(currentValue));

    previousValues.add(currentValue);
    return currentValue;
  };
};

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => COMMENTS[getRandomInteger(0, COMMENTS.length - 1)]);

const createComments = () => ({
  id: [createRandomIdFromRangeGenerator(1, 30)],
  avatar: `img/avatar-${getRandomInteger(1, 25)}.svg`,
  message: createMessage(),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createPhotoDescription = () => ({
  id: [getRandomInteger(1, 25)],
  url: `photos/${ [getRandomInteger(1, 25)] }.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: [getRandomInteger(15, 200)],
  comments: Array.from(
    {length: getRandomInteger(1, 30)},
    createComments),
});

const photoDescription = Array.from({length: 25}, createPhotoDescription);
photoDescription.at(0); // Чтобы избежать ошибки ESlint "неиспользуемая переменная"
