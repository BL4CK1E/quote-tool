import dayjs from 'dayjs';

const genDate = value => {
  const date = dayjs(Number(value));
  return `${date.format('D MMM YYYY')}`;
};

export default genDate;
