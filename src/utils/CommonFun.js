export const timeChange = (dateValue) => {
  const date = new Date(dateValue);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let weekDay = date.getDay();
  if (weekDay === 0) {
    weekDay = "일요일";
  } else if (weekDay === 1) {
    weekDay = "월요일";
  } else if (weekDay === 2) {
    weekDay = "화요일";
  } else if (weekDay === 3) {
    weekDay = "수요일";
  } else if (weekDay === 4) {
    weekDay = "목요일";
  } else if (weekDay === 5) {
    weekDay = "금요일";
  } else if (weekDay === 6) {
    weekDay = "토요일";
  }

  return `${year}. ${month < 10 ? "0" + month : month}. ${
    day < 10 ? "0" + day : day
  }. ${weekDay}`;
};
