import { useRef, useState } from "react";
import CapturePhoto from "../capturePhoto/CapturePhoto";

const CaptureForm = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openCamera, setOpenCamera] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle image selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setSelectedImage(URL.createObjectURL(img)); // Preview the selected image
    }
  };

  // Function to take a photo
  const takePhoto = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenCamera(true);
  };

  // Function to handle the photo capture
  const handlePhotoCapture = (photo: string | null) => {
    setSelectedImage(photo); // Enregistrer la photo capturée
    setOpenCamera(false); // Fermer la caméra après capture
  };

  // Function to close the camera
  const closeCamera = () => {
    setOpenCamera(false); // Fermer la caméra manuellement
  };

  // Function to transform the capture to file numeric
  const transformCapture = () => {
    try {
      console.log("transforming");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <div className="form-block">
      <h3 className="title-h3">New Capture</h3>
      <form
        action=""
        className={isLoading ? "form-content loading" : "form-content"}
      >
        <div className="form-group form-file">
          <label htmlFor="imageArticle">Import photo or take a photo</label>
          <input
            type="file"
            ref={fileInputRef}
            name="imageArticle"
            id="imageArticle"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button className="btn btn-primary" onClick={takePhoto}>
            Take a capture
          </button>
        </div>
        {selectedImage && (
          <div className="form-group image-preview">
            <span>Aperçu : </span>
            <img
              src={selectedImage}
              alt="Image selectionné"
              className="image-preview__image"
            />
          </div>
        )}

        <div className="form-group form-submit">
          <button
            type="button"
            className="btn btn-primary"
            onClick={transformCapture}
          >
            Transform
          </button>
        </div>
      </form>
      {openCamera && (
        <CapturePhoto onClose={closeCamera} onCapture={handlePhotoCapture} />
      )}
    </div>
  );
};

export default CaptureForm;
