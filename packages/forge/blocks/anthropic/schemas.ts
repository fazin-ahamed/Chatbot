// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from '@typebot.io/forge'
import { anthropicBlock } from '.'
import { auth } from './auth'

export const anthropicBlockSchema = parseBlockSchema(anthropicBlock)
export const anthropicCredentialsSchema = parseBlockCredentials(
  anthropicBlock.id,
  auth.schema
)