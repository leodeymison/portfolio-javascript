import { controller } from '@/presentation/contracts'

export const adaptResolverFilmsAll = async (controller: controller, page: number) => {
    const httpResponse = await controller.handle(page);
    return httpResponse.data
};

export const adaptResolverId = async (controller: controller, id:string) => {
    const httpResponse = await controller.handle(id)
    return httpResponse.data
};

export const adaptResolver = async (controller: controller) => {
    const httpResponse = await controller.handle()
    return httpResponse.data
};