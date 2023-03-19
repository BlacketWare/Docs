## ```/worker/proxy```
This is an HTTP request that returns safe versions of images in chat (removes IP loggers).<br>
Used in `src` elements.<br>
Sending a request downloads the file.

Request:
```
GET /worker/proxy/x
x : base64-encoded URL that ends with mp4, gif, jpg, or png.
```
