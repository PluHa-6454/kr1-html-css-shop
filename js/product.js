document.addEventListener('DOMContentLoaded', () => {
  const products = {
    '3x3': {
      title: 'Кубик 3×3 SpeedPro',
      description: 'Магнитный скорлуб 3×3 с плавным ходом из коробки. Подходит для новичков и соревнований: держит форму, не клинит и легко настраивается.',
      price: '1200',
      image: 'https://igrrai.ru/image/catalog/Golovolomki/Kubik-Rubika%203x3/GAN%20356%20RS/IMG_0007.jpg',
      badge: { text: 'Хит', modifier: 'hit' },
      meta: 'Кубик 3×3 SpeedPro — магнитный скорлуб для спидкубинга.',
      specs: [
        ['Категория', 'Спидкубины, кубик 3×3'],
        ['Материал', 'ABS-пластик'],
        ['Магниты', 'Есть'],
        ['Размер', '56 мм'],
        ['Гарантия', '12 месяцев'],
        ['Наличие', 'В наличии']
      ]
    },
    '2x2': {
      title: 'Кубик 2×2 Mini',
      description: 'Компактный кубик для освоения базовых алгоритмов. Лёгкий и доступный по цене — хороший первый кубик перед переходом на 3×3.',
      price: '700',
      image: 'https://avatars.mds.yandex.net/get-mpic/5177817/img_id8714847814257320974.jpeg/orig',
      badge: null,
      meta: 'Кубик 2×2 Mini — компактный кубик для освоения базовых алгоритмов.',
      specs: [
        ['Категория', 'Спидкубины, кубик 2×2'],
        ['Материал', 'ABS-пластик'],
        ['Магниты', 'Нет'],
        ['Размер', '50 мм'],
        ['Гарантия', '6 месяцев'],
        ['Наличие', 'В наличии']
      ]
    },
    '4x4': {
      title: 'Кубик 4×4 Master',
      description: 'Следующий уровень после освоения 3×3. Появляются центральные секции и парные ребра — интересный вызов без лишней сложности.',
      price: '2100',
      image: 'https://avatars.mds.yandex.net/get-mpic/10229228/2a00000196cb249d3e2cf73827dd2a086e5d/orig',
      badge: { text: '−15%', modifier: '' },
      meta: 'Кубик 4×4 Master — кубик для тех, кто освоил 3×3.',
      specs: [
        ['Категория', 'Спидкубины, кубик 4×4'],
        ['Материал', 'ABS-пластик'],
        ['Магниты', 'Есть'],
        ['Размер', '62 мм'],
        ['Гарантия', '12 месяцев'],
        ['Наличие', 'В наличии']
      ]
    },
    'megaminx': {
      title: 'Мегаминкс Galaxy',
      description: 'Двенадцатигранный кубик для энтузиастов. Другая геометрия, те же принципы сборки — развивает пространственное мышление.',
      price: '2500',
      image: 'https://avatars.mds.yandex.net/get-mpic/16143397/2a0000019887b34a6d09ddf2438b3a2c5c1b/orig',
      badge: null,
      meta: 'Мегаминкс Galaxy — двенадцатигранный кубик для энтузиастов.',
      specs: [
        ['Категория', 'Спидкубины, мегаминкс'],
        ['Материал', 'ABS-пластик'],
        ['Магниты', 'Нет'],
        ['Размер', '75 мм'],
        ['Гарантия', '12 месяцев'],
        ['Наличие', 'В наличии']
      ]
    },
    'kit': {
      title: 'Набор спидкубера',
      description: 'Смазка, таймер и мешочек для кубика. Всё необходимое для ухода за кубиком и тренировок дома и на соревнованиях.',
      price: '1800',
      image: 'https://avatars.mds.yandex.net/get-mpic/14832725/2a0000019704a5049ac4ca5ef61a9739e6ff/orig',
      badge: { text: 'Новинка', modifier: 'new' },
      meta: 'Набор спидкубера — смазка, таймер и мешочек для кубика.',
      specs: [
        ['Категория', 'Аксессуары, набор спидкубера'],
        ['Состав', 'Смазка, таймер, мешочек'],
        ['Совместимость', 'Любые кубики 2×2–5×5, мегаминкс'],
        ['Размер мешочка', '110×110 мм'],
        ['Гарантия', '12 месяцев'],
        ['Наличие', 'В наличии']
      ]
    }
  };

  const productId = new URLSearchParams(window.location.search).get('id');
  const product = products[productId];

  const title = document.getElementById('product-title');
  // На странице нет нужных элементов — выходим (скрипт подключён только на product.html)
  if (!title || !product) return;

  const breadcrumb = document.getElementById('product-breadcrumb');
  const description = document.getElementById('product-description');
  const price = document.getElementById('product-price');
  const image = document.getElementById('product-img');
  const badge = document.getElementById('product-badge');
  const specs = document.getElementById('product-specs');
  const meta = document.querySelector('meta[name="description"]');

  title.textContent = product.title;
  if (breadcrumb) breadcrumb.textContent = product.title;
  if (description) description.textContent = product.description;
  if (price) price.textContent = `Цена: ${product.price} руб.`;

  if (image) {
    image.src = product.image;
    image.alt = product.title;
  }

  if (badge) {
    if (product.badge) {
      badge.textContent = product.badge.text;
      badge.className = product.badge.modifier
        ? `product-detail__badge product-detail__badge--${product.badge.modifier}`
        : 'product-detail__badge';
    } else {
      badge.hidden = true;
    }
  }

  if (specs) {
    specs.innerHTML = '';
    product.specs.forEach(([name, value]) => {
      const row = document.createElement('tr');

      const th = document.createElement('th');
      th.setAttribute('scope', 'row');
      th.textContent = name;

      const td = document.createElement('td');
      td.textContent = value;

      row.append(th, td);
      specs.append(row);
    });
  }

  document.title = `${product.title} — CubeMaster`;
  if (meta) meta.setAttribute('content', product.meta);
});
