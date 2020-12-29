import { HttpResponse } from './http-responses'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<RequestBody, ResponseBody> {
  post: (params: HttpPostParams<RequestBody>) => Promise<HttpResponse<ResponseBody>>
}
