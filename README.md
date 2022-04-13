# Prisma Basics

## simplePrisma

This is done for you already:
```npx prisma```
```npx prisma init```

Dont forget to:
Setup a db URL in a .env file in the following format:
```DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"```

Define your own schema in schema.prisma file if you like

When you make changes in your schema, run:
```npx prisma migrate dev```

For deployment:
```npx prisma migrate deploy```
