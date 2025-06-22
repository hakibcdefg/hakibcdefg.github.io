
    const backToTopButton = document.getElementById("backToTop");
    window.onscroll = () => {
        backToTopButton.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
    };
        backToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

    document.getElementById("unitFilter").addEventListener("change", function () {
    const value = this.value;
    const cards = document.querySelectorAll(".unit-card");

        cards.forEach(card => {
            const type = card.getAttribute("data-type");
            if (value === "all" || value === type) {
            card.style.display = "block";
            } else {
            card.style.display = "none";
                }
            });
        });
      
    function setUnit(unitName) {
      document.getElementById('unitType').value = unitName;
    }

    document.getElementById("bookingForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value;
      const unit = document.getElementById("unitType").value;

      alert(`Terima kasih ${nama}, permintaan booking untuk unit ${unit} telah dikirim!`);
      this.reset();
      const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
      modal.hide();
    });
    
    document.getElementById("brosurForm").addEventListener("submit", function (e) {
      e.preventDefault();
      
      alert(`Brosur telah terkirim di Email atau Nomor Handphone kamu`);
      this.reset();
      const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
      modal.hide();
    });