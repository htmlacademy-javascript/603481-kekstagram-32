const DESCRIPTION = ['Пляж не далеко от города', 'Указатель с надписью "GO TO THE BEACH"', 'Фото пляжа', 'Девушка с фотоаппаратом на пляже', 'Суп с рисовыми фигурками', 'Машина на улице с откратыми дверями', 'Дошечка с дольками клубники', 'Кружки с напитком и виноградом', 'Девушка на пляже смотрит на летящий самолет', 'Обувь на подставке', 'Дорога с огороженной зулунью', 'Машина возле гаража', 'Вкусный салат', 'Кот в бутерброде', 'столик с диваном', 'Небо с самолетом в далеке', 'Аркестр', 'Машина в каменном здании', 'Девушкаины ноги подходят к шкафу', 'Отель с пальмами', 'на столе лежит тарелка с салатом и вилка', 'Закат на пляже', 'Краб на камне' , 'Люди на концерте'];

const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Артём', 'Иван', 'Екатерина', 'Анна', 'Борис', 'Генадий', 'Вячеслав', 'Никита', 'Ольга', 'Олег', 'Инакентий', 'Елена', 'Сватлана', 'Григорий'];

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createFormData = () => ({
  id: [getRandomInteger(1, 25)],
  url: `photos/${ [getRandomInteger(1, 25)] }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: [getRandomInteger(15, 200)],
  commentsId: [getRandomInteger(1, 30)],
  message: getRandomArrayElement(MESSAGE),
  avatar: `img/${ [getRandomInteger(0, 6)] }.svg`,
  name: getRandomArrayElement(NAMES),
});
createFormData();

// Array.from({length: 25}, createFormData);
