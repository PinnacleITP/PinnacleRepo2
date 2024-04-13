import React, {useState} from 'react'
import GameManagement from '../components/GameManagement';

export default function Admindashboard() {
    const [isCheckedGameManagement, setIsCheckedGameManagement] = useState(false);

    const gameManagementHandler = () => {
        setIsCheckedGameManagement(true);
    };

  return (
    <div>
        <span onClick={gameManagementHandler}>Game management</span>

        {isCheckedGameManagement && (<GameManagement/>)}
      
    </div>
  )
}
