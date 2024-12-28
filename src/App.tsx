import { Admin, Resource } from "react-admin";
import PersonIcon from "@mui/icons-material/Person";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import FlagIcon from "@mui/icons-material/Flag";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList, UserCreate, UserEdit, UserShow } from "./users";
import {
  ProvinceCreate,
  ProvinceShow,
  ProvinceList,
  ProvinceEdit,
} from "./provinces";
import { ReportList } from "./reports";
import {
  DistrictCreate,
  DistrictShow,
  DistrictList,
  DistrictEdit,
} from "./districts";
import { NewsCreate, NewsShow, NewsList, NewsEdit } from "./news";
import { PostShow, PostList } from "./posts";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
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
  </Admin>
);
