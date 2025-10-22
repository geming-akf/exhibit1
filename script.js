const toggleBtn = document.querySelector('.theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
}
// 聯絡表單提交事件
const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you');
const section = document.getElementById('contact-section');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // 防止刷新頁面
    form.classList.add('hidden');
    thankYou.classList.remove('hidden');
  });
}
