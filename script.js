const menuItems = [
    {
      name: "Nasi Goreng Spesial",
      description: "Nasi goreng dengan telur, ayam suwir, sosis, dan sayuran.",
      category: "makanan",
      price: "Rp20.000",
      image: "assets/nasi g.avif"
    },
    {
      name: "Indomie Goreng Telur",
      description: "Indomie goreng dengan tambahan telur mata sapi dan kerupuk.",
      category: "makanan",
      price: "Rp12.000",
      image: "assets/indom.jpeg"
    },
    {
      name: "Burger Ayam Crispy",
      description: "Burger dengan ayam crispy, selada, tomat, dan saus spesial.",
      category: "makanan",
      price: "Rp22.000",
      image: "assets/burger.jpeg"
    },
    {
      name: "Pizza Mini Margherita",
      description: "Pizza mini dengan saus tomat, keju mozzarella, dan daun basil.",
      category: "makanan",
      price: "Rp30.000",
      image: "assets/fidza.jpeg"
    },
    {
      name: "Sate Ayam",
      description: "Sate ayam dengan bumbu kacang, disajikan dengan lontong.",
      category: "makanan",
      price: "Rp18.000",
      image: "assets/sate.jpeg"
    },
    {
        name: "Roti Bakar Coklat Keju",
        description: "Roti panggang dengan isian coklat leleh dan parutan keju.",
        category: "cemilan",
        price: "Rp15.000",
        image: "assets/rotkar.jpg"
      },
      {
        name: "Sosis Bakar BBQ",
        description: "Sosis jumbo yang dipanggang dan dilapisi saus BBQ.",
        category: "cemilan",
        price: "Rp10.000",
        image: "assets/sosis.jpeg"
      },
      {
        name: "Pisang Goreng Coklat Keju",
        description: "Pisang goreng yang disajikan dengan coklat leleh dan parutan keju.",
        category: "cemilan",
        price: "Rp13.000",
        image: "assets/piskej.jpg"
      },
      {
        name: "Kentang Goreng",
        description: "Kentang goreng renyah, cocok untuk camilan sambil ngopi.",
        category: "cemilan",
        price: "Rp8.000",
        image: "assets/kentang.webp"
      },
      {
        name: "Salad Buah Segar",
        description: "Potongan buah segar dengan dressing yogurt.",
        category: "cemilan",
        price: "Rp14.000",
        image: "assets/salad.jpeg"
      },
      {
        name: "Kopi Hitam Tubruk",
        description: "Kopi hitam khas warkop, diseduh langsung tanpa filter.",
        category: "minuman",
        price: "Rp7.000",
        image: "assets/kopi.jpg"
      },
      {
        name: "Teh Manis Panas",
        description: "Teh melati yang diseduh dengan gula pasir.",
        category: "minuman",
        price: "Rp5.000",
        image: "assets/teh.jpeg"
      },
      {
        name: "Es Teh Manis",
        description: "Teh melati dingin dengan tambahan es batu.",
        category: "minuman",
        price: "Rp6.000",
        image: "assets/teh.jpeg"
      },
      {
        name: "Kopi Susu Gula Aren",
        description: "Kopi susu dengan campuran gula aren cair.",
        category: "minuman",
        price: "Rp10.000",
        image: "assets/kopsu.jpeg"
      },
      {
        name: "Jus Alpukat",
        description: "Jus alpukat segar dengan susu kental manis.",
        category: "minuman",
        price: "Rp15.000",
        image: "assets/jus"
      }
      
    // Add more items as needed...
  ];
  
  const menuContainer = document.getElementById("menuContainer");
  
  // Function to render menu items based on category
  function renderMenu(category) {
    menuContainer.innerHTML = ''; // Clear existing menu items
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
  
    filteredItems.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="details">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">${item.price}</p>
        </div>
      `;
      menuContainer.appendChild(menuItem);
    });
  }
  
  // Handle category button clicks
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      renderMenu(category);
    });
  });
  
  // Initial render
  renderMenu('all');
  