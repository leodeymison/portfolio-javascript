import { Request, Response } from 'express'
import { Controller } from '@/presentation/contracts'

export const adaptRouteArgs = (controller: Controller) => { // adapter
  return async (req: Request, res: Response) => {
    try {
      const httpResponse = await controller.handle(req.body)
      res.status(httpResponse.statusCode).json(httpResponse.data)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}
export const adaptRoute = (controller: Controller) => { // adapter
  return async (req: Request, res: Response) => {
    try {
      const httpResponse = await controller.handle()
      res.status(httpResponse.statusCode).json(httpResponse.data)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}
