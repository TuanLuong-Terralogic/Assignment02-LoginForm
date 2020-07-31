import jwt from 'jsonwebtoken';

export const localSave = async profile => {
  const save = jwt.decode(localStorage.getItem('token'));
  // const saveUser = JSON.parse(save);
  if (profile.avatar !== '') {
    save.avatar = profile.avatar;
    save.email = profile.name;
    save.name = profile.name;
    save.phone = profile.phone;
  }
  else {
    save.email = profile.name;
    save.name = profile.name;
    save.phone = profile.phone;
  }


  localStorage.setItem('user', JSON.stringify(save));
}

export const serverSave = (userLocal, profile) => {
  const save = jwt.decode(localStorage.getItem('token'));
  console.log(profile.avatar)
  if (profile.avatar !== '') {
    userLocal.avatar = profile.avatar;
    userLocal.email = profile.name;
    userLocal.name = profile.name;
    userLocal.phone = profile.phone;
  }
  else {
    userLocal.avatar = save.avatar;
    userLocal.email = profile.name;
    userLocal.name = profile.name;
    userLocal.phone = profile.phone;
  }
}