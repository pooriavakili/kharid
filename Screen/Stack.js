import {StackNavigator} from 'react-navigation'
import GhabezZarime from "../Stack/GhabezZarime";
import Home from './../Home';
import Aks from "../Stack/Aks";
import HamrahAval from "../Stack/HamrahAval";
import Irancell from "../Stack/Irancell";
import KhadamatPardakhtBanky from "../Stack/KhadamatPardakhtBanky";
import KhadamatPardakhtElectroniky from "../Stack/KhadamatPardakhtElectroniky";
import Kharid from "../Stack/Kharid";
import KharidBasteEnternety from "../Stack/KharidBasteEnternety";
import KharidSharj from "../Stack/KharidSharj";
import Pardakht from "../Stack/Pardakht";
import Raytel from "../Stack/Raytel";
import SharjAsly from "../Stack/SharjAsly";
export default Stack=StackNavigator({
    aks:{screen:Aks},
     home:Home,
    ghabezZarime:{screen:GhabezZarime},
    hamrahAval:{screen:HamrahAval},
    irancell:{screen:Irancell},
    khadamatPardakhtBanky:{screen:KhadamatPardakhtBanky},
    khadamatPardakhtElectroniky:{screen:KhadamatPardakhtElectroniky},
    kharid:{screen:Kharid},
    kharidBasteEnternety:{screen:KharidBasteEnternety},
    kharidSharj:{screen:KharidSharj},
    pardakht:{screen:Pardakht},
    raytel:{screen:Raytel},
    sharjAsly:{screen:SharjAsly}
})
