import { Admin, Resource } from "react-admin";
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
import { ReportCreate, ReportShow, ReportList } from "./reports";
import {
  DistrictCreate,
  DistrictShow,
  DistrictList,
  DistrictEdit,
} from "./districts";
import { NewsCreate, NewsShow, NewsList, NewsEdit } from "./news";
import { PostCreate, PostShow, PostList, PostEdit } from "./posts";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
      show={UserShow}
    />
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
      show={PostShow}
    />
    <Resource
      name="reports"
      list={ReportList}
      create={ReportCreate}
      show={ReportShow}
    />
    <Resource
      name="news"
      list={NewsList}
      create={NewsCreate}
      edit={NewsEdit}
      show={NewsShow}
    />
    <Resource
      name="provinces"
      list={ProvinceList}
      create={ProvinceCreate}
      edit={ProvinceEdit}
      show={ProvinceShow}
    />
    <Resource
      name="districts"
      list={DistrictList}
      create={DistrictCreate}
      edit={DistrictEdit}
      show={DistrictShow}
    />
  </Admin>
);
