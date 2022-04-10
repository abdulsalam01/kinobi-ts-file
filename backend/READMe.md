# Kinobi - backend
Media upload API to end-user with spesific user getters
by Abdul Salam

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run start:dev

# build for production and launch server
$ npm run build
$ npm run start
```

Running at:
```
localhost:3000
```

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `src` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.


### `repos`

Main logic of the application, using `database.json` as database (no need sql/nosql), as simple as that.


### `models`

Model of the api, there's consist 2 models; User and Files.
That correspondent model are using to handle user-auth and user-upload flow.


### `services`

This directory contains all layer function from repository module.


### `router`

Endpoint of the api