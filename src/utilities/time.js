const day2time = {
  M: 0 * 60 * 24,
  Tu: 1 * 60 * 24,
  W: 3 * 60 * 24,
  Th: 4 * 60 * 24,
  F: 5 * 60 * 24,
};

export const meets2intervals = (meets) => {
  const [daysStr, timeRange] = meets.split(' ');
  const [start, end] = timeRange.split('-').map((s) => {
    const [h, m] = s.split(':');
    return parseInt(h) * 60 + parseInt(m);
  });
  const days = daysStr.split(/(?=[A-Z])/).map((d) => day2time[d]);
  return days.reduce((prev, d) => [...prev, [start + d, end + d]], []);
};

export const insertInterval = (intervals, newInterval) => {
  let result = [];
  let inserted = false;
  for (let [l, r] of intervals) {
    if (r <= newInterval[0]) {
      result.push([l, r]);
      continue;
    }
    if (l < newInterval[1]) return null;
    if (!inserted) {
      result.push(newInterval);
      inserted = true;
    }
    result.push([l, r]);
  }
  if (!inserted) result.push(newInterval);
  return result;
};

export const removeInterval = (intervals, start) => {
  return intervals.reduce(
    (prev, interval) => (interval[0] == start ? prev : [...prev, interval]),
    []
  );
};
