# DG Solutions

## Infra

<img src="infra.png" />
<p>
    My main goal of using clean architecture is to make the application not dependent on anything external, thus making it easier to maintain, test and change a technology.
</p>

### Request and response flow

Before

```ts
export default (router: Router): void => {
  router.post(
    "/registers",
    async (req: Request, res: Response): Promise<void> => {
      const repo = new RegisterResopitory();
      const loader = new RegistorSaveService(repo);
      const constroller = new SaveRegisterController(loader);
      const httpResponse = await constroller.handle(req.body);
      res.status(httpResponse.statusCode).json(httpResponse.data);
    }
  );
};
```

After

```ts
export default (router: Router): void => {
  /* @/data/routes */
  router.post("/registers", adaptRouteArgs(makeControllerRegisterSave()));
};

export const adaptRouteArgs = (controller: Controller) => {
  /* @/data/adapter */
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req.body);
    res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};

export const makeControllerRegisterSave = (): Controller => {
  /* @/data/factory */
  const repo = new RegisterResopitory();
  const loader = new RegistorSaveService(repo);
  return new SaveRegisterController(loader);
};
```

## Initialization

```js
yarn;
```

```js
/* Create .env and change information */
```

```js
/* Create database */
npx sequelize-cli db:create
```

```js
/* migrate database */
npx sequelize-cli db:migrate
```

```js
/* initial data for the database */
npx sequelize-cli db:seed:all
```

```js
yarn dev
```

```js
Graphql:
http://localhost:5000/graphql

Rest:
http://localhost:5000/api/registers
```
