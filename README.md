# Piccolo

> An image optimization API

## API Documentation

**Endpoint `/optimization`**

- Body
    - `image`: The binary image (50mo max.) **required**
    - `mode`: The optimize mode (`aggressive`, `mid`, `shy`) defaults to `mid`

## Todo

- [ ] Add tests and CI
- [ ] Add Dockerfile

## Thanks

- [imagemin](https://github.com/imagemin/imagemin)
- [hapi modules](https://github.com/hapijs)