# Prisma ORM, Just the Basics

## This repo servers as an example repo using Prisma with PostgreSQL, and Express

##### To run this locally:

 ```createdb pupsNstuff``` 

```git clone git@github.com:pawanbenjamin/simplePrisma.git```

```npm install```

Make sure to create a ```.env``` file with the following: (change to your username and password if you have one)
```DATABASE_URL="postgresql://janedoe:mypassword@localhost:5432/pupsNstuff?schema=public"```

##### DO NOT CHECK YOUR .ENV FILE INTO GITHUB!!!!

There is a file in ```db/demo``` which goes through basic crud queries

## For starting your own projects from scratch:
```npm install prisma @prisma/client```

  ```npx prisma init```
  
Change the db url in the newly generated ```.env``` file
```DATABASE_URL="postgresql://janedoe:mypassword@localhost:5432/<your db name>?schema=public"```

   ```npx prisma generate```
   
So later in your application, you can:
  
<img width="400" alt="Screen Shot 2022-04-14 at 8 54 09 PM" src="https://user-images.githubusercontent.com/62716484/163500929-976423a9-7a2b-4144-a768-5db6c2fd3a08.png">


You can build your schema in your ```prisma/schema.prisma``` file

To then perform the db migration (including running a prisma seed command if any exists) ->
```npx prisma migrate dev```

You can add this command in your `package.json` 
All you need to do is add a prisma portion, with a seed command running your local seed file:

![Screen Shot 2022-04-15 at 9 25 52 AM](https://user-images.githubusercontent.com/62716484/163576247-97c3d2dc-c251-425f-a102-df544a15791d.png)

While you develop, you can also push changes by
```npx prisma db push```

To only run the seed script ```npx prisma db seed```



### Note:
This repo drops and builds tables before running the seed file with ```prisma.$executeRaw```
## The following is from the Prisma Docs:

[MAIN DOCS](https://www.prisma.io/docs/)


[API SPECIFIC DOCS](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)


[CRUD OPERATIONS](https://www.prisma.io/docs/concepts/components/prisma-client/crud)


#### If you want to set up a project with Prisma From Scratch:
##### Setup a new Prisma project
  ```npx prisma init```

##### Generate artifacts (e.g. Prisma Client)
  ```npx prisma generate```


##### Browse your data
  ```npx prisma studio```

##### Create migrations from your Prisma schema, apply them to the database, seed data, and generate artifacts (e.g. Prisma Client)
  ```npx prisma migrate dev```
  
 ##### Pull the schema from an existing database, updating the Prisma schema
  ```npx prisma db pull```
Make sure you have your DATABASE_URL set in you ```.env``` file

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

