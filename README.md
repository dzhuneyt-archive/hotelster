# 24598. Test Assignment for Laravel _ Frontend 

https://app.codeline.io/#/projects/2562/tasks/24598

# Development

## Configure DB credentials

Copy .env.example to .env and configure DB credentials for Laravel

## Migrate and seed the database

    composer dump-autoload && php artisan migrate:refresh --seed
    
## Start the lite server for REST APIs

    composer serve
    
## Install frontend dependencies

    cd frontend && npm install
    
## Start the frontend lite server

    cd frontend && npm run start

Open http://localhost:4200

# Contributing

## Code style

Code style should follow PSR-1 and PSR-2 practices for PHP files
