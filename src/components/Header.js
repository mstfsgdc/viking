import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import { VikingLogo } from '../assets/images/';

import { ReactComponent as TopLogo } from '../assets/images/topgg_logo.svg';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 my-1 rounded bg-background-100">
          <img className="hover:opacity-75" src={VikingLogo} alt="Viking logo" width={100} height={100} />
          <div className="mx-2">
            <h1 className="text-3xl font-bold text-center text-slate-300">Viking Bot</h1>
            <h2 className="text-slate-400" >For more beatiful Discord experience, a soldier from Scandinavia, Viking.</h2>
          </div>
          <div className="flex items-center buttons">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=516281980044836916&scope=bot&permissions=8" 
              target="_blank" rel="noreferrer" 
              className="flex items-center px-4 py-2 mx-2 transition-colors rounded-md button bg-background-50/40 text-slate-200 hover:bg-background-dark hover:text-slate-100"
            >
              <FontAwesomeIcon className="mr-1" icon={faDiscord} />Invite
            </a>
            <a 
              href="https://top.gg/bot/516281980044836916" 
              target="_blank" rel="noreferrer" 
              className="flex items-center px-4 py-2 mx-2 transition-colors rounded-md button bg-background-50/40 text-slate-200 hover:bg-background-dark hover:text-slate-100"
            >
              <TopLogo className="mr-1" style={{width: '20px'}} />Top.gg
            </a>
          </div>
        </header>
    )
}