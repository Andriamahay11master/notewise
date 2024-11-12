import { useRef, useState } from "react";
import CapturePhoto from "../capturePhoto/CapturePhoto";
import Tesseract from "tesseract.js";
import { jsPDF } from "jspdf";
import Alert from "../alert/Alert";

const CaptureForm = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openCamera, setOpenCamera] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sendForm, setSendForm] = useState(false);

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
    if (!selectedImage) return;
    setIsLoading(true);
    Tesseract.recognize(selectedImage, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        console.log("Extrated text : ", text);
        const pdf = new jsPDF("p", "mm", "a4");
        // Set a maximum width for the text
        const pageWidth = pdf.internal.pageSize.getWidth() - 20; // 10mm margin on each side
        const wrappedText = pdf.splitTextToSize(text, pageWidth);

        // Add the wrapped text to the PDF
        pdf.text(wrappedText, 10, 10);

        // Save the PDF with a filename
        pdf.save("extracted-text.pdf");
      })
      .catch((err) => {
        console.error("Error during Tesseract recognition: ", err);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
        resetForm();
        setSendForm(true);
        setTimeout(() => {
          setSendForm(false);
        }, 1500);
      });
  };

  //Reset form
  const resetForm = () => {
    setSelectedImage(null);
    setOpenCamera(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setSendForm(false);
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
      <Alert
        icon="icon-checkmark"
        type="success"
        message="Capture transformée avec succès !"
        state={sendForm ? true : false}
      />
      {openCamera && (
        <CapturePhoto onClose={closeCamera} onCapture={handlePhotoCapture} />
      )}
    </div>
  );
};

export default CaptureForm;
