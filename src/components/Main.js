import React from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";
import "./Main.css";
import { useEffect, useState } from "react/cjs/react.development";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              className='selectedPunk'
              src={activePunk.image_original_url}
              alt=''
            />
          </div>
        </div>
        <div className='container'>
          <div className='punkDetails'>
            <div className='title'>{activePunk.name}</div>
            <span className='itemNumber'>.#{activePunk.token_id}</span>
          </div>
          <div className='owner'>
            <div className='ownerDetails'>
              <div className='ownerImageContainer'>
                <img src={activePunk.owner.profile_img_url} alt='' />
              </div>
              <div className='ownerNameAndHandle'>
                <div style={{ color: "#fff" }}>{activePunk.owner.address}</div>
                <div className='ownerHandle'>@muba.dev</div>
              </div>
            </div>
            <div className='ownerSocialMedia'>
              <div className='ownerLink'>
                <img src={instagramLogo} alt='' />
              </div>
              <div className='ownerLink'>
                <img src={twitterLogo} alt='' />
              </div>
              <div className='ownerLink'>
                <img src={moreLogo} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
