### ```/worker/otp/```
This is an HTTP request tree that includes OTP, or 2FA.

#### /worker/otp/generate
This is an HTTP **get** request that generates a 2FA QR code.

Response structure:
```
Object
    error   : bool - Has an error occured?
    qr      : string - The SRC of the QR code.
```

#### /worker/otp/enable
This is an HTTP **post** request that allows you to enable 2FA.

Request structure:
```
Object
    code : string - a code sent to the phone that you're enabling 2FA on.
```

Response structure:
```
Object
    error   : bool - Has an error occured? If this is false, you have enabled 2FA.
```

#### /worker/otp/disable
This is an HTTP **post** request that allows you to disable 2FA.

Request structure:
```
Object
    code : string - a code sent to the phone that you're disabling 2FA on.
```

Response structure:
```
Object
    error   : bool - Has an error occured? If this is false, you have disabled 2FA.
```
