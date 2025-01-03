import { Menu } from "react-admin";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export const CustomMenu = () => {
  return (
    <Menu>
      <Menu.ResourceItems />
      <Menu.Item
        to="/analytics"
        primaryText="Thống kê"
        leftIcon={<AnalyticsIcon />}
      />
    </Menu>
  );
};
