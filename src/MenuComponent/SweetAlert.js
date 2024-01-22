import { useEffect } from 'react';
import Swal from 'sweetalert2';

function SweetAlert({ selectedProduct, setShowAlert }) {
  useEffect(() => {
    const showAlert = async () => {
      await Swal.fire({
        title: `${selectedProduct.name} is already in the cart`,
        confirmButtonText: 'OK',
        confirmButtonColor: '#38470B',
        background: '#F9F6F2',
        customClass: {
          confirmButton: 'custom-button',
          title: 'custom-title'
        }
      });
      setShowAlert(false);
    };

    showAlert();
  }, [selectedProduct, setShowAlert]);
  return null;
}

export default SweetAlert;