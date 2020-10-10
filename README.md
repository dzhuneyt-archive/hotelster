# Hotelster

### Web based hotel and booking management

Current features include:
* Define "room types" (e.g. single, double, apartment) and price per "room type"
* Manage rooms with their attributes: room name, type, image
* Manage basic hotel information: Name, Address, Logo, Manager contact information
* Manage existing bookings in simple list and calendar view: edit, delete

# Screenshots

<a href="https://i.imgur.com/cqx7btF.png"><img src="https://i.imgur.com/cqx7btF.png" alt="Screenshot 1" width="250"/></a>
<a href="https://i.imgur.com/CpeZwIF.png"><img src="https://i.imgur.com/CpeZwIF.png" alt="Screenshot 1" width="250"/></a>
<a href="https://i.imgur.com/URZiNfd.png"><img src="https://i.imgur.com/URZiNfd.png" alt="Screenshot 1" width="250"/></a>
<a href="https://i.imgur.com/baAijvk.png"><img src="https://i.imgur.com/baAijvk.png" alt="Screenshot 1" width="250"/></a>

# Requirements

Node, NPM, Docker, Docker-Compose

# Development

1. Build the frontend: `cd ./apps/frontend && npm run build:watch`
2. Start the stack of Docker containers for local development: `npm run dev`
3. Open http://localhost:8081

# Tech:

* Backend, Rest APIs - Laravel
* Frontend - Angular
* Database - MariaDB
* Development environment - NPM, Docker, Docker-Compose, NGINX, Concurrently

## Code style

* Backend - PSR1 and PSR2
* Frontend - [Angular code style guide](https://angular.io/guide/styleguide)
