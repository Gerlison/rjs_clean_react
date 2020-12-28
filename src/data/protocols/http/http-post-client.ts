import { HttpResponse } from './http-responses'

export type HttpPostParams = {
  url: string
  body: object
}

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<HttpResponse>
}
