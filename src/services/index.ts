export class Base {
  constructor() {

  }

  protected get() {
    return fetch("https://192.168.1.96:5001/webapi/auth.cgi?api=SYNO.API.Auth&method=login&account=niels&passwd=Papaislief2008!&format=cookie&enable_syno_token=yes&version=7")
  }
}