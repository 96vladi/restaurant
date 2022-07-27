import { colors } from "./colors";
import { Menu, NewOrder, ProgressOrder, SoucerDetail, SoucerForm,SummaryOrder } from "../../screen";

const options = {
  title: '',
  headerTinColor: colors.dark,
  headerHideShadow: true,
  headerTitleStyle: {
    fontWeight: 'bold',
  }, 
};

export const stackList = [
  {
    component: NewOrder,
    name: 'newOrder',
    options: { ...options, headerShown: false },
  },
  {
    component: Menu,
    name: 'menu',
    options: { ...options, headerShown: false },
  },
  // {
  //   component: NewOrder,
  //   name: 'newOrder',
  //   options: { ...options, headerShown: false },
  // },
  {
    component: ProgressOrder,
    name: 'progressOrder',
    options: { ...options, headerShown: false },
  },
  {
    component: SoucerDetail,
    name: 'soucerDetail',
    options: { ...options, headerShown: false },
  },
  {
    component: SoucerForm,
    name: 'soucerForm',
    options: { ...options, headerShown: false },
  },
  {
    component: SummaryOrder,
    name: 'summaryOrder',
    options: { ...options, headerShown: false },
  },
];
