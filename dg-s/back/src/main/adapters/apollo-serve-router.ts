import { Controller } from '@/presentation/contracts'

export const adaptResolver = async (controller: Controller): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
export const adaptResolverSave = async (controller: Controller, params: any): Promise<any> => {
  const httpResponse = await controller.handle(params)
  return httpResponse.data
}
