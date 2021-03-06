import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy<RequestBody, ResponseBody>
  implements HttpPostClient<RequestBody, ResponseBody> {
  url?: string
  body?: RequestBody
  response: HttpResponse<ResponseBody> = {
    statusCode: HttpStatusCode.ok
  }

  async post(params: HttpPostParams<RequestBody>): Promise<HttpResponse<ResponseBody>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
