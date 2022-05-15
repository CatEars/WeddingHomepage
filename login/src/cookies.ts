import { serialize } from "cookie";

export const generateCookie = (token: string): string => {
    const currentDate = new Date();
    const fiveDaysAhead = currentDate.getDate() + 5;
    const targetDate = new Date();
    targetDate.setDate(fiveDaysAhead);
    return serialize("secret_token", token, {
        expires: targetDate,
        path: "/",
        sameSite: true,
        secure: true,
    });
};
