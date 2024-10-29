import { useRef, useState, useEffect } from 'react';

interface CaptureButtonProps {
  onCapture: (imageData: string) => void;
}

const CaptureButton = ({ onCapture }: CaptureButtonProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  // Activer la caméra quand le composant est monté
  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' } // caméra arrière
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraOn(true);
        }
      } catch (error) {
        console.error("Camera access error:", error);
        alert("Unable to access the camera.");
      }
    };

    enableCamera();

    // Désactiver la caméra quand le composant est démonté
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream)
          .getTracks()
          .forEach(track => track.stop());
      }
    };
  }, []);

  // Fonction de capture d'image
  const handleCapture = () => {
    if (!videoRef.current) return;

    // Créer un canvas pour capturer l'image du flux vidéo
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    }

    // Convertir l'image en data URL (base64) pour un traitement ultérieur
    const imageData = canvas.toDataURL('image/png');
    onCapture(imageData);

    // Désactiver la caméra après capture
    if (videoRef.current.srcObject) {
      (videoRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach(track => track.stop());
    }
    setIsCameraOn(false);
  };

  return (
    <div>
      {isCameraOn ? (
        <div>
          <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxHeight: '300px' }} />
          <button className="btn btn-primary" onClick={handleCapture}>
            Take Photo
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={() => setIsCameraOn(true)}>
          Start Camera
        </button>
      )}
    </div>
  );
};

export default CaptureButton;
