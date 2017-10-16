# Piccolo

[![Dependency Status](https://david-dm.org/yurplan/piccolo.svg)](https://david-dm.org/yurplan/piccolo)
[![devDependency Status](https://david-dm.org/yurplan/piccolo/dev-status.svg)](https://david-dm.org/yurplan/piccolo#info=devDependencies)
[![Build Status](https://travis-ci.org/yurplan/piccolo.svg?branch=master)](https://travis-ci.org/yurplan/piccolo)
[![Coverage Status](https://coveralls.io/repos/yurplan/piccolo/badge.svg?branch=master)](https://coveralls.io/r/yurplan/piccolo?branch=master)

> An image optimization API

## API Documentation

**Endpoint `/optimization`**

- Body
    - `image`: The binary image (50mo max.) **required**
    - `mode`: The optimize mode (`aggressive`, `mid`, `shy`) defaults to `mid`

## Usage

**Docker**
```
docker build -t piccolo .
docker run -p 3000:3000 -it piccolo
```

**Standard**
```
npm install
npm start
```

## Todo

### v1.0.0
- [x] Add tests and CI
- [ ] Write some documentation on a Github page
- [x] Add Dockerfile
- [ ] Publish the Docker image

### v1.1.0
- [ ] Add configuration file
- [ ] Add the resizing feature

## Thanks

- [imagemin](https://github.com/imagemin/imagemin)
- [hapi modules](https://github.com/hapijs)
