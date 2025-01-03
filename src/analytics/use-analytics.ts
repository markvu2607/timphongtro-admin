import { useQuery } from "@tanstack/react-query";
import apiClient from "../api-client";

type AnalyticsParams = {
  startDate?: string;
  endDate?: string;
  provinceId?: string;
};

export const useAnalytics = (params: AnalyticsParams) => {
  return useQuery({
    queryKey: ["analytics", params],
    queryFn: async () => {
      const searchParams = new URLSearchParams();
      if (params.startDate) searchParams.append("startDate", params.startDate);
      if (params.endDate) searchParams.append("endDate", params.endDate);
      if (params.provinceId)
        searchParams.append("provinceId", params.provinceId);

      const response = await apiClient.get(
        `/analytics?${searchParams.toString()}`,
      );
      return response.data;
    },
    enabled: false,
  });
};
