import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from './Firebase.js'; 
import Tile from './components/Tile.jsx'; 
import './App.css'; 

function App() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tile')); 
        
        const contentPromises = querySnapshot.docs.map(async (doc) => {
        const data = doc.data();
        let imageUrl = '';
       if (data.imageRef) {
            const imageRef = ref(storage, data.imageRef);
            imageUrl = await getDownloadURL(imageRef);
          }
          
          return {
            ...data,
            imageUrl, 
            id: doc.id
          };
        });

        const resolvedContent = await Promise.all(contentPromises);
        resolvedContent.sort((a, b) => parseInt(a.orderNo) - parseInt(b.orderNo)); 

        setContent(resolvedContent);
        setLoading(false);
        
      } catch (error) {
        console.error("Oops! error in fetching content:", error);
        setContent([]); 
        setLoading(false);
      }
    };

    fetchContent();
  }, []); 

  if (loading) {
    return (
        <div className="loading">
            <span>Wait! Your Content is loading...</span>
        </div>
    );
}

  return (
    <div className="app">
      <h1>Content Delivery System using Firebase and ReactJS</h1>
      <div className="content-grid">
        {content.map((tile) => (
          <Tile key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
}

export default App;