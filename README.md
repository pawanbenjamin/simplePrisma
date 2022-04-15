# Prisma ORM, Just the Basics

## This repo servers as an example repo using Prisma with PostgreSQL, and Express

##### To run this locally:

```git clone git@github.com:pawanbenjamin/simplePrisma.git```

```npm install```

 ```createdb pupsNstuff``` locally

Make sure to create a ```.env``` file with
```DATABASE_URL="postgresql://janedoe:mypassword@localhost:5432/mydb?schema=public"```

##### DO NOT CHECK INTO GITHUB!!!!

###### For starting your own projects:

You can build your schema in your ```prisma/schema.prisma``` file

To then perform the db migration:
```npx prisma migrate dev```

While you develop, you can also push changes by
```npx prisma db push```

When seeding needed, run ```npx prisma db seed``` to run the seed file at ```db/seed.js```

Don't forget in your `package.json` add a prisma portion, with a seed command running your seed file:

![Screen Shot 2022-04-15 at 9 25 52 AM](https://user-images.githubusercontent.com/62716484/163576247-97c3d2dc-c251-425f-a102-df544a15791d.png)

##### This repo drops and builds tables before seeding

## The following is from the Prisma Docs:

[MAIN DOCS](https://www.prisma.io/docs/)


[API SPECIFIC DOCS](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)


[CRUD OPERATIONS](https://www.prisma.io/docs/concepts/components/prisma-client/crud)


#### If you want to set up a project with Prisma From Scratch:
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
Make sure you have your DATABASE_URL in you ```.env``` file

##### Push the Prisma schema state to the database
  ```npx prisma db push```

```npx prisma migrate dev``` (seed command is run here as well as pushing our schema to your db)
also there is ```prisma migrate deploy``` for dev

or ```npx prisma migrate reset```
Prisma Migrate resets the database and triggers seeding in the following scenarios:

1.You manually run the ```npx prisma migrate reset``` CLI command.

2.The database is reset interactively in the context of using prisma migrate dev 
   - for example, as a result of migration history conflicts or database schema drift.

---> When you want to use ```npx prisma migrate dev``` or ```npx prisma migrate reset``` without seeding, 
---> you can pass the ``` --skip-seed``` flag.



# Deploying this Application via Heroku:

```heroku apps:create your-app-name```

```heroku addons:create heroku-postgresql:hobby-dev```

```git push heroku main```

```heroku run npx prisma migrate deploy```

or 

```heroku run npx prisma db push```,
```heroku run npx prisma db seed```

