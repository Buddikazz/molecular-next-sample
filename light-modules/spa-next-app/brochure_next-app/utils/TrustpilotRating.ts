// eslint-disable-next-line import/prefer-default-export
export function ratePerformance(rating: number): string {
  if (rating >= 0 && rating <= 1) {
    return "Poor";
  }
  if (rating > 1 && rating <= 2) {
    return "Fair";
  }
  if (rating > 2 && rating <= 3) {
    return "Good";
  }
  if (rating > 3 && rating <= 4) {
    return "Very Good";
  }
  if (rating > 4 && rating <= 5) {
    return "Excellent";
  }
  return "Invalid Rating"; // Handle invalid ratings outside the specified range
}
