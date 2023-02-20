const data = [
  {
    image_url: "https://picsum.photos/450/300?n=1",
    caption: "Photo 1",
  },
  {
    image_url: "https://picsum.photos/450/300?n=2",
    caption: "Photo 2",
  },
  {
    image_url: "https://picsum.photos/450/300?n=3",
    caption: "Photo 3",
  },
  {
    image_url: "https://picsum.photos/450/300?n=4",
    caption: "Photo 4",
  },
  {
    image_url: "https://picsum.photos/450/300?n=5",
    caption: "Photo 5",
  },
  {
    image_url: "https://picsum.photos/450/300?n=6",
    caption: "Photo 6",
  },
  {
    image_url: "https://picsum.photos/450/300?n=7",
    caption: "Photo 7",
  },
  {
    image_url: "https://picsum.photos/450/300?n=8",
    caption: "Photo 8",
  },
  {
    image_url: "https://picsum.photos/450/300?n=9",
    caption: "Photo 9",
  },
  {
    image_url: "https://picsum.photos/450/300?n=10",
    caption: "Photo 10",
  }
];
function loadSlides(photoList) {
  var carouselInner = document.querySelector('.carousel-inner');
  for (var i = 0; i < photoList.length; i++) {
    let photo = photoList[i];
    let slide = document.createElement('div');
    if (i === 0) {
      slide.classList.add('carousel-item');
    } else {
      slide.classList.add('carousel-item');
    }
    let img = document.createElement('img');
    img.src = photo.image_url;
    img.alt = photo.caption;
    let p = document.createElement('p');
    p.innerText = photo.caption;
    slide.appendChild(img);
    slide.appendChild(p);
    carouselInner.appendChild(slide);
  }
}

loadSlides(data);


function next(){

}

function previous(){
  
}