// Meng-generate 100 data produk secara otomatis
const categories = [
    { code: 'jenisA', name: 'Kaos & T-Shirt' },
    { code: 'jenisB', name: 'Kemeja & Kasual' },
    { code: 'jenisC', name: 'Jaket & Outer' },
    { code: 'jenisD', name: 'Celana & Jeans' },
    { code: 'jenisE', name: 'Gamis & Busana Muslim' }
];

const productsData = [];

categories.forEach(cat => {
    for (let i = 1; i <= 20; i++) {
        // Generasi harga acak contoh (Rp 50.000 - Rp 250.000)
        const basePrice = (Math.floor(Math.random() * 20) + 5) * 10000;
        console.log(cat)
        productsData.push({
            id: `${cat.code}-${i}`,
            category: cat.code,
            categoryName: cat.name,
            name: `Baju ${cat.name} ${i}`,
            description: `Baju berkualitas dari koleksi ${cat.name} pilihan terbaik. Bahan adem, nyaman dipakai, dan tahan lama.`,
            price: basePrice,
            image: `image/${cat.code}/baju${i}.jpg`
        });
    }
});