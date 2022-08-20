import { controller } from "@/presentation/contracts";
import { Request, Response } from "express";

export const adaptRouteFilmsAll = (controller: controller) => {
    /* @/data/adapter */
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle(parseInt(`${req.query.page}`));
        res.status(httpResponse.statusCode).json(httpResponse.data);
    };
};
export const adaptRouteId = (controller: controller) => {
    /* @/data/adapter */
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle(req.params.id)
        res.status(httpResponse.statusCode).json(httpResponse.data)
    };
};
export const adaptRoute = (controller: controller) => {
    /* @/data/adapter */
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle()
        res.status(httpResponse.statusCode).json(httpResponse.data)
    };
};