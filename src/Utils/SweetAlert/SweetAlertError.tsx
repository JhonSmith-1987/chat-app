import Swal from 'sweetalert2';

export function SweetAlertError(error:string) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error,
    });
}