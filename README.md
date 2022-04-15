# simplePrisma, Just the Basics

#### Setup a new Prisma project
  ```npx prisma init```

#### Generate artifacts (e.g. Prisma Client)
  ```npx prisma generate```

#### Browse your data
  ```npx prisma studio```

#### Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  ```npx prisma migrate dev```
  
 #### Pull the schema from an existing database, updating the Prisma schema
  ```npx prisma db pull```


#### Push the Prisma schema state to the database
  ```npx prisma db push```

```prisma migrate dev``` (seed command is run here as well as pushing our schema to your db)
also there is ```prisma migrate deploy``` for dev

or ```prisma migrate reset```
Prisma Migrate resets the database and triggers seeding in the following scenarios:

You manually run the ```prisma migrate reset``` CLI command.
The database is reset interactively in the context of using prisma migrate dev - for example,
as a result of migration history conflicts or database schema drift.
When you want to use prisma migrate dev or prisma migrate reset without seeding, you can pass the --skip-seed flag.

Don't forget to ```npx prisma db seed```


### Deploy

```heroku apps:create your-app-name```

```heroku addons:create heroku-postgresql:hobby-dev```

```git push heroku main```

```heroku run npx prisma migrate deploy```

or 

```heroku run npx prisma db push```
```heroku run npx prisma db seed```

