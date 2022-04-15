# simplePrisma, Just the Basics

This repo servers as a starter, of a simple relational db schema, served with express

##### To Try and finish building functionality locally:

```git clone git@github.com:pawanbenjamin/simplePrisma.git``
```npm install``
 ```createdb pupsNstuff``` locally

Make sure to create a ```.env``` file with
```DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=myschema"``` DO NOT CHECK INTO GITHUB

### Straight from the Prisma Docs:

##### Setup a new Prisma project
  ```npx prisma init```

##### Generate artifacts (e.g. Prisma Client)
  ```npx prisma generate```
  (so you can):
  
<img width="400" alt="Screen Shot 2022-04-14 at 8 54 09 PM" src="https://user-images.githubusercontent.com/62716484/163500929-976423a9-7a2b-4144-a768-5db6c2fd3a08.png">


##### Browse your data
  ```npx prisma studio```

##### Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  ```npx prisma migrate dev```
  
 ##### Pull the schema from an existing database, updating the Prisma schema
  ```npx prisma db pull```


##### Push the Prisma schema state to the database
  ```npx prisma db push```

```prisma migrate dev``` (seed command is run here as well as pushing our schema to your db)
also there is ```prisma migrate deploy``` for dev

or ```prisma migrate reset```
Prisma Migrate resets the database and triggers seeding in the following scenarios:

You manually run the ```prisma migrate reset``` CLI command.
The database is reset interactively in the context of using prisma migrate dev - for example,
as a result of migration history conflicts or database schema drift.
When you want to use prisma migrate dev or prisma migrate reset without seeding, you can pass the --skip-seed flag.

#### Don't forget to ```npx prisma db seed```


## Deployment:

```heroku apps:create your-app-name```

```heroku addons:create heroku-postgresql:hobby-dev```

```git push heroku main```

```heroku run npx prisma migrate deploy```

or 

```heroku run npx prisma db push```
```heroku run npx prisma db seed```

To drop tables and reset the database...
```npx prisma migrate reset```
