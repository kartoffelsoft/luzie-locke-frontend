import moment from 'moment';

export const getFromNowString = (s) => {
  return moment(new Date(s)).fromNow();
};
