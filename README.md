# simplePrisma, Just the Prisma Basics

### Reference commands to start from scratch:

(This is done for you already)
```npx prisma```
```npx prisma init```

Dont forget to:
Setup a db URL in a .env file in the following format:
```DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"```

You can define your own schema in schema.prisma file if you like, then:
```npx prisma migrate dev``` ||
```npx prisma db push```

To pull an existing db, make sure you have a valid URL, and run:
```npx prisma db pull```

When you make changes in your schema, run:
```npx prisma migrate dev```

For deployment:
```npx prisma migrate deploy```
