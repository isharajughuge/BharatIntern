var draggableItems = document.querySelectorAll('.draggable');
var contentArea = document.getElementById('contentArea');
var addTextButton = document.getElementById('addTextButton');
var textInput = document.getElementById('textInput');

function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.type);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  var dataType = event.dataTransfer.getData('text/plain');
  
  if (dataType === 'text') {
    handleAddText();
  } else if (dataType === 'image') {
    handleAddImage();
  } else if (dataType === 'video') {
    handleAddVideo();
  }
}

function handleAddText() {
  var textContent = textInput.value;
  if (textContent) {
    var textElement = document.createElement('p');
    textElement.textContent = textContent;
    contentArea.appendChild(textElement);
    textInput.value = '';
  }
}

function handleAddImage() {
  var imageSrc = prompt('Enter the image URL:');
  if (imageSrc) {
    var imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    contentArea.appendChild(imageElement);
  }
}

function handleAddVideo() {
  var videoSrc = prompt('Enter the video URL:');
  if (videoSrc) {
    var videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.controls = true;
    contentArea.appendChild(videoElement);
  }
}

draggableItems.forEach(function(item) {
  item.addEventListener('dragstart', handleDragStart);
});

contentArea.addEventListener('dragover', handleDragOver);
contentArea.addEventListener('drop', handleDrop);

addTextButton.addEventListener('click', handleAddText);

function resizeImage(imageElement) {
    var contentWidth = contentArea.clientWidth;
    var contentHeight = contentArea.clientHeight;
  
    var imageWidth = imageElement.naturalWidth;
    var imageHeight = imageElement.naturalHeight;
  
    var widthRatio = contentWidth / imageWidth;
    var heightRatio = contentHeight / imageHeight;
  
    var scaleFactor = Math.min(widthRatio, heightRatio);
  
    var newWidth = Math.floor(imageWidth * scaleFactor);
    var newHeight = Math.floor(imageHeight * scaleFactor);
  
    imageElement.style.width = newWidth + 'px';
    imageElement.style.height = newHeight + 'px';
  }
  
  function handleAddImage() {
    var imageSrc = prompt('Enter the image URL:');
    if (imageSrc) {
      var imageElement = document.createElement('img');
      imageElement.src = imageSrc;
      imageElement.onload = function() {
        resizeImage(imageElement);
      };
      contentArea.appendChild(imageElement);
    }
  }
 
  // Save button element
var saveButton = document.getElementById('saveButton');

// Save content function
function saveContent() {
  var savedContent = contentArea.innerHTML;
  // Save the content to the database or local storage
  // You can use the localStorage API as an example:
  localStorage.setItem('savedContent', savedContent);
  alert('Content saved successfully!');
}

// Attach click event listener to the save button
saveButton.addEventListener('click', saveContent);

// Preview button element
var previewButton = document.getElementById('previewButton');

// Preview content function
function previewContent() {
  var previewWindow = window.open('', '_blank');
  var previewHTML = '<html><head><title>Preview</title></head><body>' + contentArea.innerHTML + '</body></html>';
  previewWindow.document.write(previewHTML);
  previewWindow.document.close();
}

// Attach click event listener to the preview button
previewButton.addEventListener('click', previewContent);


// Remove content function
function removeContent(element) {
    element.parentNode.removeChild(element);
  }
  
  // Attach event listener to the content area for click events on delete buttons or icons
  contentArea.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('deleteButton')) {
      removeContent(target.parentNode);
    }
  });

  
  // Enable text content editing
function enableTextEditing(element) {
    element.contentEditable = true;
    element.focus();
  }
  
  // Disable text content editing
  function disableTextEditing(element) {
    element.contentEditable = false;
  }
  
  // Attach event listener to the content area for double-click events on text elements
  contentArea.addEventListener('dblclick', function(event) {
    var target = event.target;
    if (target.tagName === 'P') {
      enableTextEditing(target);
    }
  });
  
  // Attach event listener to the content area for blur events on text elements
  contentArea.addEventListener('blur', function(event) {
    var target = event.target;
    if (target.tagName === 'P') {
      disableTextEditing(target);
    }
  });
  
  

  