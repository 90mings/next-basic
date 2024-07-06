import api from './api';

const getAdminUserLogin = async (data) => {
  const result = await api.get(`/admin/adminUser/logIn`, {
    token: true,
    body: data,
  });
  return result.data;
};

const patchAdminUserLogout = async (data) => {
  const result = await api.patch(`/admin/adminUser/logOut`, {
    token: true,
    body: data,
  });
  return result.data;
};

const getListAdminNormalUser = async (data) => {
  const result = await api.get(`/admin/normalUser/list`, {
    token: true,
    body: data,
  });
  return result.data;
};

export default {
  getAdminUserLogin,
  patchAdminUserLogout,
  getListAdminNormalUser,
};
