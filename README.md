<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>UseReducer React App</h1>

  <h2>Genel Bakış</h2>
  <p>Bu proje, React kullanarak basit bir <code>useReducer</code> örneği içermektedir. Proje, bir sayaç bileşeni (<code>Counter</code>) ve bir yapılacaklar listesi bileşeni (<code>TodoList</code>) içerir. Bu bileşenler, <code>useReducer</code> hook'u ile durumu yönetir.</p>

  <h2>Kurulum</h2>
  <pre><code>npm install</code></pre>
  <p>Bu komut, gerekli bağımlılıkları indirir.</p>

  <h2>Başlatma</h2>
  <pre><code>npm run dev</code></pre>
  <p>Bu komut, uygulamayı başlatır. Tarayıcınızda <code>http://localhost:3000</code> adresinde uygulamayı görebilirsiniz.</p>

  <h2>Dosya Yapısı</h2>
  <ul>
    <li><code>App.jsx</code>: Ana bileşeni içerir, <code>Counter</code> ve <code>TodoList</code> bileşenlerini render eder.</li>
    <li><code>Counter.jsx</code>: Bir sayaç bileşeni olup, <code>useReducer</code> kullanarak sayacı arttırma ve azaltma işlevselliği sağlar.</li>
    <li><code>TodoList.jsx</code>: Bir yapılacaklar listesi bileşeni olup, yeni görevler ekleme, mevcut görevleri silme ve tüm görevleri temizleme işlevselliği sağlar.</li>
    <li><code>counterReducer.js</code>: <code>Counter</code> bileşeni için kullanılan reducer fonksiyonunu içerir.</li>
    <li><code>todoReducer.js</code>: <code>TodoList</code> bileşeni için kullanılan reducer fonksiyonunu ve başlangıç durumunu içerir.</li>
  </ul>

  <h2>Kullanılan Teknolojiler</h2>
  <ul>
    <li><strong>React</strong>: Kullanıcı arayüzü oluşturmak için kullanılan JavaScript kütüphanesi.</li>
    <li><strong>useReducer</strong>: Daha karmaşık durum mantıklarını yönetmek için kullanılan bir React hook'u.</li>
    <li><strong>Bootstrap</strong>: Uygulamada basit stilizasyon için kullanılan CSS framework'ü.</li>
  </ul>

  <h2>Lisans</h2>
  <p>Bu proje MIT Lisansı altında lisanslanmıştır.</p>

</body>
</html>