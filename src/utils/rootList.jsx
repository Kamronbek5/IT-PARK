import {
  AppstoreOutlined,
  FolderOpenOutlined,
  CalendarOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const rootList = [
  {
    id: 1,
    title: "Bosh sahifa",
    icon: <AppstoreOutlined />,
    path: "/"
  },
  {
    id: 2,
    title: "Mening kurslarim",
    icon: <FolderOpenOutlined />,
    path:"/courses"
  },
  {
    id: 3,
    title: "Dars jadvali",
    icon: <CalendarOutlined />,
    path:"/table"
  },
  {
    id: 4,
    title: "Profil",
    icon: <UserOutlined />,
    path:"/profile"
  },
  {
    id: 5,
    title: "Mening to’lovlarim",
    icon: <DollarOutlined />,
    path:"/payments"
  },
];

export default rootList;
