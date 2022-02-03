import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const DropDownComp = ({onSeasonSelect}) => {
  return <div>
      
         <DropdownButton
            alignRight
            title="Seasons"
            id="dropdown-menu-seasons"
            onSelect={onSeasonSelect}
                >
              <Dropdown.Item eventKey="sr:season:67233">Ekstraklasa 19/20</Dropdown.Item>
              <Dropdown.Item eventKey="sr:season:77453">Ekstraklasa 20/21</Dropdown.Item>
              <Dropdown.Item eventKey="sr:season: 84320">Ekstraklasa 21/22</Dropdown.Item>
      </DropdownButton>
  </div>;
};

export default DropDownComp;
