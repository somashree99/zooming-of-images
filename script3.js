images=["./images/car1.jpg","./images/car2.jpg","./images/car3.jpg","./images/car4.jpg"];

const lens = document.querySelector('.magnifier-lens');
const product_img = document.querySelector('.product-img img');
const magnified_img = document.querySelector('.magnified-img');



function magnify(product_img, magnified_img){
    product_img.addEventListener('mousemove', moveLense)
    lens.addEventListener('mousemove', moveLense)
    //take mouse out of Image
    lens.addEventListener('mouseout', leaveLense)

}

function moveLense(e){
    
//    console.log("X : " + e.pageX + " Y : " + e.pageY);
    let x, y, cx, cy;
//    Get the position of the cursor
    const product_img_rect = product_img.getBoundingClientRect();
    x = e.pageX - product_img_rect.left - lens.offsetWidth/2;
    y = e.pageY - product_img_rect.top - lens.offsetHeight/2;
    
    let max_xpos = product_img_rect.width - lens.offsetWidth;
    let max_ypos = product_img_rect.height - lens.offsetHeight;
    
    if(x > max_xpos) x = max_xpos;
    if(x < 0) x = 0;
    
    if(y > max_ypos) y = max_ypos;
    if(y < 0) y = 0;
    
    lens.style.cssText = `top: ${y}px; left: ${x}px`;
    
    // calculate the Magnified_Img & Len's Aspect Ratio
    cx = magnified_img.offsetWidth / lens.offsetWidth;
    cy = magnified_img.offsetHeight / lens.offsetHeight;
    
    magnified_img.style.backgroundImage = `url('${product_img.src}')`;
    magnified_img.style.backgroundPosition = `-${x*cx}px -${y*cy}px`;
    magnified_img.style.backgroundSize = `${product_img_rect.width*cx}px ${product_img_rect.height*cy}px`;
    magnified_img.style.backgroundRepeat = `no-repeat`;
    
    lens.classList.add('active');
    magnified_img.classList.add('active');
}

function leaveLense(){
    lens.classList.remove('active');
    magnified_img.classList.remove('active');
}

function showImg(imgs) {
  let expandImg = document.getElementById("mainImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

magnify(product_img, magnified_img);
