export const getTimeDate = (date) => new Date(date).getTime();

export const getUTCDate = (d) => {
  const date = new Date(d);
  const now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

  return new Date(now_utc);
};
