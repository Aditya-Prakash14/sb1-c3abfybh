// Assuming timeUtils.ts
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


export const calculateTimeLeft = (targetDateStr: string): TimeLeft => {
  try {
      console.log("calculateTimeLeft called with:", targetDateStr);
    const targetDate = new Date(targetDateStr);
     if (isNaN(targetDate.getTime())) {
      console.error("Invalid target date string:", targetDateStr);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
     }


    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
     console.log("Time Difference:", difference)
    if (difference > 0) {
       const seconds = 1000;
       const minutes = seconds * 60;
       const hours = minutes * 60;
       const days = hours * 24;

         return {
           days: Math.floor(difference / days),
           hours: Math.floor((difference % days) / hours), // Modulo for 24-hour
           minutes: Math.floor((difference % hours) / minutes), // Modulo for minutes
           seconds: Math.floor((difference % minutes) / seconds)  // Modulo for seconds
         };
     }
  } catch (error) {
    console.error("Error calculating time left:", error);
  }
   return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};