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

- [ ] Add tests and CI
- [ ] Add Dockerfile

## Thanks

- [imagemin](https://github.com/imagemin/imagemin)
- [hapi modules](https://github.com/hapijs)