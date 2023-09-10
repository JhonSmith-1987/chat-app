import Swal from 'sweetalert2';

export function SweetAlertSuccess(message:string) {
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: message,
    });
}