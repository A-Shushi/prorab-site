/* ==========================================================================
   ПОРТФОЛИО — список объектов
   Чтобы добавить объект: скопируйте любой блок { ... } целиком, вставьте
   в начало списка и поменяйте данные. Фото положите в assets/img/.

   id        — уникальный код латиницей (по нему открывается ссылка portfolio.html#p13)
   category  — фильтр: 'apartments' (Квартиры), 'houses' (Дома), 'finishing' (Отделка)
   type      — подпись над названием
   title     — название объекта
   area      — площадь, м² (число или текст)
   term      — срок работ
   place     — район или посёлок
   task      — с чем пришёл заказчик, 1–2 предложения
   done      — что сделали, список
   photos    — фото: первое станет обложкой. src — путь, alt — описание фото
   ========================================================================== */
var PROJECTS = [
  {
    id: 'p01',
    category: 'apartments',
    type: 'Квартира · вторичка',
    title: 'Трёхкомнатная квартира, капитальный ремонт',
    area: '78',
    term: '4 месяца',
    place: '[Район]',
    task: 'Дом 1980-х: кривые стены, старая алюминиевая проводка, санузел под полную замену. Заказчики жили в другом городе и приезжали раз в месяц.',
    done: ['Демонтаж до бетона, новые перегородки', 'Электрика с нуля, новый щит', 'Выравнивание стен и пола, тёплый пол на кухне', 'Кухня, санузел, чистовая отделка', 'Фотоотчёт после каждого этапа в Telegram'],
    photos: [
      { src: 'assets/img/portfolio-01-kitchen-after.webp', alt: 'Кухня после капитального ремонта: тёмные фасады, светлая столешница' },
      { src: 'assets/img/portfolio-01-kitchen-detail.webp', alt: 'Кухня с островом и подсветкой рабочей зоны' }
    ]
  },
  {
    id: 'p02',
    category: 'finishing',
    type: 'Отделка · санузел',
    title: 'Санузел с душевой',
    area: '6',
    term: '3 недели',
    place: '[Район]',
    task: 'Заменить ванну на душевую без поддона и спрятать все коммуникации.',
    done: ['Демонтаж старой плитки и труб', 'Новая разводка воды и канализации', 'Гидроизоляция с проверкой проливом', 'Трап, крупноформатная плитка, инсталляция'],
    photos: [
      { src: 'assets/img/portfolio-02-bathroom-after.webp', alt: 'Санузел после ремонта: стеклянная душевая и тумба с раковиной' },
      { src: 'assets/img/portfolio-02-bathroom-detail.webp', alt: 'Тумба из дерева и подвесной унитаз в отремонтированном санузле' }
    ]
  },
  {
    id: 'p03',
    category: 'finishing',
    type: 'Отделка · гостиная',
    title: 'Гостиная: стены, пол, свет',
    area: '24',
    term: '1 месяц',
    place: '[Район]',
    task: 'Освежить гостиную без капитального ремонта: ровные стены под покраску, новый пол и свет.',
    done: ['Шпаклёвка стен под покраску', 'Паркет ёлочкой', 'Перенос розеток и новые точки света'],
    photos: [
      { src: 'assets/img/portfolio-03-living-room-after.webp', alt: 'Гостиная после ремонта: серый диван и деревянный столик' },
      { src: 'assets/img/portfolio-03-living-room-detail.webp', alt: 'Угол гостиной с комодом и паркетом ёлочкой' }
    ]
  },
  {
    id: 'p04',
    category: 'apartments',
    type: 'Квартира · новостройка',
    title: 'Двухкомнатная в новостройке, от бетона',
    area: '62',
    term: '3,5 месяца',
    place: '[ЖК, район]',
    task: 'Квартира от застройщика без отделки. Нужно было уложиться в бюджет и сдать к определённой дате.',
    done: ['Приёмка квартиры у застройщика', 'Перегородки, стяжка, штукатурка', 'Электрика и сантехника', 'Чистовая отделка и установка дверей'],
    photos: [
      { src: 'assets/img/portfolio-04-bedroom-after.webp', alt: 'Спальня в новостройке после ремонта' },
      { src: 'assets/img/portfolio-04-bedroom-detail.webp', alt: 'Кровать и тумба у стены в отремонтированной спальне' }
    ]
  },
  {
    id: 'p05',
    category: 'houses',
    type: 'Дом · газобетон',
    title: 'Дом под ключ',
    area: '186',
    term: '11 месяцев',
    place: '[Посёлок]',
    task: 'Построить двухэтажный дом по готовому проекту и сразу сделать внутреннюю отделку.',
    done: ['Монолитная плита фундамента', 'Коробка из газобетона, перекрытия', 'Плоская кровля, окна, фасад', 'Инженерные системы и отделка'],
    photos: [
      { src: 'assets/img/portfolio-05-house-exterior.webp', alt: 'Двухэтажный дом после завершения строительства' },
      { src: 'assets/img/portfolio-05-house-foundation.webp', alt: 'Армирование фундаментной плиты на стройке' }
    ]
  },
  {
    id: 'p06',
    category: 'houses',
    type: 'Дом · кирпич',
    title: 'Коттедж с мансардой',
    area: '154',
    term: '10 месяцев',
    place: '[Посёлок]',
    task: 'Дом для постоянного проживания семьи. Заказчик хотел контролировать бюджет по каждому этапу.',
    done: ['Ленточный фундамент', 'Кирпичная кладка, мансардный этаж', 'Кровля, утепление, фасад', 'Смета и отчёт по каждому этапу'],
    photos: [
      { src: 'assets/img/portfolio-06-cottage-exterior.webp', alt: 'Коттедж с мансардой и балконом' },
      { src: 'assets/img/portfolio-06-cottage-facade.webp', alt: 'Фасад коттеджа с деревянной отделкой' }
    ]
  },
  {
    id: 'p07',
    category: 'houses',
    type: 'Дом · технадзор',
    title: 'Каркасный дом: контроль бригады заказчика',
    area: '120',
    term: '5 месяцев',
    place: '[Посёлок]',
    task: 'У заказчика была своя бригада. Нужен был человек, который проверит каждый этап и не даст сэкономить на скрытом.',
    done: ['Выезды на объект по графику', 'Приёмка фундамента, каркаса, утепления', 'Отчёт с фото и списком замечаний после каждого выезда'],
    photos: [
      { src: 'assets/img/portfolio-07-frame-house-process.webp', alt: 'Каркасный дом в строительных лесах' },
      { src: 'assets/img/portfolio-07-frame-house-roof.webp', alt: 'Монтаж стропил каркасного дома' }
    ]
  },
  {
    id: 'p08',
    category: 'apartments',
    type: 'Квартира · вторичка',
    title: 'Кухня-гостиная вместо двух комнат',
    area: '54',
    term: '2,5 месяца',
    place: '[Район]',
    task: 'Объединить кухню и комнату, согласовать перепланировку, сделать кухню с островом.',
    done: ['Демонтаж ненесущей стены', 'Перенос мокрой зоны и вытяжки', 'Отделка, свет, монтаж кухни'],
    photos: [
      { src: 'assets/img/portfolio-08-kitchen-dining-after.webp', alt: 'Кухня-гостиная с обеденным столом после ремонта' },
      { src: 'assets/img/portfolio-08-kitchen-island.webp', alt: 'Кухонный остров с барными стульями' }
    ]
  },
  {
    id: 'p09',
    category: 'finishing',
    type: 'Отделка · санузел',
    title: 'Ванная комната с окном',
    area: '8',
    term: '1 месяц',
    place: '[Район]',
    task: 'Полный ремонт ванной в доме: ванна, инсталляция, тумба, тёплый пол.',
    done: ['Гидроизоляция пола и стен', 'Тёплый пол', 'Плитка, деревянные панели, сантехника'],
    photos: [
      { src: 'assets/img/portfolio-09-bathroom-after.webp', alt: 'Ванная комната с окном и деревянными панелями' },
      { src: 'assets/img/portfolio-09-bathroom-vanity.webp', alt: 'Тумба с раковиной и синей плиткой' }
    ]
  },
  {
    id: 'p10',
    category: 'apartments',
    type: 'Квартира · новостройка',
    title: 'Однушка от бетона до предчистовой',
    area: '38',
    term: '2 месяца',
    place: '[ЖК, район]',
    task: 'Подготовить квартиру под сдачу в аренду: быстро, без лишних трат.',
    done: ['Штукатурка стен, стяжка', 'Электрика и сантехника', 'Ламинат, покраска, двери'],
    photos: [
      { src: 'assets/img/portfolio-10-new-build-after.webp', alt: 'Светлая комната в новостройке после ремонта' },
      { src: 'assets/img/portfolio-10-new-build-process.webp', alt: 'Квартира в новостройке на этапе черновой отделки' }
    ]
  },
  {
    id: 'p11',
    category: 'finishing',
    type: 'Отделка · квартира',
    title: 'Стены и полы во всей квартире',
    area: '70',
    term: '6 недель',
    place: '[Район]',
    task: 'Электрика уже была сделана. Нужна была только чистовая отделка стен и полов.',
    done: ['Шпаклёвка и покраска стен', 'Ламинат и плинтус', 'Откосы и двери'],
    photos: [
      { src: 'assets/img/portfolio-11-parquet-after.webp', alt: 'Квартира после чистовой отделки стен и полов' },
      { src: 'assets/img/portfolio-11-walls-painting.webp', alt: 'Маляр красит стену валиком' },
      { src: 'assets/img/portfolio-11-room-after.webp', alt: 'Пустая комната с ровными белыми стенами и деревянным полом' }
    ]
  },
  {
    id: 'p12',
    category: 'apartments',
    type: 'Квартира · по дизайн-проекту',
    title: 'Евродвушка с кухней-гостиной',
    area: '66',
    term: '4 месяца',
    place: '[Район]',
    task: 'Реализовать дизайн-проект заказчика без отступлений и без роста сметы.',
    done: ['Работа по чертежам дизайнера', 'Скрытая подсветка, сложный потолок', 'Согласование материалов с дизайнером', 'Чистовая отделка, монтаж мебели'],
    photos: [
      { src: 'assets/img/portfolio-12-open-plan-after.webp', alt: 'Кухня-гостиная в евродвушке после ремонта' },
      { src: 'assets/img/portfolio-12-open-plan-kitchen.webp', alt: 'Вечерний свет в гостиной с диваном и кухней' }
    ]
  }
];

/* ==========================================================================
   Дальше — код галереи. Для добавления объектов его менять не нужно.
   ========================================================================== */
(function () {
  'use strict';

  var grid = document.getElementById('projects-grid');
  if (!grid) return;

  var lightbox = document.getElementById('lightbox');
  var current = null;
  var index = 0;
  var lastFocus = null;

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Карточки */
  grid.innerHTML = PROJECTS.map(function (p, i) {
    var cover = p.photos[0];
    return (
      '<button type="button" class="project-card" data-id="' + esc(p.id) + '" data-category="' + esc(p.category) + '" data-reveal>' +
        '<div class="project-card__media">' +
          '<img class="ph-img" src="' + esc(cover.src) + '" alt="' + esc(cover.alt) + '" width="1600" height="1200"' + (i > 2 ? ' loading="lazy"' : '') + '>' +
        '</div>' +
        '<div class="project-card__meta">' +
          '<span class="project-card__type">' + esc(p.type) + '</span>' +
          '<h2 class="project-card__title h3">' + esc(p.title) + '</h2>' +
          '<span class="project-card__facts"><span><span class="ph">' + esc(p.area) + '</span> м²</span><span><span class="ph">' + esc(p.term) + '</span></span><span>' + p.photos.length + ' фото</span></span>' +
        '</div>' +
      '</button>'
    );
  }).join('');

  // Появление карточек (main.js уже отработал до отрисовки)
  var cards = grid.querySelectorAll('.project-card');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    cards.forEach(function (c) { io.observe(c); });
  } else {
    cards.forEach(function (c) { c.classList.add('is-visible'); });
  }
  document.dispatchEvent(new CustomEvent('portfolio:rendered'));

  /* Фильтры */
  var filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    var cat = btn.getAttribute('data-filter');
    var count = cat === 'all' ? PROJECTS.length : PROJECTS.filter(function (p) { return p.category === cat; }).length;
    btn.insertAdjacentHTML('beforeend', '<sup>' + count + '</sup>');

    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      cards.forEach(function (card) {
        var show = cat === 'all' || card.getAttribute('data-category') === cat;
        card.hidden = !show;
        if (show) card.classList.add('is-visible');
      });
    });
  });

  /* Лайтбокс */
  var lbImg = lightbox.querySelector('.lightbox__figure img');
  var lbCounter = lightbox.querySelector('.lightbox__counter');
  var lbThumbs = lightbox.querySelector('.lightbox__thumbs');
  var lbPrev = lightbox.querySelector('.lightbox__nav--prev');
  var lbNext = lightbox.querySelector('.lightbox__nav--next');

  function showPhoto(i) {
    var photos = current.photos;
    index = (i + photos.length) % photos.length;
    lbImg.src = photos[index].src;
    lbImg.alt = photos[index].alt;
    lbCounter.textContent = (index + 1) + ' / ' + photos.length;
    lbThumbs.querySelectorAll('button').forEach(function (b, n) {
      b.classList.toggle('is-active', n === index);
    });
  }

  function open(id) {
    current = PROJECTS.filter(function (p) { return p.id === id; })[0];
    if (!current) return;
    lastFocus = document.activeElement;

    lightbox.querySelector('.lightbox__type').textContent = current.type;
    lightbox.querySelector('.lightbox__title').textContent = current.title;
    lightbox.querySelector('[data-lb="area"]').innerHTML = '<span class="ph">' + esc(current.area) + '</span> м²';
    lightbox.querySelector('[data-lb="term"]').innerHTML = '<span class="ph">' + esc(current.term) + '</span>';
    lightbox.querySelector('[data-lb="place"]').innerHTML = '<span class="ph">' + esc(current.place || '—') + '</span>';
    lightbox.querySelector('[data-lb="photos"]').textContent = current.photos.length;
    lightbox.querySelector('[data-lb="task"]').textContent = current.task;
    lightbox.querySelector('[data-lb="done"]').innerHTML = current.done.map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('');

    lbThumbs.innerHTML = current.photos.map(function (ph, n) {
      return '<button type="button" aria-label="Фото ' + (n + 1) + '"><img class="ph-img" src="' + esc(ph.src) + '" alt=""></button>';
    }).join('');
    lbThumbs.querySelectorAll('button').forEach(function (b, n) {
      b.addEventListener('click', function () { showPhoto(n); });
    });
    var single = current.photos.length < 2;
    lbPrev.hidden = single;
    lbNext.hidden = single;
    lbThumbs.hidden = single;

    showPhoto(0);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.scrollTop = 0;
    document.body.classList.add('no-scroll');
    lightbox.querySelector('.lightbox__close').focus();
    if (history.replaceState) history.replaceState(null, '', '#' + current.id);
  }

  function close(keepScroll) {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus && keepScroll !== true) lastFocus.focus();
  }

  grid.addEventListener('click', function (e) {
    var card = e.target.closest('.project-card');
    if (card) open(card.getAttribute('data-id'));
  });
  lightbox.querySelector('.lightbox__close').addEventListener('click', close);
  // «Хочу так же» закрывает окно и ведёт к форме
  lightbox.querySelector('.lightbox__cta').addEventListener('click', function () { close(true); });
  lbPrev.addEventListener('click', function () { showPhoto(index - 1); });
  lbNext.addEventListener('click', function () { showPhoto(index + 1); });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox__inner')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') showPhoto(index - 1);
    if (e.key === 'ArrowRight') showPhoto(index + 1);
  });

  // Свайп по фото на телефоне
  var touchX = null;
  lbImg.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lbImg.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) showPhoto(index + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  // Ссылка вида portfolio.html#p05 сразу открывает объект
  if (location.hash) open(location.hash.slice(1));
  window.addEventListener('hashchange', function () {
    if (location.hash) open(location.hash.slice(1));
  });
})();
