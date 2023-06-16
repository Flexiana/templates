# {{main/ns}}

FIXME: description

## Usage

### Start dockerized PostgreSQL

```shell
docker-compose up -d
```

### Log into psql console

```shell
psql -U postgres -p 5433 -h localhost
```

### Prepare node-dependencies

```shell
npm install
```

## Development: starting the system

Jack in a repl, execute

```clojure
(user/start-dev-system)
```

It will start up the shadow watch and the backend. It can be used to restart the whole application too.

### Try {{main/ns}}

```shell
curl http://localhost:3000/
```

### Open re-frame app

```shell
open http://localhost:3000/re-frame
```

## Production: build frontend and run the backend

### Frontend release

```shell
npx shadow-cljs release app
```

### Backend

#### Config

Create your configuration file in `config/prod/config.edn`.
Hint: You can copy `config/dev/config.edn` to `config/prod/config.edn` and tune it for your need.

#### Run backend

```shell
clj -X:prod
```

#### Try {{main/ns}}

```shell
curl http://localhost:3000/
```

#### Open re-frame app

```shell
open http://localhost:3000/re-frame
```

## Framework's documentation

[Xiana readme](https://github.com/Flexiana/framework#readme)
