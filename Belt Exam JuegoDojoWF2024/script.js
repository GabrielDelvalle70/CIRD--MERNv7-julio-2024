document.addEventListener("DOMContentLoaded", () => {
    const bannerImages = ["images/cafe-neko.png", "images/pixel-ninjas-2.png", "images/stonepunk.png"];
    let currentBannerIndex = 0;
    
    const bannerImgElement = document.getElementById("banner-img");
    const cartCountElement = document.getElementById("cart-count");

    // Cambiar imagen del banner
    document.getElementById("next-banner").addEventListener("click", () => {
        currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
        bannerImgElement.src = bannerImages[currentBannerIndex];
    });

    document.getElementById("prev-banner").addEventListener("click", () => {
        currentBannerIndex = (currentBannerIndex - 1 + bannerImages.length) % bannerImages.length;
        bannerImgElement.src = bannerImages[currentBannerIndex];
    });

    // Incrementar contador del carrito al hacer clic en "Comprar"
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", () => {
            cartCountElement.textContent = parseInt(cartCountElement.textContent) + 1;
        });
    });

    // Alerta cuando se hace clic en el ícono de Windows
        document.getElementById("windows-icon").addEventListener("click", () => {
            alert("Este juego es compatible con Windows");
        });
    
    // Alerta cuando se hace clic en el ícono de Linux
        document.getElementById("apple-icon").addEventListener("click", () => {
            alert("Este juego es compatible con macOS");
        });
    
    // Alerta cuando se hace clic en el ícono de Linux
    document.getElementById("linux-icon").addEventListener("click", () => {
        alert("Este juego es compatible con Linux");
    });
});


