import {SwitchNavigator,DrawerNavigator,createMaterialTopTabNavigator,StackNavigator} from 'react-navigation'




import ErtebatBaMa from "../ErtebatBaMa";
import DabareMa from "../DarbareMa";
import Home from './../Home'
import SabetName from "../SabetName";
import Login from './../Login'
import Stack from './Stack'

const TabNav=createMaterialTopTabNavigator({

    home:{screen:Home},
    login:{screen:Login},
    sabetName:{screen:SabetName},

},{
    tabBarPosition:"bottom"
})
const Switch=SwitchNavigator({
    Stack



})
export default Drawer=DrawerNavigator({
  Switch,
  TabNav,
    home:{screen:Home},
    ertebatBaMa:{screen:ErtebatBaMa},
    dabarema:{screen:DabareMa},


},{
    drawerPosition:'right',
    drawerWidth:200
})

