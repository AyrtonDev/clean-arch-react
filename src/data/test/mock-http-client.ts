import { HttpPostClient, HttpPostParams } from 'data/protocols/http/http-post-client'
import { url } from 'inspector'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}
