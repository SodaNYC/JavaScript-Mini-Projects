const IMAGES = document.querySelectorAll("img");
const SIZES ={
  showcase: "100vw", //showcase pics are the the full width
  reason: "(max-width: 799px) 100vw,372px", 
  
  /*	vw: Relative to 1% of the width of the viewport(the browser window size. If the viewport is 50cm wide, 1vw = 0.5)
  
  reason pics are 372px each pic
  
  That means as long as the width of the viewport is narrower than 800 pixels then the width of the image will be 100 vw, full width, otherwise it'll be 372 pixels.
  */
  feature: "(max-width: 799px) 100vw,558px",
  story:"(max-width: 799px) 100vw,670px",
  
}
function makeSrcset(imgSrc){
    let markup = [];
    let width = 400; //smallest size in the image

    for(let i = 0; i < 5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w"; 
        width+=400;
    }

    return markup.join();
}
for(let i = 0; i<IMAGES.length;i++){
  let imgSrc = IMAGES[i].getAttribute("src");
  imgSrc = imgSrc.slice(0,-8); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  // console.log(imgSrc);
  let srcset = makeSrcset(imgSrc);
  console.log(srcset);
  IMAGES[i].setAttribute("srcset",srcset);

  let type = IMAGES[i].getAttribute("data-type");
  // console.log(type);
  let sizes = SIZES[type]; //not SIZES.type
  IMAGES[i].setAttribute("sizes",sizes);
  console.log(sizes);
}