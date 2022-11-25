## Source: 

[HTTP Security Headers, CyberSecurityTV](https://www.youtube.com/playlist?list=PLIbCFt2m6LvJW3WHREw8JdZkoO5i6wPM6)

### Content Security Policy:

- Helps detect and mitigate attacks such as XSS and injection
- To enable: configure response header `Content-Security-Policy`
- Example:
```javascript
 Content-Security-Policy: script-src 'self' https://www.cybersecuritytv.com
 ```

 ### HTTP Strict Transport Security (HSTS)

- Restricts web browsers to access web servers over HTTP
- To enable: configure response header `Strict-Transport-Security`
- Example:
```javascript
Strict-Transport-Security: max-age:3153600; includeSubDomains;
preload
```
### X-Frame-Options
- Prevents clickjacking
    - X-Frame-Options:
        - DENY
        - SAMEORIGIN
        - allow-from: DOMAIN
- Prevents MIME sniffing
    - MIME Types
        - Text/plain, text/html
        - browser guesses the MIME type(convers jpg to php)

    - Risk: Transform non-executable MIME to executable
    - X-Content-Type-Options: nosniff

### Referrer-Policy: no-referrer
#### Options:
- (default) no-referrer-when-downgrade(HTTP-HTTP HTTPS-HTTPS)
- Origin
- origin-when-cross-origin
- same-origin
- strict-origin
- strict-origin-when-cross-origin
- unsafe-url

### Cache-control
- **Risks**
    - Sensitive data being cached

- Cache-control: no-store
- Pragma: no-cache