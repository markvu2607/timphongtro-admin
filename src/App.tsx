import BorderColorIcon from "@mui/icons-material/BorderColor";
import FlagIcon from "@mui/icons-material/Flag";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PersonIcon from "@mui/icons-material/Person";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import polyglotI18nProvider from "ra-i18n-polyglot";
import viMesssages from "ra-language-vietnamese";

import { Layout } from "./Layout";
import { AnalyticsPage } from "./analytics";
import { authProvider } from "./authProvider";
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

const messages = {
  vi: viMesssages,
};

const i18nProvider = polyglotI18nProvider((locale) => messages[locale], "vi", [
  { locale: "vi" },
]);

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource
      icon={PersonIcon}
      options={{
        label: "Quản lý tài khoản",
      }}
      name="users"
      create={UserCreate}
      list={UserList}
      edit={UserEdit}
      show={UserShow}
    />
    <Resource
      icon={HistoryEduIcon}
      options={{
        label: "Quản lý bài đăng",
      }}
      name="posts"
      list={PostList}
      show={PostShow}
    />
    <Resource
      icon={FlagIcon}
      options={{
        label: "Quản lý báo cáo",
      }}
      name="reports"
      list={ReportList}
    />
    <Resource
      icon={BorderColorIcon}
      options={{
        label: "Quản lý tin tức",
      }}
      name="news"
      list={NewsList}
      create={NewsCreate}
      edit={NewsEdit}
      show={NewsShow}
    />
    <Resource
      icon={LocationSearchingIcon}
      options={{
        label: "Quản lý tỉnh thành",
      }}
      name="provinces"
      list={ProvinceList}
      create={ProvinceCreate}
      edit={ProvinceEdit}
      show={ProvinceShow}
    />
    <Resource
      icon={LocationSearchingIcon}
      options={{
        label: "Quản lý quận huyện",
      }}
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
