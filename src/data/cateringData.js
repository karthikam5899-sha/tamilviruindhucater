export const services = [
  { title: "Wedding Catering", description: "Traditional Tamil wedding menus prepared and served with elegance.", icon: "💍" },
  { title: "Corporate Catering", description: "Professional breakfast, lunch and dinner solutions for corporate events.", icon: "🏢" },
  { title: "Birthday Parties", description: "Delicious menus and customized food packages for birthday celebrations.", icon: "🎂" },
  { title: "Engagement Events", description: "Beautiful catering arrangements for engagement and family functions.", icon: "💐" },
  { title: "House Functions", description: "Homely traditional food for pooja, seemantham and family gatherings.", icon: "🏠" },
  { title: "Temple Events", description: "Traditional prasadam and vegetarian catering for temple occasions.", icon: "🛕" }
];

export const foodCategories = [
  {
    name: "Traditional Meals", slug: "traditional-meals", menuTitle: "Traditional Tamil Nadu Meals (Virundhu)",
    description: "A generous banana-leaf feast of beloved Tamil Nadu classics.", image: "/images/Traditional-Meals.jpg",
    menuItems: ["Steamed Rice", "Sambar", "Rasam (Pepper / Tomato)", "More Kuzhambu", "Vatha Kuzhambu", "Kootu (Chow Chow / Snake Gourd)", "Poriyal (Beans, Cabbage, Carrot)", "Avial", "Potato Roast", "Appalam", "Pickle (Mango / Lemon)", "Curd / Buttermilk", "Payasam (Semiya / Paruppu)", "Banana"]
  },
  {
    name: "South Indian Breakfast", slug: "south-indian-breakfast", menuTitle: "South Indian Breakfast",
    description: "A comforting spread of crisp, soft, savory South Indian favorites.", image: "/images/South-Indian-Breakefast.jpg",
    menuItems: ["Idli", "Dosa (Plain / Masala / Ghee)", "Pongal (Ven Pongal)", "Poori & Potato Masala", "Upma / Rava Upma", "Rava Dosa", "Adai & Avial", "Paniyaram (Kuzhi Paniyaram)", "Idiyappam & Coconut Milk", "Appam & Vegetable Stew"]
  },
  {
    name: "Chettinad Special", slug: "chettinad-special", menuTitle: "Chettinad Special (Spicy & Rich Cuisine)",
    description: "Robust spices and deep, aromatic flavors from Chettinad cuisine.", image: "/images/Chettinadu-Special.jpg",
    menuItems: ["Chettinad Vegetable Curry", "Chettinad Paneer Masala", "Mushroom Chettinad", "Pepper Chicken (if non-veg added)", "Chettinad Chicken Curry", "Mutton Chukka", "Kara Kuzhambu (Chettinad Style)", "Pepper Rasam", "Seeraga Samba Biryani", "Kola Urundai"]
  },
  {
    name: "Sweets & Desserts", slug: "sweets-desserts", menuTitle: "Sweets & Desserts",
    description: "Traditional celebratory sweets and much-loved dessert favorites.", image: "/images/Sweets-Desserts.jpg",
    menuItems: ["Sakkarai Pongal", "Kesari", "Payasam (Semiya / Rice / Moong Dal)", "Mysore Pak", "Laddu", "Gulab Jamun", "Jangiri", "Badam Halwa", "Carrot Halwa", "Rasgulla", "Ice Cream (Vanilla / Butterscotch)"]
  }
];

export const packages = [
  {
    name: "Tamil Traditional", price: "₹499", unit: "per plate",
    description: "Perfect for traditional family functions.",
    items: ["Rice & Sambar","Rasam","Poriyal","Kootu","Curd","Sweet","Appalam"]
  },
  {
    name: "Wedding Grand", price: "₹799", unit: "per plate", popular: true,
    description: "Complete premium Tamil wedding menu.",
    items: ["Welcome Drink","2 Sweets","2 Poriyal","Kootu","Avial","Sambar","Rasam","Curd","Ice Cream","Banana"]
  },
  {
    name: "Royal Celebration", price: "₹1,199", unit: "per plate",
    description: "Luxury menu for grand celebrations.",
    items: ["Welcome Drinks","3 Starters","3 Sweets","3 Poriyal","Paneer Special","Special Rice","Biryani","Ice Cream","Fruit Salad","Pan"]
  }
];

export const gallery = [
  { title: "Wedding Feast", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80" },
  { title: "Traditional Meal", image: "/images/Traditional-Meals.jpg" },
  { title: "South Indian Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80" },
  { title: "Grand Celebration", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80" },
  { title: "Traditional Sweets", image: "/images/Traditional-Sweets.jpg" },
  { title: "Event Setup", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80" }
];

export const testimonials = [
  { name: "Priya & Arun", location: "Coimbatore", text: "The wedding food was absolutely wonderful. Every dish tasted authentic and fresh. Our guests loved the traditional banana-leaf service.", rating: 5 },
  { name: "Suresh Kumar", location: "Madurai", text: "We booked their corporate lunch package. The food quality, punctual delivery and presentation were excellent.", rating: 5 },
  { name: "Meena Family", location: "Chennai", text: "From the first discussion to the event day, everything was handled professionally. The sweets and meals were fantastic.", rating: 5 }
];