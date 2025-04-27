import data from '../data/productos.json';

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 300);
    });
};

export const pedirUnico = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = data.products.find((item) => item.id === itemId);
            if (item) {
                resolve(item);
            } else {
                reject(new Error('Item no encontrado'));
            }
        }, 300);
    });
}