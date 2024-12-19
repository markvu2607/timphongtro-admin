import { DataProvider } from "react-admin";
import apiClient from "./api-client";

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field = "id", order = "ASC" } = params.sort || {};
    const query = {
      page,
      limit: perPage,
      search: params.filter?.q,
      sortBy: field,
      sortOrder: order,
    };

    const url = `/${resource}`;
    const { data } = await apiClient.get(url, { params: query });

    return {
      data: data.items,
      total: data.total,
    };
  },

  getOne: async (resource, params) => {
    const { data } = await apiClient.get(`/${resource}/${params.id}`);
    return { data };
  },

  create: async (resource, params) => {
    const { data } = await apiClient.post(`/${resource}`, params.data);
    return { data };
  },

  update: async (resource, params) => {
    const { data } = await apiClient.patch(
      `/${resource}/${params.id}`,
      params.data,
    );
    return { data };
  },

  updateMany: async (resource, params) => {
    const responses = await Promise.all(
      params.ids.map((id) =>
        apiClient.patch(`/${resource}/${id}`, params.data),
      ),
    );
    return { data: responses.map((response) => response.data.id) };
  },

  delete: async (resource, params) => {
    const { data } = await apiClient.delete(`/${resource}/${params.id}`);
    return { data };
  },

  deleteMany: async (resource, params) => {
    const responses = await Promise.all(
      params.ids.map((id) => apiClient.delete(`/${resource}/${id}`)),
    );
    return { data: responses.map((response) => response.data.id) };
  },

  getMany: async (resource, params) => {
    const responses = await Promise.all(
      params.ids.map((id) => apiClient.get(`/${resource}/${id}`)),
    );
    return { data: responses.map((response) => response.data) };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };

    const url = `/${resource}`;
    const { data, headers } = await apiClient.get(url, { params: query });

    return {
      data: data.items || data,
      total: parseInt(
        headers["content-range"]?.split("/").pop() || data.total || 0,
        10,
      ),
    };
  },
};
