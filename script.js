// Scroll smooth pada navbar
$(document).ready(function () {
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70, // Mengatur posisi scroll
        },
        800 // Kecepatan animasi dalam milidetik
      );
    }
  });
});

// Auto close navbar saat link diklik pada mode mobile
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// Toggle navbar saat tombol navbar-toggler diklik pada mode mobile
$(".navbar-toggler").on("click", function () {
  $(this).toggleClass("active");
});

// Kode JavaScript lainnya dapat ditambahkan di sini sesuai dengan kebutuhan Anda
