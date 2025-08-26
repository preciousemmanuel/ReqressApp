import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { store } from '../store/store';
import { api } from './api';

const server = setupServer(
  http.post('https://reqres.in/api/login', () => {
    return HttpResponse.json({ token: 'QpwL5tke4Pnpja7X1' });
  }),
  http.get('https://reqres.in/api/users', () => {
    return HttpResponse.json({
      page: 1,
      per_page: 10,
      total: 12,
      total_pages: 2,
      data: [
        {
          id: 1,
          email: 'george.bluth@reqres.in',
          first_name: 'George',
          last_name: 'Bluth',
          avatar: 'https://reqres.in/img/faces/1-image.jpg',
        },
      ],
    });
  }),
  http.get('https://reqres.in/api/users/1', () => {
    return HttpResponse.json({
      data: {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
      },
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('api slice', () => {
  it('should handle login', async () => {
    const result = await store.dispatch(
      api.endpoints.login.initiate({
        email: 'george.bluth@reqres.in',
        password: 'Developer19',
      })
    );
    expect(result.data).toEqual({ token: 'QpwL5tke4Pnpja7X1' });
  });

  it('should handle getUsers', async () => {
    const result = await store.dispatch(api.endpoints.getUsers.initiate(1));
    expect(result.data?.data).toHaveLength(1);
  });

  it('should handle getUserById', async () => {
    const result = await store.dispatch(api.endpoints.getUserById.initiate(1));
    expect(result.data?.data.id).toBe(1);
  });
});
