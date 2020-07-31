import { localSave } from '../index';

const userLocal = {
  email: 'luongdoquangtuan@gmail.com',
  name: 'Tuan Luong',
  phone: '089433484434',
  avatar: ''
}

describe('localSave', () => {
  it('it should run correctly', () => {
    const value = localSave(userLocal);
    expect(value).toBeTruthy();
  })
})