import {createStackNavigator,DrawerNavigator,createMaterialTopTabNavigator,StackNavigator} from 'react-navigation'




import ErtebatBaMa from "../ErtebatBaMa";
import DabareMa from "../DarbareMa";
import Home from './../Home'
import SabetName from "../SabetName";
import Login from './../Login'
import GhabezZarime from "../Stack/GhabezZarime";
const Stack=createStackNavigator({
    ghabezZarime:{screen:GhabezZarime}
})

const TabNav=createMaterialTopTabNavigator({

    home:{screen:Home},
    login:{screen:Login},
    sabetName:{screen:SabetName},

},{
    tabBarPosition:"bottom"
})
export default Drawer=DrawerNavigator({

    TabNav:{
        screen:TabNav
    },
    home:{screen:Home},
    ertebatBaMa:{screen:ErtebatBaMa},
    dabarema:{screen:DabareMa},


},{
    drawerPosition:'right',
    drawerWidth:200
})

