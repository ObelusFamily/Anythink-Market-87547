# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

- [ ] [Install Docker.](https://docs.docker.com/get-docker/)
- [ ] Verify docker is ready by running the following commands in your terminal: `docker -v` and `docker-compose -v`.
- [ ] Run `docker-compose up` **from the project root directory** to load Anythink's backend and frontend.
- [ ] **Pointing your browser to** http://localhost:3000/api/ping
- [ ] Create a new user on http://localhost:3001/register
- [ ] Just make sure that you run all scripts in the next quests on one of the containers created by `docker-compose up`.  Also, you can use `docker exec` to run commands on a running container.
