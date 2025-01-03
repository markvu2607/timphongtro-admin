import { Menu } from "react-admin";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export const CustomMenu = () => {
  return (
    <Menu>
      <Menu.ResourceItems />
      <Menu.Item
        to="/analytics"
        primaryText="Xem thống kê"
        leftIcon={<AnalyticsIcon />}
      />
    </Menu>
  );
};
