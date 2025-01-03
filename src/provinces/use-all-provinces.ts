import { useQuery } from "@tanstack/react-query";
import apiClient from "../api-client";

export const useAllProvinces = () => {
  return useQuery({
    queryKey: ["all-provinces"],
    queryFn: async () => {
      const response = await apiClient.get("/provinces/all");
      return response.data;
    },
  });
};
