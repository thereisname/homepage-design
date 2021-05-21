const profile = document.querySelector('.js-profile-file'),
  image_file = profile.querySelector('.js-image-file'),
  preview = profile.querySelector('.preview');

const fileTypes = ['image/apng', 'image/bmp', 'image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/svg+xml', 'image/tiff', 'image/webp', 'image/x-icon'];

function validFileType(curFile) {
  return fileTypes.includes(curFile.type);
}

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFile = image_file.files;
  if (curFile.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No file currently selected for upload';
    preview.appendChild(para);
  } else {
    for (const file of curFile) {
      const para = document.createElement('p');
      if (validFileType(file)) {
        const image = profile.querySelector('img');
        image.classList.add('js-image-size');
        image.src = URL.createObjectURL(file);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        preview.appendChild(para);
      }
    }
  }
}
function init() {
  image_file.addEventListener('change', updateImageDisplay);
}

init();
