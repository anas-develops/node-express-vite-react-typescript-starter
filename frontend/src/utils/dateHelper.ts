export const isDateWithinNDays = (date: Date, days: number) => {
    const today = new Date();
    const futureDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
    return (
        date.getTime() >= today.getTime() &&
        date.getTime() <= futureDate.getTime()
    );
};
