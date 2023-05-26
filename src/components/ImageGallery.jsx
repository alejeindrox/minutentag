/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState, useCallback } from "react";
import "../styles/ImageGallery.css"

const Image = ({ src, onRemove, index }) => {
	return (
		<div className="image">
			<img src={src} alt={`Img number ${index}`} />
			<button className="remove" onClick={() => onRemove(index)}>X</button>
		</div>
	);
}

export const ImageGallery = ({ links }) => {
  const [galleryLinks, setGalleryLinks] = useState(links);

  const handleRemove = useCallback((index) => {
    const updatedLinks = galleryLinks.filter((_, i) => i !== index);
    setGalleryLinks(updatedLinks);
  }, [galleryLinks]);

	return (
    <div id="gallery">
      {galleryLinks.map((link, index) => (
        <Image
          key={index}
          index={index}
          src={link}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
}
