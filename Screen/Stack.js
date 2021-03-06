import {StackNavigator} from 'react-navigation'
import GhabezZarime from "../Stack/GhabezZarime";
import Home from './../Home';
import Aks from "../Stack/Aks";
import HamrahAval from "../Stack/HamrahAval";
import Irancell from "../Stack/Irancell";
import Bus from "../Stack/Bus";
import Kharid from "../Stack/Kharid";
import KharidBasteEnternety from "../Stack/KharidBasteEnternety";
import KharidSharj from "../Stack/KharidSharj";
import Pardakht from "../Stack/Pardakht";
import Raytel from "../Stack/Raytel";
import SharjAsly from "../Stack/SharjAsly";
import AirPlane from "../Stack/AirPlane";
import Taksy from "../Stack/Taksy";
import Cinama from "../Stack/Cinama";
import Konsert from "../Stack/Konsert";
import Food from "../Stack/Food";
import Irancell1 from "../Stack/Irancell1";
import HamrahAval1 from "../Stack/HamrahAval1";
import Raytel1 from "../Stack/Raytel1";
export default Stack=StackNavigator({
    aks:{screen:Aks},
     home:Home,
    ghabezZarime:{screen:GhabezZarime},
    hamrahAval:{screen:HamrahAval},
    irancell:{screen:Irancell},
    bus:{screen:Bus},
    airPlane:{screen:AirPlane},
    taksy:{screen:Taksy},
    kharid:{screen:Kharid},
    kharidBasteEnternety:{screen:KharidBasteEnternety},
    kharidSharj:{screen:KharidSharj},
    pardakht:{screen:Pardakht},
    raytel:{screen:Raytel},
    sharjAsly:{screen:SharjAsly},
    cinama:{screen:Cinama},
    konsert:{screen:Konsert},
    food:{screen:Food},
    irancell1:{screen:Irancell1},
    hamrahAval1:{screen:HamrahAval1},
    raytel1:{screen:Raytel1}
},{
    navigationOptions:{
        header:null
    }

})
