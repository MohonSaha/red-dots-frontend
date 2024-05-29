export function getNextDonationDate(lastDonationDate: string) {
  const lastDate = new Date(lastDonationDate);

  if (isNaN(lastDate.getTime())) {
    throw new Error("Invalid date provided");
  }

  // Calculate the next donation date by adding 4 months to the last donation date
  const nextDonationDate = new Date(lastDate);
  nextDonationDate.setMonth(nextDonationDate.getMonth() + 4);

  // Adjust the day if adding months changes the day (e.g., from 31st to 1st)
  if (nextDonationDate.getDate() !== lastDate.getDate()) {
    nextDonationDate.setDate(0);
  }

  // Ensure nextDonationDate is at least today
  const now = new Date();
  if (nextDonationDate.getTime() < now.getTime()) {
    nextDonationDate.setFullYear(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
  }

  // console.log("Next Donation Date:", nextDonationDate);

  return {
    nextDonationDate: nextDonationDate,
    countdown: calculateCountdown(nextDonationDate),
  };
}

export function calculateCountdown(nextDonationDate: Date) {
  const now = new Date();
  // console.log("Current Date:", now);
  // console.log("Next Donation Date:", nextDonationDate);
  const diffTime = Math.max(nextDonationDate.getTime() - now.getTime(), 0);

  // console.log("Time Difference (ms):", diffTime);

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const months = Math.floor(diffDays / 30);
  const days = diffDays % 30;

  const remainingTimeAfterDays = diffTime - diffDays * 1000 * 60 * 60 * 24;
  const hours = Math.floor(remainingTimeAfterDays / (1000 * 60 * 60));

  const remainingTimeAfterHours =
    remainingTimeAfterDays - hours * 1000 * 60 * 60;
  const minutes = Math.floor(remainingTimeAfterHours / (1000 * 60));

  const remainingTimeAfterMinutes =
    remainingTimeAfterHours - minutes * 1000 * 60;
  const seconds = Math.floor(remainingTimeAfterMinutes / 1000);

  return {
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

// Example usage:
// const result = getNextDonationDate("2023-01-29T00:00:00Z");
// console.log("Next Donation Date:", result.nextDonationDate);
// console.log("Countdown:", result.countdown);
