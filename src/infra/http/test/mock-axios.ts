import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockAxiosPost = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: {},
    status: faker.number.int(),
  })
  return mockedAxios
}
