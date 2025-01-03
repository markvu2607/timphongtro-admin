import BorderColorIcon from "@mui/icons-material/BorderColor";
import FlagIcon from "@mui/icons-material/Flag";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PersonIcon from "@mui/icons-material/Person";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";

import { Layout } from "./Layout";
import { AnalyticsPage } from "./analytics";
import { authProvider } from "./authProvider";
import { DashboardPage } from "./dashboard";
import { dataProvider } from "./dataProvider";
import {
  DistrictCreate,
  DistrictEdit,
  DistrictList,
  DistrictShow,
} from "./districts";
import { NewsCreate, NewsEdit, NewsList, NewsShow } from "./news";
import { PostList, PostShow } from "./posts";
import {
  ProvinceCreate,
  ProvinceEdit,
  ProvinceList,
  ProvinceShow,
} from "./provinces";
import { ReportList } from "./reports";
import { UserCreate, UserEdit, UserList, UserShow } from "./users";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={DashboardPage}
  >
    <Resource
      icon={PersonIcon}
      name="users"
      create={UserCreate}
      list={UserList}
      edit={UserEdit}
      show={UserShow}
    />
    <Resource
      icon={HistoryEduIcon}
      name="posts"
      list={PostList}
      show={PostShow}
    />
    <Resource icon={FlagIcon} name="reports" list={ReportList} />
    <Resource
      icon={BorderColorIcon}
      name="news"
      list={NewsList}
      create={NewsCreate}
      edit={NewsEdit}
      show={NewsShow}
    />
    <Resource
      icon={LocationSearchingIcon}
      name="provinces"
      list={ProvinceList}
      create={ProvinceCreate}
      edit={ProvinceEdit}
      show={ProvinceShow}
    />
    <Resource
      icon={LocationSearchingIcon}
      name="districts"
      list={DistrictList}
      create={DistrictCreate}
      edit={DistrictEdit}
      show={DistrictShow}
    />
    <CustomRoutes>
      <Route path="/analytics" element={<AnalyticsPage />} />
    </CustomRoutes>
  </Admin>
);
