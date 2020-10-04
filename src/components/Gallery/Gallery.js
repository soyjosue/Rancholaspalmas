import React, { useState, useEffect } from "react";
import { 
  Image
} from "react-bootstrap";
import ImgModal from '../ImgModal';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './Gallery.scss';

// Firebase
import firebase from "../../utils/firebase";
import "firebase/storage";

const Gallery = () => {
  const [imgLength, setImgLength] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState(null);

  useEffect(() => {
    firebase
      .storage()
      .ref("gallery/")
      .listAll()
      .then(({ items }) => {
        let array = [];
        let i = 1;
        while (i <= items.length) {
          array.push(i);
          i++;
        }
        setImgLength(array);
      })
      .catch(() => console.error("Error al cargar las imagenes."));
  }, []);
  
  return (
    <>
    <div className="row gallery">
      {imgLength && (
        imgLength.map(url => (
          <ImgGallery 
            key={url}
            url={url}
            setShowModal={setShowModal}
            setModalUrl={setModalUrl}
          />
        ))
      )}
    </div>
    {showModal && (
      <ImgModal 
        showModal={showModal}
        url={modalUrl}
        setShowModal={setShowModal}
      />
    )}
    </>
  );
};

function ImgGallery({url, setShowModal, setModalUrl}) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    firebase
      .storage()
      .ref(`gallery/${url}.jpg`)
      .getDownloadURL()
      .then(res => setImage(res))
      .catch(() => console.log('Error'))
  }, [url])

  const handlerClick = e => {
    setShowModal(true);
    setModalUrl(e.target.src);
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 gallery-img">
      <Image 
        src={image} 
        fluid 
        rounded
        onClick={handlerClick}
      />
    </div>
  )
}

export default Gallery;
