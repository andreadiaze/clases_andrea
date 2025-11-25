## Docs:

- express: https://expressjs.com/en/starter/hello-world.html
- prettier install: https://prettier.io/docs/install
- prettier config: https://prettier.io/docs/configuration

## Development instructions

Prepare code

- `pnpm run clean`: Delete git ignored files
- `pnpm install`: Install dependencies
- `pnpm approve-builds`: (Optional) Approve post-install scripts
- `pnpm up --latest`: (Optional) Update dependencies to the last version

Format code

- `pnpm run format`: Run prettier
- `pnpm run lint`: Run eslint
- `pnpm run typecheck`: Run type checker

Prepare database

- `docker compose down -v`: (Optional) Destroy development containers and their volumes
- `docker compose up -d`: Launch development containers
- `pnpm run db:generate`: Update migration files
- `pnpm run db:migrate`: Run migrations

Start

- `pnpm run dev`: Run application in development and watch mode

## Dependencies

- [x] prettier
- [x] typescript-eslint | eslint | @eslint/js | globals
  - eslint-config-prettier
  - eslint-plugin-check-file
- [x] typescript | @types/node | tsx | tsc-alias
- [x] express | @types/express
- [x] dotenv
- [x] http-status-codes
- [x] drizzle-orm | drizzle-kit | pg | @types/pg
