const header = document.getElementById('header'),
  ms = document.getElementById('models'),
  m3 = document.getElementById('model3'),
  mx = document.getElementById('modelx'),
  my = document.getElementById('modely'),
  model = document.getElementById('model');

ms.onclick = function () {
  header.style.backgroundImage = 'url(images/image-1.png)';
  model.innerHTML = 'Model S';
};
m3.onclick = function () {
  header.style.backgroundImage = 'url(images/image-2.png)';
  model.innerHTML = 'Model 3';
};
mx.onclick = function () {
  header.style.backgroundImage = 'url(images/image-3.png)';
  model.innerHTML = 'Model X';
};
my.onclick = function () {
  header.style.backgroundImage = 'url(images/image-4.png)';
  model.innerHTML = 'Model Y';
};
