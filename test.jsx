export const useClock = () => {
  const [time, setTime] = useState(new Date());
  // Update the time every second
  const intervalId = setInterval(() => {
    setTime(new Date());
  }, 1000);
  // Cleanup the interval on hook unmount
  clearInterval(intervalId);
  // Cleanup the interval when the component using the hook unmounts
  return { time };
};
