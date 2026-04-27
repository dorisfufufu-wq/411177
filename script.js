// 確保 DOM 載入後執行
document.addEventListener('DOMContentLoaded', () => {
    
    // 簡單的點擊按鈕 console 紀錄 (Debug 用)
    const primaryBtn = document.querySelector('.btn.primary');
    
    if (primaryBtn) {
        primaryBtn.addEventListener('click', () => {
            console.log("User clicked 'View Work' button.");
        });
    }

    // 平滑捲動補充（雖然 CSS 已經有 scroll-behavior，JS 可以增加相容性）
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 扣除 navbar 高度
                    behavior: 'smooth'
                });
            }
        });
    });
});