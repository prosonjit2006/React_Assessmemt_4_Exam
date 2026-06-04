import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  UserParams,
  UserState,
} from "../../typescript/interface/user.interface";
import {
  changeUserRoleFns,
  deleteUsersFns,
  disableUsersFns,
  editUserListFns,
  enableUsersFns,
  fetchUsersListFns,
} from "../../api/apifunction/user.functions";
import { getErrorMessage } from "../../services/helper/global.helper";
import { toast } from "sonner";

const initialState: UserState = {
  isLoading: false,
  isError: null,
  role: "",
  users: [],

  pagination: {
    page: 1,
    limit: 5,
    totalPages: 0,
    totalResults: 0,
  },

  dialog: {
    open: false,
    isSelectedRole: null,
  },
};

export const fetchUsersList = createAsyncThunk(
  "admin/users",
  async (params: UserParams, { rejectWithValue }) => {
    try {
      const res = await fetchUsersListFns(params);
      return res;
    } catch (error) {
      const err = getErrorMessage(error);
      return rejectWithValue(err);
    }
  },
);

export const editUser = createAsyncThunk(
  "admin/user/update",
  async ({ id, role }: { id: string; role: string }, { rejectWithValue }) => {
    try {
      const res = await editUserListFns(id, { role });
      return res;
    } catch (error) {
      const err = getErrorMessage(error);
      return rejectWithValue(err);
    }
  },
);

export const changeUserRole = createAsyncThunk(
  "admin/user/rolechange",
  async ({ id, role }: { id: string; role: string }, { rejectWithValue }) => {
    try {
      const res = await changeUserRoleFns({ id, role });
      toast.success(res.message);
      return res;
    } catch (error) {
      const err = getErrorMessage(error);
      toast.error(err);
      return rejectWithValue(err);
    }
  },
);

export const changeUserStatus = createAsyncThunk(
  "users/changeStatus",
  async (
    {
      id,
      isActive,
    }: {
      id: string;
      isActive: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      const res = isActive
        ? await disableUsersFns(id)
        : await enableUsersFns(id);

      // console.log("status res from thung", res);

      toast.success(res.message);

      return res;
    } catch (error) {
      const err = getErrorMessage(error);

      return rejectWithValue(err);
    }
  },
);

export const deleteUser = createAsyncThunk(
  "admin/user/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await deleteUsersFns(id);
      return res;
    } catch (error) {
      const err = getErrorMessage(error);
      return rejectWithValue(err);
    }
  },
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    nextUserPage: (state) => {
      state.pagination.page = state.pagination.page + 1;
    },
    prevUserPage: (state) => {
      state.pagination.page = state.pagination.page - 1;
    },
    setUserDialogOpen: (state) => {
      state.dialog.open = true;
      state.dialog.isSelectedRole = null;
    },
    setUserDialogClose: (state) => {
      state.dialog.open = false;
      state.dialog.isSelectedRole = null;
    },
    setUserEditDialogOpen: (state, action) => {
      state.dialog.open = true;
      state.dialog.isSelectedRole = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.dialog.isSelectedRole = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersList.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.users = action.payload.data;

        state.pagination.page = action.payload.pagination.page;
        state.pagination.limit = action.payload.pagination.limit;
        state.pagination.totalPages = action.payload.pagination.totalPages;
        state.pagination.totalResults = action.payload.pagination.total;

        // console.log("user data fetched fullfiled", action.payload);
      })
      .addCase(fetchUsersList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.dialog.isSelectedRole = action.payload;

        // console.log("res fullfiled editUser", action.payload);
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      // .addCase(changeUserStatus.pending, (state) => {
      //   state.isLoading = true;
      //   state.isError = null;
      // })

      .addCase(changeUserStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;

        const updatedUser = action.payload.data;
        // console.log("res from status from update user", updatedUser.isActive);

        const user = state.users.find((item) => item._id === updatedUser?.id);
        // console.log('res from status add case', user)

        if (user) {
          user.isActive = updatedUser.isActive;
        }
      })

      .addCase(changeUserStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      .addCase(changeUserRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;

        console.log("res fullfiled role", action.payload);
        console.log("role update data meta", action.meta);

        const user = state.users.find(
          (user) => user._id === action.meta.arg.id,
        );
        console.log("res as user ", user);
        if (user) {
          user.role = action.meta.arg.role;
        }
      })
      .addCase(changeUserRole.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});

export const {
  nextUserPage,
  prevUserPage,
  setUserDialogOpen,
  setUserDialogClose,
  setUserEditDialogOpen,
  setSelectedUser,
} = userSlice.actions;
export default userSlice.reducer;
