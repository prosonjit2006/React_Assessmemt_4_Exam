import api from "../AxiosIntance";
import type {
  UserParams,
  //   UserPayload,
} from "../../typescript/interface/user.interface";

export const fetchUsersListFns = async (params: UserParams) => {
  const response = await api.get("/admin/users", { params });
  return response.data;
};

export const searchUsersFns = async () => {
  const response = await api.post(`/admin/users/filter`);
  return response.data;
};

// export const editUserListFns = async ({
//   id,
//   data,
// }: {
//   id: string;
//   data: UserPayload;
// }) => {
//   const response = await api.patch(`/admin/users/${id}/role`, data);
//   return response.data;
// };

export const changeUserRoleFns = async({ id, role }: { id: string, role: string })=> {
  const res = await api.patch(`/admin/users/${id}/role`, {
    role: role
  });
  return res.data
}

export const editUserListFns = async (id: string, data: { role: string }) => {
  const response = await api.patch(`/admin/users/${id}/role`, data);
  return response.data;
};

export const deleteUsersFns = async (id: string) => {
  const response = await api.delete(`/admin/users/${id}`);
  return response.data;
};

export const disableUsersFns = async (id: string) => {
  const response = await api.patch(`/admin/users/${id}/disable`);
  return response.data;
};

export const enableUsersFns = async (id: string) => {
  const response = await api.patch(`/admin/users/${id}/enable`);
  return response.data;
};

// export const changeUserStatusFns = async ({
//   id,
//   isActive,
// }: {
//   id: string;
//   isActive: boolean
// }) => {
//   const response =
//   isActive ? await disableUsersFns(id) : enableUsersFns(id)
// };

// export const enableUserFns = async(id: string)=> {
//   const response = await api.patch(`/admin/users/${id}/enable`)
//   return response.data
// }