export function getNextDonationDate(lastDonationDate: string) {
  const lastDate = new Date(lastDonationDate);

  if (isNaN(lastDate.getTime())) {
    throw new Error("Invalid date provided");
  }

  const nextDonationDate = new Date(lastDate);
  nextDonationDate.setMonth(nextDonationDate.getMonth() + 4);

  if (nextDonationDate.getDate() !== lastDate.getDate()) {
    nextDonationDate.setDate(0);
  }

  return {
    nextDonationDate: nextDonationDate,
    countdown: calculateCountdown(nextDonationDate),
  };
}

export function calculateCountdown(nextDonationDate: Date) {
  const now = new Date();
  const localOffset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localTime = now.getTime() - localOffset; // Convert to local time

  const diffTime = Math.max(nextDonationDate.getTime() - localTime, 0);

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
