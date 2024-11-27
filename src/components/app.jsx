import { Route, Routes, Link } from "react-router-dom";
import { Main_page } from "./main_page/main_page.jsx";
import { Portfolio } from './portfolio/portfolio.jsx'
import { Marsel } from './marsel/marsel.jsx'
import { Homyes } from './homyes/homyes.jsx'
import { Starkwood } from './starkwood/starkwood.jsx'
import { Vlaston } from './vlaston/vlaston.jsx'
import { XVISION } from './xvision/xvision.jsx'
import { Security } from './security/security.jsx'
import { Perf_group } from './perf_group/perf-group.jsx'
import { Roblook } from './rooblook/rooblook.jsx'
import { ZHK } from './ZHK/zhk.jsx'
import { Stroy_app } from './stroy_app/stroy_app.jsx'
import { Dubai } from './dubai/dubai.jsx'
import { Team } from './team/team.jsx'
import { Contacts } from './contacts.jsx'
import { Service } from './service/service.jsx'
import { Breef } from './breef/breef.jsx'
import { Notfound } from "./NotFound.jsx";

export function App() {
    return (
        <div>
            <header>
                <Link to='/'></Link>
            </header>
            <Routes>
                <Route path="/" element={<Main_page/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/Marsel" element={<Marsel/>}/>
                <Route path="/Homyes" element={<Homyes/>}/>
                <Route path="/Starkwood" element={<Starkwood/>}/>
                <Route path="/Vlaston" element={<Vlaston/>}/>
                <Route path="/XVISION" element={<XVISION/>}/>
                <Route path="/Security" element={<Security/>}/>
                <Route path="/Perf_group" element={<Perf_group/>}/>
                <Route path="/Roblook" element={<Roblook/>}/>
                <Route path="/ZHK" element={<ZHK/>}/>
                <Route path="/Stroy_app" element={<Stroy_app/>}/>
                <Route path="/Dubai" element={<Dubai/>}/>
                <Route path="/Team" element={<Team/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="/Service" element={<Service/>}/>
                <Route path="/Breef" element={<Breef/>}/>
                <Route path="/notfound" element={<Notfound/>}/>
            </Routes>
        </div>
    )
}