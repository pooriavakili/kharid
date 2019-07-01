import {SwitchNavigator,DrawerNavigator,createBottomTabNavigator,StackNavigator} from 'react-navigation'
import {Icon, Image} from 'react-native-elements'
import React from 'react'

import ErtebatBaMa from "../ErtebatBaMa";
import DabareMa from "../DarbareMa";
import Home from './../Home'
import SabetName from "../SabetName";
import Login from './../Login'
import Stack from './Stack'

const TabNav=createBottomTabNavigator({

    home:{screen:Home,
        navigationOptions:{
        tabBarLabel:"خانه",
            tabBarIcon:<Icon name='home'
            style={{
            width:40,
                height:40
            }}

            />
        }

    },
    login:{screen:Login,
        navigationOptions:{
            tabBarLabel:"ورود",


        }

    },
    sabetName:{screen:SabetName,
    navigationOptions:{
        tabBarLabel:"ثبت نام",


    }
    },

},{
    tabBarPosition:"bottom",
    header:null
})
const Switch=SwitchNavigator({
    Stack



})
export default Drawer=DrawerNavigator({
  Switch:{
      screen:Switch,
      navigationOptions:{
          drawerLabel:"پرداخت"
      }
  },
  TabNav:{
      screen:TabNav,
      navigationOptions:{
          drawerLabel:"ورود و ثبت نام"
      }
  },
    home:{screen:Home,
    navigationOptions:{
        drawerLabel:"صفحه اصلی"
    }
    },
    ertebatBaMa:{screen:ErtebatBaMa,
    navigationOptions: {
        drawerLabel:"ارتباط با ما"
    }

    },
    dabarema:{screen:DabareMa,
    navigationOptions:{
        drawerLabel:"درباره ما"
    }
    },


},{
    drawerPosition:'right',
    drawerWidth:200,
    navigationOptions:{
        header:null
    }

})

