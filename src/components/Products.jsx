const productList = [
  { id: 1, name: "Onion Hair Oil", price: "₹419", image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0mb9enhejxrgb0r06a82qss%2F1753029685_img_0.webp?st=2025-07-20T15%3A00%3A34Z&se=2025-07-26T16%3A00%3A34Z&sks=b&skt=2025-07-20T15%3A00%3A34Z&ske=2025-07-26T16%3A00%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=U2Vt3IYqCt7XZQY0vLB6B18NUtT3oNLbBtem9fSRVm4%3D&az=oaivgprodscus" },
  { id: 2, name: "Vitamin C Face Wash", price: "₹299", image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0mamnhjegk8yb2bkegvh9dq%2F1753029015_img_0.webp?st=2025-07-20T15%3A02%3A55Z&se=2025-07-26T16%3A02%3A55Z&sks=b&skt=2025-07-20T15%3A02%3A55Z&ske=2025-07-26T16%3A02%3A55Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=K4WmrDIvmCh8xAJgoEm%2B7ZPNJuyILCrkQrA2ENBsruE%3D&az=oaivgprodscus" },
  { id: 3, name: "Ubtan Face Mask", price: "₹349", image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0mbk59hedtraas8pgay9nbs%2F1753030019_img_0.webp?st=2025-07-20T15%3A00%3A34Z&se=2025-07-26T16%3A00%3A34Z&sks=b&skt=2025-07-20T15%3A00%3A34Z&ske=2025-07-26T16%3A00%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3ZAe5cxlQinHr%2BVjRD38uCx%2F36hLRwG10kIeYQ5otLc%3D&az=oaivgprodscus" },
  { id: 4, name: "Charcoal Face Scrub", price: "₹279", image: "/images/product4.png" },
  { id: 5, name: "Tea Tree Shampoo", price: "₹325", image: "/images/product5.png" },
  { id: 6, name: "Aloe Vera Gel", price: "₹199", image: "/images/product6.png" },
  { id: 7, name: "Sunscreen SPF50+", price: "₹449", image: "/images/product7.png" },
  { id: 8, name: "Lip Balm Strawberry", price: "₹149", image: "/images/product8.png" },
];

export default function Products() {
  return (
    <section className="px-6 md:px-12 py-20 bg-[var(--bg)] transition-all duration-300">
      <h2 className="text-2xl font-bold mb-12 text-center text-[var(--accent)] transition-all duration-300">
        Best Sellers
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {productList.map((product) => (
          <div
            key={product.id}
            className="group relative w-[240px] rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div
              className="p-5 rounded-2xl bg-[var(--card)] text-[var(--text)] 
              border border-[var(--border)] hover:border-[var(--accent)] 
              shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-40 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800">
                <img
                  src={product.image}
                  className="w-[12.3rem] h-[12.3rem] object-cover"
                />
              </div>
              <h4 className="text-base font-semibold mb-1">{product.name}</h4>
              <p className="text-[var(--price)] font-semibold text-sm mb-3">{product.price}</p>
              <button className="w-full bg-[var(--cta)] hover:brightness-110 text-white font-semibold rounded-full py-2 text-sm transition-all duration-300 shadow hover:shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
