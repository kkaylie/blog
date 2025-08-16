import { config as configDotenv } from 'dotenv'

import type { CodegenConfig } from '@graphql-codegen/cli'

configDotenv({ path: '.env.local' })

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: 'lib/graphql/**/*.graphql',
  generates: {
    './lib/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      plugins: [],
    },
  },
}

export default config
