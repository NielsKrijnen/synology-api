type APIConfig = Record<string, {
  version: number
  methods: Method[]
}>

type Method = {
  name: string

}

const APIConfig = {
  "SYNO.Core.System": {
    version: 3,
    methods: ["info", "shutdown"]
  }
} as const satisfies APIConfig