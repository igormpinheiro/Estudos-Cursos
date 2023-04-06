import {httpReponse} from '../protocols/http'

export const badRequest = (error: Error): httpReponse =>({
    statusCode: 400,
    body: error
})