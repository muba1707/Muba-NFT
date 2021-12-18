import React from "react";
import CollectionCart from "./CollectionCart";
import "./Punklist.css";

const Punklist = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className='punkList'>
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCart
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
