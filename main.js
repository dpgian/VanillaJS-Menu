const menu = [
    {
      id: 1,
      title: "Charcoal burger",
      category: "burger",
      price: 8.99,
      img: "./images/burger01.jpg",
      desc: `The buns and the cheese of the hamburger are colored black with bamboo charcoal. The ketchup and the onions on the hamburger are colored black with squid ink.`,
    },
    {
      id: 2,
      title: "Steak of the day",
      category: "steak",
      price: 13.99,
      img: "./images/steak01.jpg",
      desc: `Nothing is as tempting as a beautiful slab of meat that you can only see through a photo.`,
    },
    {
      id: 3,
      title: "Classic Burger",
      category: "burger",
      price: 6.99,
      img: "./images/burger03.jpg",
      desc: `Tasty, delicious, and has me craving more on the first bite.” to “Juicy, mouthwatering, tasty, and everything you’d ever want to savor.`,
    },
    {
      id: 4,
      title: "Pale Ale",
      category: "beer",
      price: 3.99,
      img: "./images/beer02.jpg",
      desc: `It's a pleasant and understated beer with a malty profile, just enough woody or lightly floral hops for balance, and some fruity notes in the full body. The bitterness ranges from 20 to 40 IBUs; the color is typically golden to copper; and the clarity is clear to brilliant.`,
    },
    {
      id: 5,
      title: "Messy life burger",
      category: "burger",
      price: 10.99,
      img: "./images/burger02.jpg",
      desc: `the best burgers are like life — messy and topped with bacon.`,
    },
    {
      id: 6,
      title: "Pan steak",
      category: "steak",
      price: 14.99,
      img: "./images/steak03.jpg",
      desc: `The only time to eat diet food is while you're waiting for the steak to cook.`,
    },
    {
      id: 7,
      title: "Lager",
      category: "beer",
      price: 3.49,
      img: "./images/beer01.jpg",
      desc: `Dry, lean, clean-tasting and crisp. Flavors may be subtle, with no traditional beer ingredient dominating the others. `,
    },
    {
      id: 8,
      title: "American classic",
      category: "steak",
      price: 14.99,
      img: "./images/steak02.jpg",
      desc: `I never arrive unannounced without something big and juicy in hand.`,
    }
  ];

const sectionCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu)
    
    displayFilterButtons()
})

const displayMenuItems = menuItems => {
    let displayMenu = menuItems.map(item => {
        return `
            <article class="menu-item">
                <img src="${item.img}" class='photo' alt=${item.title} />
                    <div class="item-title">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class='price'>${item.price}</h4>
                        </header>
                        <p class='item-description'>
                            ${item.desc}
                        </p>
                    </div>
            </article>
        `
    })
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu
}

const displayFilterButtons = () => {
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    },['all'])
    
    const displayCategoryButtons = categories.map(function(category){
        return `<button class="filter-btn" type='button' data-id=${category}>${category}</button>`
    }).join('')
    
    container.innerHTML = displayCategoryButtons
    const filterBtns = container.querySelectorAll('.filter-btn')

    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter(function(menuItem){
                if (menuItem.category === category) { 
                    return menuItem
                }
            })
            if (category === 'all') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
}