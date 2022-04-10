import { rest } from "msw";

export const handlers = [
    rest.post("/osa", (req, res, ctx) => {
        return res(
            ctx.json({
                success: true,
            })
        );
    }),
];
