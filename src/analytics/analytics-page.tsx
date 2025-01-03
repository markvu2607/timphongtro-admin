import { Box, Button, Card, MenuItem, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Title, useAuthenticated } from "react-admin";
import DatePicker from "react-datepicker";
import Select from "@mui/material/Select";
import "react-datepicker/dist/react-datepicker.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  Brush,
} from "recharts";

import { useAllProvinces } from "../provinces/use-all-provinces";
import { useAnalytics } from "./use-analytics";
import "./styles.css";

export const AnalyticsPage = () => {
  useAuthenticated();

  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<(Date | null)[]>(() => {
    const end = new Date();
    const start = new Date();
    start.setMonth(start.getMonth() - 1);
    return [start, end];
  });
  const [startDate, endDate] = dateRange;
  const { data: allProvinces } = useAllProvinces();

  const { data: analyticsData, refetch } = useAnalytics({
    startDate: startDate?.toISOString().split("T")[0],
    endDate: endDate?.toISOString().split("T")[0],
    provinceId: selectedProvince || undefined,
  });

  const handleAnalyze = () => {
    refetch();
  };

  const totalIncome = analyticsData?.[0]?.reduce((total, cur) => {
    return total + cur.income;
  }, 0);

  const totalPostCount = analyticsData?.[2]?.reduce((total, cur) => {
    return total + Number(cur.postCount);
  }, 0);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Card sx={{ mt: 2, p: 2 }}>
      <Title title="Thống kê" />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <DatePicker
            showIcon
            selectsRange={true}
            startDate={startDate || undefined}
            endDate={endDate || undefined}
            onChange={(update) => {
              setDateRange(update);
            }}
            dateFormat="dd/MM/yyyy"
          />
          <Select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            sx={{ minWidth: 220, ".MuiSelect-select": { p: 1 } }}
          >
            <MenuItem value="">Bỏ chọn</MenuItem>
            {allProvinces?.map((province) => (
              <MenuItem key={province.id} value={province.id}>
                {province.name}
              </MenuItem>
            ))}
          </Select>
          <Button variant="contained" onClick={handleAnalyze}>
            Thống kê
          </Button>
        </Box>
        <Stack sx={{ spacing: 4, mt: 2, p: 2, border: "1px solid black" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <ResponsiveContainer height={300}>
              <LineChart data={analyticsData?.[0] || []}>
                <Line type="monotone" dataKey="income" stroke="#8884d8" />
                <CartesianGrid />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                    })
                  }
                />
                <YAxis
                  type="number"
                  tickFormatter={(value) => `${value / 1000000}tr`}
                />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer height={300}>
              <BarChart data={analyticsData?.[1] || []} layout="vertical">
                <Bar dataKey="income" fill="#8884d8" />
                <CartesianGrid />
                <YAxis
                  dataKey="location"
                  type="category"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                />
                <XAxis
                  type="number"
                  tickFormatter={(value) => `${value / 1000000}tr`}
                />
                <Tooltip />
                <Brush
                  dataKey="location"
                  height={30}
                  stroke="#8884d8"
                  endIndex={Math.min(5, (analyticsData?.[1] || []).length)}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <Typography
            component="p"
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Tổng doanh thu: {totalIncome}
          </Typography>
        </Stack>

        <Stack sx={{ spacing: 4, mt: 2, p: 2, border: "1px solid black" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <ResponsiveContainer height={300}>
              <LineChart data={analyticsData?.[2] || []}>
                <Line type="monotone" dataKey="postCount" stroke="#8884d8" />
                <CartesianGrid />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                    })
                  }
                />
                <YAxis type="number" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer height={300}>
              <BarChart data={analyticsData?.[3] || []} layout="vertical">
                <Bar dataKey="postCount" fill="#8884d8" />
                <CartesianGrid />
                <YAxis
                  dataKey="location"
                  type="category"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                />
                <XAxis type="number" />
                <Tooltip />
                <Brush
                  dataKey="location"
                  height={30}
                  stroke="#8884d8"
                  endIndex={Math.min(5, (analyticsData?.[1] || []).length)}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <Typography
            component="p"
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Tổng số lượng bài đăng: {totalPostCount}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};
