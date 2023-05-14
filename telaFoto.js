// Cria um objeto vazio para armazenar os endereços das imagens
const imageUrls = {};

function loadPreviewImage(input, preview, position) {
  input.addEventListener('change', (event) => {
    const imageLoading = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageLoading);
    reader.addEventListener('load', (event) => {
      const thisReader = event.target;
      const img = document.createElement('img');
      img.src = thisReader.result;
      img.className = 'tamanhoFoto';
      preview.innerHTML = '';
      preview.appendChild(img);

      // Adiciona o endereço da imagem no objeto imageUrls
      imageUrls[`image${position}`] = thisReader.result;

      // Salva o objeto imageUrls no localStorage
      localStorage.setItem('imageUrls', JSON.stringify(imageUrls));
    });
  });
}

for (let i = 1; i <= 9; i++) {
  const input = document.getElementById(`inputPicture0${i}`);
  const preview = document.getElementById(`span0${i}`);
  loadPreviewImage(input, preview, i);
}

// const getPicture01 = document.getElementById('inputPicture01');
// const img01 = document.getElementById('span01');
// loadPreviewImage(getPicture01, img01);

// const getPicture02 = document.getElementById('inputPicture02');
// const img02 = document.getElementById('span02');
// loadPreviewImage(getPicture02, img02);

// const getPicture03 = document.getElementById('inputPicture03');
// const img03 = document.getElementById('span03');
// loadPreviewImage(getPicture03, img03);

// const getPicture04 = document.getElementById('inputPicture04');
// const img04 = document.getElementById('span04');
// loadPreviewImage(getPicture04, img04);

// const getPicture05 = document.getElementById('inputPicture05');
// const img05 = document.getElementById('span05');
// loadPreviewImage(getPicture05, img05);

// const getPicture06 = document.getElementById('inputPicture06');
// const img06 = document.getElementById('span06');
// loadPreviewImage(getPicture06, img06);

// const getPicture07 = document.getElementById('inputPicture07');
// const img07 = document.getElementById('span07');
// loadPreviewImage(getPicture07, img07);

// const getPicture08 = document.getElementById('inputPicture08');
// const img08 = document.getElementById('span08');
// loadPreviewImage(getPicture08, img08);

// const getPicture09 = document.getElementById('inputPicture09');
// const img09 = document.getElementById('span09');
// loadPreviewImage(getPicture09, img09);





// //LinhaCamisas

// const getPicture01 = document.getElementById('inputPicture01');
// const img01 = document.getElementById('span01');
// getPicture01.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//       const thisReader = event.target;
//       const img = document.createElement('img');
//       img.src = thisReader.result;
//       img.className = 'tamanhoFoto';
//       img01.innerHTML = '';
//       img01.appendChild(img);
//     });
//   });

// const getPicture02 = document.getElementById('inputPicture02');
// const img02 = document.getElementById('span02');
// getPicture02.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//     const thisReader = event.target;
//     const img = document.createElement('img');
//     img.innerHTML = '';
//     img.src = thisReader.result;
//     img.className = 'tamanhoFoto';
//     img02.innerHTML = '';
//     img02.appendChild(img);
//   });
// });

// const getPicture03 = document.getElementById('inputPicture03');
// const img03 = document.getElementById('span03');
// getPicture03.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//     const thisReader = event.target;
//     const img = document.createElement('img');
//     img.src = thisReader.result;
//     img.className = 'tamanhoFoto';
//     img03.innerHTML = '';
//     img03.appendChild(img);
//   });
// });

// //LinhaCalcas

// const getPicture04 = document.getElementById('inputPicture04');
// const img04 = document.getElementById('span04');
// getPicture04.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//     const thisReader = event.target;
//     const img = document.createElement('img');
//     img.src = thisReader.result;
//     img.className = 'tamanhoFoto';
//     img04.innerHTML = '';
//     img04.appendChild(img);
//   });
// });

// const getPicture05 = document.getElementById('inputPicture05');
// const img05 = document.getElementById('span05');
// getPicture05.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//     const thisReader = event.target;
//     const img = document.createElement('img');
//     img.src = thisReader.result;
//     img.className = 'tamanhoFoto';
//     img05.innerHTML = '';
//     img05.appendChild(img);
//   });
// });

// const getPicture06 = document.getElementById('inputPicture06');
// const img06 = document.getElementById('span06');
// getPicture06.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//     const thisReader = event.target;
//     const img = document.createElement('img');
//     img.src = thisReader.result;
//     img.className = 'tamanhoFoto';
//     img06.innerHTML = '';
//     img06.appendChild(img);
//   });
// });

// //LinhaSapatos

// const getPicture07 = document.getElementById('inputPicture07');
// const img07 = document.getElementById('span07');
// getPicture07.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//     const thisReader = event.target;
//     const img = document.createElement('img');
//     img.src = thisReader.result;
//     img.className = 'tamanhoFoto';
//     img07.innerHTML = '';
//     img07.appendChild(img);
//   });
// });

// const getPicture08 = document.getElementById('inputPicture08');
// const img08 = document.getElementById('span08');
// getPicture08.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//     const thisReader = event.target;
//     const img = document.createElement('img');
//     img.src = thisReader.result;
//     img.className = 'tamanhoFoto';
//     img08.innerHTML = '';
//     img08.appendChild(img);
//   });
// });

// const getPicture09 = document.getElementById('inputPicture09');
// const img09 = document.getElementById('span09');
// getPicture09.addEventListener('change', (event) => {
//   const imageLoading = (event.target.files[0]);
//   const reader = new FileReader();
//   reader.readAsDataURL(imageLoading);
//   reader.addEventListener('load', (event) => {
//     const thisReader = event.target;
//     const img = document.createElement('img');
//     img.src = thisReader.result;
//     img.className = 'tamanhoFoto';
//     img09.innerHTML = '';
//     img09.appendChild(img);
//   });
// });