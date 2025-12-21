// Tabs

const tabs = document.querySelectorAll('#tabs .tab');
const tabContents = document.querySelectorAll('.tab-content');
const activeClass = ['underline', 'decoration-[13%]', 'underline-offset-[30%]'];
tabs[0].classList.add(...activeClass);

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');
    
    // Remove active classes from all tabs
    tabs.forEach((t) => {
      t.classList.remove(...activeClass);
      t.classList.add('opacity-50');
    });

    // Hide all tab contents
    tabContents.forEach((c) => {
      c.classList.add('hidden');
    });

    // Activate clicked tab
    tab.classList.add(...activeClass);
    tab.classList.remove('opacity-50');

    // Show corresponding tab content
    document.getElementById('tab-' + target).classList.remove('hidden');
  });
});

// Slider

function showImg(n){
    let i;
    let img = document.querySelectorAll('.slider1 img');
    if (!document.getElementById('tab-2').classList.contains('hidden')){
      img = document.querySelectorAll('.slider2 img');
    }
    if (n > img.length){indexValue = 1};
    if (n < 1){indexValue = img.length};
    for (i=0;i<img.length;i++){
        img[i].style.display = 'none';
    }
    img[indexValue-1].style.display = 'block';
    console.log(indexValue);
}
function slide(n){showImg(indexValue += n)};

let indexValue = 1;
showImg(indexValue);

// Theme switch

function toggleDarkmode(){
    const logo = document.querySelector('.logo');

    document.documentElement.classList.toggle('dark');

    logo.src = html.classList.contains('dark') ? './img/rgpulogo.svg' : './img/rgpulogo-light.svg';
};

//Modal

var modal = document.getElementById("myModal");

var imgs = document.querySelectorAll('.tab-content div img');
var modalImg = document.getElementById("img01");
imgs.forEach((img) => {
    img.addEventListener('click', () => {
    modal.style.display = "block";
    document.documentElement.classList.add('overflow-hidden');
    modalImg.src = img.src;
});
})

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
  document.documentElement.classList.remove('overflow-hidden');
}