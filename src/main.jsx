import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import {Main_page} from './components/main_page/main_page.jsx'
import { Portfolio } from './components/portfolio/portfolio.jsx'
import { Marsel } from './components/marsel/marsel.jsx'
import { Homyes } from './components/homyes/homyes.jsx'
import { Starkwood } from './components/starkwood/starkwood.jsx'
import { Vlaston } from './components/vlaston/vlaston.jsx'
import { XVISION } from './components/xvision/xvision.jsx'
import { Security } from './components/security/security.jsx'
import { Perf_group } from './components/perf_group/perf-group.jsx'
import { Roblook } from './components/rooblook/rooblook.jsx'
import { ZHK } from './components/ZHK/zhk.jsx'
import { Stroy_app } from './components/stroy_app/stroy_app.jsx'
import { Dubai } from './components/dubai/dubai.jsx'
import './index.css'
import { Team } from './components/team/team.jsx'
import { Contacts } from './components/contacts.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            {/* <Main_page /> */}
            {/* <Portfolio /> */}
            {/* <Marsel /> */}
            {/* <Homyes/> */}
            {/* <Starkwood /> */}
            {/* <Vlaston/> */}
            {/* <XVISION/> */}
            {/* <Security/> */}
            {/* <Perf_group/> */}
            {/* <Roblook/> */}
            {/* <ZHK/> */}
            {/* <Stroy_app/> */}
            {/* <Dubai/> */}
            <Team/>
            {/* <Contacts/> */}
        </BrowserRouter>
    </StrictMode>,
)
