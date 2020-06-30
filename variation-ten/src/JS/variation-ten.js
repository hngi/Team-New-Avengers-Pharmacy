const headerInfo = [
    {
        id: 1,
        infoHead: "Search Lab N95 Face mask",
        infoDetails: "The mask provide comfortable, reliable worker respiratory protection against certain non oil based particles.",
        img: "/variation-ten/src/IMAGES/productmask.png"
    },
    {
        id: 2,
        infoHead: "Different Types of Face Mask",
        infoDetails: "Face masks are one tool utilized for preventing the spread of disease. They may also be called dental, isolation, laser, medical, procedure, or surgical masks.",
        img: "https://res.cloudinary.com/djv73x6my/image/upload/v1593302998/423-4233626_black-medical-mask_dtuyp1.png"
    },
    {
        id: 3,
        infoHead: "CoronaVirus In the Air",
        infoDetails: "WHO recommendations for the rational use of personal protective equipment (PPE), in health care and community settings, including the handling of cargo.",
        img:
        "https://res.cloudinary.com/djv73x6my/image/upload/v1593303006/unnamed_kypo3k.png"  
    }
]

const  getImage = document.querySelector('#headerSection img');
const getInfoHead = document.querySelector('.headerSectDes h1');
const getInfoDetails = document.querySelector('.headerSectDes p');

// Buttons
const prevBtn = document.querySelector('#headerSection .btn-left');
const nextBtn = document.querySelector('#headerSection .btn-right');
// Count
let countItem = 0;

// Add a function to add reviews array
window.addEventListener('DOMContentLoaded',()=>{
    showHeaderCarousel(countItem);
    
    // Call the Menu function
    getDataFromObject(menu);
    getDataFromFilterBtnCont(menu)
  })
 
const showHeaderCarousel = (headerItem)=>{
    const item = headerInfo[headerItem];
    getImage.src = item.img;
    getInfoHead.textContent = item.infoHead;
    getInfoDetails.textContent = item.infoDetails;
     
}
// Btn Next and Previous
prevBtn.addEventListener('click',()=>{
    countItem--;
    if(countItem < 0){
        countItem = headerInfo.length - 1;
    }
    showHeaderCarousel(countItem);
})

nextBtn.addEventListener('click',()=>{
    countItem++;
    if(countItem > headerInfo.length - 1){
        countItem = 0;
    }
    showHeaderCarousel(countItem);
})

// ResizeContainer
const resizeContainer = document.querySelector('nav');

const changeToContainerFluid = ()=>{
  
    if(window.innerWidth < 1025){
        resizeContainer.classList.add('container-fluid');
        resizeContainer.classList.remove('container');
    }else{
        resizeContainer.classList.add('container');
        resizeContainer.classList.remove('container-fluid');
    }
}
changeToContainerFluid();


// To imagefluid 
const imgFluid = document.querySelectorAll('#product  .menu img');

const changeImgFluid = ()=>{
  imgFluid.forEach((item)=>{
    if(window.innerWidth < 1025){
        item.classList.add('img-fluid');
    }else{
        item.classList.remove('img-fluid');
    }
  })
    
}
changeImgFluid();

// Product Section
const menu = [
    {
      id: 1,
      title: "Diet Tea",
      category: "tablets",
      price: 10,
      img: "/variation-ten/src/IMAGES/dietTea.png",},
    {
      id: 2,
      title: "BP Reader",
      category: "gadgets",
      price: 120,
      img: "/variation-ten/src/IMAGES/BPreader.png",},
    {
      id: 3,
      title: "Sex Booster",
      category: "tablets",
      price: 10,
      img: "/variation-ten/src/IMAGES/SexBooster.png",
    },
    {
      id: 4,
      title: "Pan Set",
      category: "gadgets",
      price: 10,
      img: "/variation-ten/src/IMAGES/panset.png",
     },
    {
      id: 5,
      title: "Sinus",
      category: "tablets",
      price: 22,
      img: "/variation-ten/src/IMAGES/sinussmall.png",
      },
    {
      id: 6,
      title: "Soab",
      category: "tablet",
      price: 80,
      img: "/variation-ten/src/IMAGES/soab.png",
     },
    {
      id: 7,
      title: "Body Builder",
      category: "mask",
      price: 10,
      img: "/variation-ten/src/IMAGES/bodybuilder.png",
    },
    {
      id: 8,
      title: "Goss",
      category: "mask",
      price: 5,
      img: "/variation-ten/src/IMAGES/goss.png",
     }
  ];


const rowContent = document.querySelector('#product .row');
// FilterBtn
const filterBtnCont = document.querySelector('.btn-container');
const filterBtn = document.querySelectorAll('.filter-btn');

// Load data/items from object and styling
window.addEventListener('DOMContentLoaded',()=>{
    
    
  })

 // Get data from Object
  const getDataFromObject = (menuItems)=>{
    let displayMenu = menuItems.map((item)=>{
        
      return `
      <div class="col-lg-3 col-md-6 col-sm-12 menu">
        <img src="${item.img}" alt="${item.title}">
        <div class="content mt-3 ml-3">
          <p>${item.title}</p>
          <span>₦${item.price},000</span>
        </div>
        
        <a href="#" class="addCart"><i class="fas fa-cart-plus"></i></a>
      </div>
      `
    }).join("");
    console.log(displayMenu);
    rowContent.innerHTML = displayMenu;
  }  

// Get data from FilteredBtn Using reduce and mapping it out 
const getDataFromFilterBtnCont = (menuItems)=>{
    // Reduce to get unique items
    const categories = menuItems.reduce((values, items)=>{ //Values(total) referencing the array  and items(each items) reference each of the item
      if(!values.includes(items.category)){//if items does not include (all)
        values.push(items.category)
      }
      return values;
    }, ['all']);// others breakfast etc
  
    // Map out info from selected items from the reduce functions and display on screen
    const categoryBtn = categories.map((category)=>{
      return `<button type="button" class="btn filter-btn mr-3" data-id="${category}">${category}</button>`;
      }).join('');
      
      filterBtnCont.innerHTML = categoryBtn;
      // Select Btn to the dom in order to be clicked
      const filterBtn = filterBtnCont.querySelectorAll('.filter-btn'); 
      filterBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
          const category = e.currentTarget.dataset.id;
          // To filter it out
          const menuCategory = menu.filter((menuItems)=>{
            if(menuItems.category === category){ //gets the category from the menu object and matches with the dataset id   
              return menuItems; //returns all matched object
            }
          })
      
          // Check and add filtered content to screen
          if(category === 'all'){ //Add info when all button is clicked 
            getDataFromObject(menu);
          }else{//Add filtered info when all button is clicked 
            getDataFromObject(menuCategory)
          }
          // console.log(menuCategory);
          
        })
      })
  } 