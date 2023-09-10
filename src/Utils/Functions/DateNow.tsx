export function dateNow() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
    const year = date.getFullYear();
    let hour = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hour >= 12 ? 'pm' : 'am';

    // Convierte la hora en un formato de 12 horas
    if (hour > 12) {
        hour -= 12;
    }

    // Formatea la fecha y la hora en el formato deseado
    return `${day}-${month}-${year} ${hour}:${minutes} ${ampm}`;
}