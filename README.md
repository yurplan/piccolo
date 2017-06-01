# Piccolo

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
npm run
```

## Todo

### v1.0.0
- [ ] Add tests and CI
- [ ] Write some documentation on a Github page
- [x] Add Dockerfile
- [ ] Publish the Docker image

### v1.1.0
- [ ] Add the resizing feature

## Thanks

- [imagemin](https://github.com/imagemin/imagemin)
- [hapi modules](https://github.com/hapijs)
