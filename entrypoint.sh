#!/bin/sh

# Wait for the PostgreSQL server to start
#until pg_isready -h postgres-db -U postgres; do
 # echo "Waiting for the database to be ready..."
  #sleep 1
#done

# Apply any necessary database migrations using TypeORM
#npx typeorm migration:run

# Start your Nest.js application
npm start
