/* ==========================================================================
   Общие скрипты: шапка, меню, анимации, форма заявки
   ========================================================================== */
(function () {
  'use strict';

  var MAX_FILES = 5;
  var MAX_FILE_MB = 10;
  var ALLOWED_EXT = ['jpg', 'jpeg', 'png', 'webp', 'heic', 'heif', 'pdf'];

  /* ---------- Шапка: компактная при прокрутке ---------- */
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Мобильное меню ---------- */
  var burger = document.querySelector('.burger');
  var mobileNav = document.getElementById('mobile-nav');
  if (burger && mobileNav) {
    var setMenu = function (open) {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
      mobileNav.classList.toggle('is-open', open);
      document.body.classList.toggle('no-scroll', open);
    };
    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) setMenu(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1100) setMenu(false);
    });
  }

  /* ---------- Плавное появление блоков ---------- */
  var revealItems = document.querySelectorAll('[data-reveal]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Год в подвале ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Форма заявки ---------- */
  var form = document.getElementById('lead-form');
  if (!form) return;

  var success = form.parentElement.querySelector('.form-success');
  var statusBox = form.querySelector('.form-status');
  var submitBtn = form.querySelector('button[type="submit"]');
  var phoneInput = form.querySelector('input[name="phone"]');
  var fileInput = form.querySelector('input[type="file"]');
  var fileField = form.querySelector('[data-files]');
  var fileList = form.querySelector('.files');
  var selectedFiles = [];

  // Кнопки «Обсудить» у услуг: отмечают услугу в форме
  document.querySelectorAll('[data-service]').forEach(function (link) {
    link.addEventListener('click', function () {
      var value = link.getAttribute('data-service');
      form.querySelectorAll('input[name="services[]"]').forEach(function (box) {
        if (box.value === value) box.checked = true;
      });
    });
  });

  /* Маска телефона +7 (___) ___-__-__ */
  // Возвращает 11 цифр вида 7XXXXXXXXXX. Если после «+7» набрали номер целиком
  // (8 916… или 7 916…), лишнюю первую цифру убираем. Коды вида 812 и 800 не трогаем.
  function phoneDigits(value) {
    var v = value.trim();
    var rest = (v.indexOf('+7') === 0 ? v.slice(2) : v).replace(/\D/g, '');
    if (rest.length >= 11 && (rest.charAt(0) === '8' || rest.charAt(0) === '7')) rest = rest.slice(1);
    return '7' + rest.slice(0, 10);
  }
  function formatPhone(value) {
    var d = phoneDigits(value);
    var out = '+7';
    if (d.length > 1) out += ' (' + d.slice(1, 4);
    if (d.length >= 4) out += ')';
    if (d.length > 4) out += ' ' + d.slice(4, 7);
    if (d.length > 7) out += '-' + d.slice(7, 9);
    if (d.length > 9) out += '-' + d.slice(9, 11);
    return out;
  }
  phoneInput.addEventListener('input', function (e) {
    // При стирании не переформатируем, чтобы курсор не прыгал
    if (e.inputType && e.inputType.indexOf('delete') === 0) return;
    phoneInput.value = formatPhone(phoneInput.value);
  });
  phoneInput.addEventListener('focus', function () {
    if (!phoneInput.value) phoneInput.value = '+7 (';
  });
  phoneInput.addEventListener('blur', function () {
    if (phoneDigits(phoneInput.value).length <= 1) phoneInput.value = '';
    else phoneInput.value = formatPhone(phoneInput.value);
  });

  /* Файлы: свой список, чтобы можно было удалять по одному */
  function extOf(name) { return (name.split('.').pop() || '').toLowerCase(); }

  function renderFiles() {
    fileList.innerHTML = '';
    selectedFiles.forEach(function (file, i) {
      var li = document.createElement('li');
      var name = document.createElement('span');
      name.textContent = file.name + ' · ' + (file.size / 1048576).toFixed(1) + ' МБ';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Убрать файл ' + file.name);
      btn.textContent = '×';
      btn.addEventListener('click', function () {
        selectedFiles.splice(i, 1);
        renderFiles();
      });
      li.appendChild(name);
      li.appendChild(btn);
      fileList.appendChild(li);
    });
  }

  function setFileError(message) {
    fileField.classList.toggle('is-invalid', !!message);
    fileField.querySelector('.field__error').textContent = message || '';
  }

  if (fileInput) {
    fileInput.addEventListener('change', function () {
      var errors = [];
      Array.prototype.forEach.call(fileInput.files, function (file) {
        if (selectedFiles.length >= MAX_FILES) {
          errors.push('Можно приложить не больше ' + MAX_FILES + ' файлов');
        } else if (ALLOWED_EXT.indexOf(extOf(file.name)) === -1) {
          errors.push('«' + file.name + '»: подходят только фото и PDF');
        } else if (file.size > MAX_FILE_MB * 1048576) {
          errors.push('«' + file.name + '» больше ' + MAX_FILE_MB + ' МБ');
        } else {
          selectedFiles.push(file);
        }
      });
      fileInput.value = '';
      setFileError(errors.filter(function (v, i, a) { return a.indexOf(v) === i; }).join('. '));
      renderFiles();
    });
    var zone = fileInput.closest('.dropzone');
    ['dragenter', 'dragover'].forEach(function (ev) {
      zone.addEventListener(ev, function () { zone.classList.add('is-drag'); });
    });
    ['dragleave', 'drop'].forEach(function (ev) {
      zone.addEventListener(ev, function () { zone.classList.remove('is-drag'); });
    });
  }

  // Большие фото с телефона уменьшаем до 2000px, чтобы заявка уходила быстро
  function shrinkImage(file) {
    var type = file.type;
    if (!/^image\/(jpeg|png|webp)$/.test(type) || file.size < 1.5 * 1048576 || !window.createImageBitmap) {
      return Promise.resolve(file);
    }
    return createImageBitmap(file).then(function (bmp) {
      var scale = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
      var canvas = document.createElement('canvas');
      canvas.width = Math.round(bmp.width * scale);
      canvas.height = Math.round(bmp.height * scale);
      canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          if (!blob || blob.size >= file.size) return resolve(file);
          resolve(new File([blob], file.name.replace(/\.\w+$/, '') + '.jpg', { type: 'image/jpeg' }));
        }, 'image/jpeg', 0.85);
      });
    }).catch(function () { return file; });
  }

  /* Проверка полей */
  function setInvalid(el, invalid) {
    if (el) el.classList.toggle('is-invalid', invalid);
    return invalid;
  }

  function validate() {
    var firstBad = null;
    var nameInput = form.elements.name;
    var consent = form.elements.consent;

    if (setInvalid(nameInput.closest('.field'), nameInput.value.trim().length < 2)) firstBad = firstBad || nameInput;
    if (setInvalid(phoneInput.closest('.field'), phoneDigits(phoneInput.value).length !== 11)) firstBad = firstBad || phoneInput;
    if (setInvalid(consent.closest('.consent'), !consent.checked)) firstBad = firstBad || consent;

    if (firstBad) {
      firstBad.closest('.field, .consent').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      firstBad.focus({ preventScroll: true });
    }
    return !firstBad;
  }

  form.addEventListener('input', function (e) {
    var holder = e.target.closest('.is-invalid');
    if (holder && holder !== fileField) holder.classList.remove('is-invalid');
  });
  form.addEventListener('change', function (e) {
    var holder = e.target.closest('.consent.is-invalid');
    if (holder && e.target.checked) holder.classList.remove('is-invalid');
  });

  /* Запасной вариант: если отправка не удалась, даём прямые контакты */
  function showError(message) {
    var tel = document.querySelector('a[href^="tel:"]');
    var tg = document.querySelector('a[href*="t.me/"]');
    var wa = document.querySelector('a[href*="wa.me/"]');
    statusBox.innerHTML = '';
    var p = document.createElement('p');
    p.textContent = (message || 'Не получилось отправить заявку.') + ' Пожалуйста, позвоните или напишите напрямую — отвечу сразу.';
    var actions = document.createElement('div');
    actions.className = 'form-status__actions';
    [[tel, 'Позвонить'], [tg, 'Telegram'], [wa, 'WhatsApp']].forEach(function (pair) {
      if (!pair[0]) return;
      var a = document.createElement('a');
      a.className = 'btn btn--sm ' + (pair[1] === 'Позвонить' ? 'btn--primary' : 'btn--ghost');
      a.href = pair[0].getAttribute('href');
      a.textContent = pair[1];
      if (pair[1] !== 'Позвонить') { a.target = '_blank'; a.rel = 'noopener'; }
      actions.appendChild(a);
    });
    statusBox.appendChild(p);
    statusBox.appendChild(actions);
    statusBox.classList.add('is-visible');
  }

  function setLoading(on) {
    submitBtn.classList.toggle('is-loading', on);
    submitBtn.disabled = on;
    submitBtn.querySelector('.btn__text').textContent = on ? 'Отправляю' : 'Отправить заявку';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    statusBox.classList.remove('is-visible');
    if (!validate()) return;

    setLoading(true);

    var data = new FormData(form);
    data.delete('files[]');
    data.append('page', window.location.href);
    data.append('page_title', document.title);

    var controller = window.AbortController ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, 45000) : null;

    Promise.all(selectedFiles.map(shrinkImage))
      .then(function (files) {
        files.forEach(function (file) { data.append('files[]', file, file.name); });
        return fetch(form.getAttribute('action'), {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' },
          signal: controller ? controller.signal : undefined
        });
      })
      .then(function (res) {
        return res.json().catch(function () { return { ok: false }; });
      })
      .then(function (json) {
        if (!json || !json.ok) throw { serverMessage: json && json.error ? String(json.error) : '' };
        form.style.display = 'none';
        success.classList.add('is-visible');
        success.focus({ preventScroll: true });
        success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        // Цель для Яндекс.Метрики (раскомментируйте и подставьте номер счётчика):
        // if (window.ym) ym(00000000, 'reachGoal', 'lead');
      })
      .catch(function (err) {
        // Показываем только понятные сообщения от сервера, а не технические ошибки браузера
        showError(err && err.serverMessage ? err.serverMessage : '');
      })
      .then(function () {
        if (timer) clearTimeout(timer);
        setLoading(false);
      });
  });
})();
