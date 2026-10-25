/* ==========================================================================
   Кнопка «Показать, что заменить» — подсвечивает тексты и фото-заглушки.
   Чтобы убрать: удалите этот файл, строку <script src="assets/js/placeholders.js">
   в HTML-файлах и блок «ПОДСВЕТКА ЗАГЛУШЕК» в конце style.css.
   ========================================================================== */
(function () {
  var KEY = 'show-placeholders';
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'ph-toggle';

  function apply(on) {
    document.documentElement.classList.toggle('show-ph', on);
    btn.setAttribute('aria-pressed', String(on));
    var count = document.querySelectorAll('.ph, img.ph-img').length;
    btn.textContent = on ? 'Скрыть подсветку (' + count + ')' : 'Показать, что заменить';
    try { localStorage.setItem(KEY, on ? '1' : ''); } catch (e) {}
  }

  btn.addEventListener('click', function () {
    apply(!document.documentElement.classList.contains('show-ph'));
  });

  var saved = false;
  try { saved = localStorage.getItem(KEY) === '1'; } catch (e) {}
  document.body.appendChild(btn);
  apply(saved);

  // Портфолио дорисовывает карточки скриптом — обновляем счётчик
  document.addEventListener('portfolio:rendered', function () {
    apply(document.documentElement.classList.contains('show-ph'));
  });
})();
