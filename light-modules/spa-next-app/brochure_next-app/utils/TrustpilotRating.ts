export function ratePerformance(rating: number): string {
    if (rating >= 0 && rating <= 1) {
        return "Poor";
    } else if (rating > 1 && rating <= 2) {
        return "Fair";
    } else if (rating > 2 && rating <= 3) {
        return "Good";
    } else if (rating > 3 && rating <= 4) {
        return "Very Good";
    } else if (rating > 4 && rating <= 5) {
        return "Excellent";
    } else {
        return "Invalid Rating"; // Handle invalid ratings outside the specified range
    }
}