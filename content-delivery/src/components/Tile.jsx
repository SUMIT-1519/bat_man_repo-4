import React from 'react';
import './Tile.css'; 
const Tile = ({ tile }) => {
  const isVideo = tile.videoUrl && tile.videoUrl.length > 0;
   return (
    <div className="tile-card">
      {isVideo ? (
        <iframe
          title={tile.title}
          width="100%"
          height="100%"
          src={tile.videoUrl} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img src={tile.imageUrl} alt={tile.title} className="tile-image" />
      )}
      <div className="tile-text">
        <h3>{tile.title}</h3>
        <span className="tile-number">
        Tile no:{tile.orderNo} 
    </span>
      </div>
    </div>
  );
};

export default Tile;