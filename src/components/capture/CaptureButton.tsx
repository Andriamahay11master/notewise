import{ useState } from 'react';

interface CaptureButtonProps {
    onCapture: (imageData: string) => void;
}
const CaptureButton = ({ onCapture } : CaptureButtonProps) => {
  const [isCapturing, setIsCapturing] = useState(false);

  // Fonction pour capturer une image
  const handleCapture = async () => {
    try {
      setIsCapturing(true);
      
      // Vérifie si le navigateur supporte la caméra
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Camera not supported on this device.");
        setIsCapturing(false);
        return;
      }

      // Accède à la caméra de l'appareil
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();

      // Capture l'image
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        }

      // Arrête la caméra
      stream.getTracks().forEach(track => track.stop());

      // Convertit l'image en data URL (base64) pour traitement OCR
      const imageData = canvas.toDataURL('image/png');
      onCapture(imageData); // Envoie l'image capturée au composant parent

    } catch (error) {
      console.error("Error capturing image:", error);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleCapture} disabled={isCapturing}>
      {isCapturing ? 'Capturing...' : 'Capture Image'}
    </button>
  );
};

export default CaptureButton;
