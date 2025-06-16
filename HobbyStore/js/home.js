document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.image-2');
    let currentSlide = 0;


    slides[0].style.opacity = '1';

    function nextSlide() {

        slides[currentSlide].style.opacity = '0';


        currentSlide = (currentSlide + 1) % slides.length;


        slides[currentSlide].style.opacity = '1';
    }

    // Tự động chuyển slide mỗi 3 giây
    setInterval(nextSlide, 4000);
});

    // Thêm vào cuối script hiện tại
    document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    // Tìm các elements
    const editIcon = document.querySelector('.edit-icon');
    const userDropdown = document.querySelector('.user-dropdown');

    console.log('Edit icon:', editIcon);
    console.log('User dropdown:', userDropdown);

    if (editIcon && userDropdown) {
    console.log('Both elements found');

    editIcon.addEventListener('click', function(e) {
    console.log('Edit icon clicked!');
    e.preventDefault();
    e.stopPropagation();

    const isVisible = userDropdown.style.display === 'block';
    console.log('Is visible:', isVisible);

    if (isVisible) {
    console.log('Hiding dropdown');
    userDropdown.style.opacity = '0';
    userDropdown.style.transform = 'translateY(-10px)';
    setTimeout(() => {
    userDropdown.style.display = 'none';
}, 300);
} else {
    console.log('Showing dropdown');
    userDropdown.style.display = 'block';
    userDropdown.style.opacity = '0';
    userDropdown.style.transform = 'translateY(-10px)';

    setTimeout(() => {
    userDropdown.style.opacity = '1';
    userDropdown.style.transform = 'translateY(0)';
}, 10);
}
});
} else {
    console.log('Elements not found!');
}
});

document.addEventListener('DOMContentLoaded', function() {
    // CSKH Button functionality
    const cskhButton = document.querySelector('.CSKH-button');

    if (cskhButton) {
        cskhButton.addEventListener('click', function() {
            // Chuyển đến trang CSKH
            window.location.href = 'CSKH.html';
        });

        // Thêm cursor pointer
        cskhButton.style.cursor = 'pointer';
    }
});