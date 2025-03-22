# Synology API

### Development
You can use a test file `test.ts` in / to develop the services:
```ts
import { SynologyAPI } from "./src";

const api = new SynologyAPI({
  server: "nas.quickconnect.to",
  sid: "[MYSID]",
  synoToken: "[MYSYNOTOKEN]"
})

api.core.system.process().then(response => {
  console.log("Response:", response)
}).catch(async error => {
  console.error("Error:", error)
  if (error.code === 119) {
    console.log(await api.auth.login({
      account: "[ACCOUNT]",
      passwd: "[PASSWD]",
      otp_code: "[OTP]"
    }).catch(console.error))
  }
})
```
