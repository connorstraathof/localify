// const apiEndpoint = 'https://localify.cdn.prismic.io/api/v2'

// state = {
//     cafes: []
//   }

// getCafes = () => {
//     Prismic.api(apiEndpoint).then(api => {
//         api.query(Prismic.Predicates.at('document.type', 'vendors')).then(response => {
//           if (response) {
//             this.setState({ cafes: response.results[0].data })
//             console.log(response.results[0].data)
//           }
//         })
//       })
//   }
//   componentDidMount() {
//     this.getCafes()
//   }
//
//
//
// to engage comments = php -S localhost:7777


// unnecessary json
// [
//     {
//       "id": "XJKOjxEAAM4xkD-B",
//       "title": "justpotters",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Bowl",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: By Order",
//           "in_stock": false
//         },
//         {
//           "id": 48586,
//           "name": "Plate",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: By Order",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Vase",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: By Order",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Cup",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: By Order",
//           "in_stock": false
//         }
//       ]
//     },
//     {
//       "id": "XJF98BEAAGTQi4LW",
//       "title": "echoo",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Japanese Denim",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: Limited",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Veja (assorted styles)",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: Limited",
//           "in_stock": false
//         },
//         {
//           "id": 99119,
//           "name": "Acne T-Shirts (assorted colours)",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: Limited",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Aesop Perfum (assorted scents)",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: Limited",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XJKPRREAAOwxkEKp",
//       "title": "bird",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Silver Necklace",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: Dependant on resources available",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Gold Ring",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: Dependant on resources available",
//           "in_stock": false
//         },
//         {
//           "id": 99119,
//           "name": "Emossed Bracelets",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: Dependant on resources available",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Earings",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: Dependant on resources available",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XIqLYhEAAGKebNZM",
//       "title": "donalds",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Local Organic Chicken Breast",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Yves Vegetarian Options",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Local Vegtables (tomatoes, cucumbers, brocoli, etc)",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Uprising Bread (sourdough, rye, multi-grain)",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XJKO0REAAG8qkECr",
//       "title": "reform",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Coffee Table",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: By Order",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Dining room table",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: By Order",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Small pieces by request",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: By Order",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Boxes by request",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//           "quantity": "Quantity: By Order",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XJKOQBEAAG8qkD4k",
//       "title": "acorn",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Appetizers",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Ever-Evolving Assortment Of The Freshest Ingredients Available. Kale Salad, Tempeh, Smoked Paprika Croutons, Crispy Capers, Kootenay Nostrala Cheese, Black Olives, Caesar Dressing, Kelp Salt. Roasted King Oyster Mushrooms, Confit Leeks, Smoked Onion Kelp Sauce.",
//           "quantity": "Quantity: Daily amount",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Mains",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "The Acorn Late Winter Harvest - Seasonal Vegetables, Herbs & Goodies From Local Farms. Beer Battered Halloumi, Zucchini + Potato Pancake, Smashed Peas, Mint Yogurt, Acorn Garden Lemon Balm. Slow Roasted Rosemary Cabbage, Butter Whipped Pemberton Potato, Charred Cabbage Red Wine Jus, Cabbage Crisps.",
//           "quantity": "Quantity: Daily amount",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Desserts",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Klippers Organics Gala Apple Butter Cream Cannoli, Salted Apple Crisp, Chocolate Sauce, Shaved Zimt Chocolate. Biscoff Cookie Tuile, Fraser Valley Hazelnut Pastry Cream, Lapsang Tea Lemon Curd, Abbotsford Kiwi, Toasted Hazelnuts, Hazelnut Butter. Dark Chocolate Almond Fudge Brownie, Salted Walnut Caramel, Sea Buckthorn Berries, Browned Butter Juniper Shortbread Cookie Crumb.",
//           "quantity": "Quantity: Daily amount",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XJF8khEAAI7Qi3zS",
//       "title": "roundel",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Free Range Eggs Benny",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Smoked Wild Sockeye Salmon 13.95. Avocado, Tomato & Cream Cheese 12.95. Classic Ham 12.95. Bacon 12.95. Mushrooms & Brie 12.95. Beans, Avocado, Pico De Gallo & Feta 12.95. Pulled Pork 12.95.",
//           "quantity": "Quantity: Daily amount",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Sandwiches & Wraps",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Smoked Wild Salmon & Avocado Wrap 13.95. Free Run Chicken Breast Wrap 12.95. Corned Beef & Provolone Sandwich 11.95. Free Run Chicken Breast Club Sandwich 12.95. BLT Or Avocado LT Sandwich 10.5. Grilled Cheese Sandwich 9.95.",
//           "quantity": "Daily amount",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Burgers",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Blue Goose 70 Mile House Organic Beef Burger 12.95. Sesame Organic Tofu Burger 12.95. Free Run Chicken Breast Burger 12.95. Pulled Pork Burger 13.95. Free Run Chicken Breast Cobb Burger 14.95.",
//           "quantity": "Quantity: Daily amount",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Salads",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Warm Roasted Pickled Beet Salad 10.5. Date & Feta 10.5. Pear & Blue Cheese 10.5. Green Salad 8.5. Add Chicken Breast Or Smoked Salmon 4.5.",
//           "quantity": "Quantity: Daily amount",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XIqKrBEAAMCjbNMt",
//       "title": "community",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Carhart",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Over-sized t-shirt / burgundy.",
//           "in_stock": false
//         },
//         {
//           "id": 48586,
//           "name": "Polo Ralph Lauren",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Classic button up / yellow.",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Patagonia",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Fleece / Black.",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Levis",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Orange label light denim.",
//           "in_stock": false
//         }
//       ]
//     },
//     {
//       "id": "XJKNQxEAAM8xkDm0",
//       "title": "faulkner",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Comme des Garcons",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Black button up.",
//           "quantity": "Quantity: Limited",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Carhart",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Navy Blue oversized hoodie.",
//           "quantity": "Quantity: Limited",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Common Project",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Standard lace up in off white.",
//           "quantity": "Quantity: Limited",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Burberry",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Classic trench coat in beige.",
//           "quantity": "Quantity: Limited",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XJKOAREAAG8qkD0H",
//       "title": "marche",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Croissant au Beurre",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Pain au Chocolat",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Butter Tart",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Ham & Cheddar Quiche",
//           "in_stock": true
//         },
//         {
//           "id": 49625,
//           "name": "Smoked Salmon & Dill Quiche",
//           "in_stock": true
//         },
//         {
//           "id": 21210,
//           "name": "Alsatian Bacon & Fromage Frais with Onion Flatbread",
//           "in_stock": true
//         },
//         {
//           "id": 94384,
//           "name": "Caramelized Onion & Black Olives with Gruyère Flatbread",
//           "in_stock": true
//         },
//         {
//           "id": 63788,
//           "name": "Cinnamon Sugar & Butter Crepe",
//           "in_stock": true
//         },
//         {
//           "id": 93580,
//           "name": "Gruyère Crepe",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XJKNzREAAG8qkDwj",
//       "title": "soap-dispensary",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "Natural Cleaning Ingredients",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "20% Vinegar, Baking Soda, Borax, Citric Acid, Diatomaceous Earth, Hydrogen Peroxide, Isopropyl Alcohol, Oxygen Bleach, Soap Flakes, Soap Nuts & Powder, Washing Soda.",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Laundry",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Fabric Softener, Laundry Detergent, Stain Remover.",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "Hair Products",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Conditioner, Dry Shampoo, Hair Gel, Hairspray, Leave-In Conditioner, Shampoo.",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "Body Care Products",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Body Wash, Bubble Bath, Bug Repellent, Castile Soap, Hand Soap, Exfoliating Scrubs, Face Cream, Facial Cleanser, Facial Exfoliant, Moisturizer, Sunscreen, Toner.",
//           "in_stock": true
//         }
//       ]
//     },
//     {
//       "id": "XJGCWxEAAGTQi5ZM",
//       "title": "Harvest",
//       "inventory": [
//         {
//           "id": 61132,
//           "name": "SUGO SAUCE",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Sugo Sauce is a sauce with an authentic tomato based ‘sugo’ (Italian for sauce) inspired by family recipes and handmade with love.",
//           "in_stock": true
//         },
//         {
//           "id": 48586,
//           "name": "Grain Kabuli Chickpeas",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Grain is a Vancouver based purveyor of 100% Canadian grains, beans, and pulses.",
//           "in_stock": true
//         },
//         {
//           "id": 99119,
//           "name": "VANCOUVER ISLAND SALT",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Vancouver Island Salt makes all natural and unrefined salt, hand harvested from the cold Pacific waters of Vancouver Island BC.",
//           "in_stock": true
//         },
//         {
//           "id": 59209,
//           "name": "POK POK DRINKING VINEGAR",
//           "short_description": "Here is a very brief description of the product",
//           "long_description": "Pok Pok Som is a drinking vinegar handcrafted in Portland using natural flavoring, organic cane sugar and quality natural vinegars.",
//           "in_stock": true
//         }
//       ]
//     }
//   ]
// [
//     {
//       "id": "574783399259954",
//       "title": "cafes",
//       "inventory": [
//         {
//           "id": 6705654999,
//           "name": "Revolver",
//           "short_description": "Detail-oriented shop with ethical & fair-trade coffee brewed fresh-to-order, plus baked goods.",
//           "long_description": "Revolver is about two things: Coffee, and the experience that should go with it. Our coffee program is simple, but precise. All drinks are made fresh to order - after you order it, never before - from a rotating menu of our favourite coffees from world class roasters around North America and beyond. It's simple: We order what we like, and we don't order what we don't. We like being consistent, so we measure and weigh every variable there is, until there isn't. And we like details, of which coffee is but one of many in a finely tuned life. But it's such an important one, isn't it?",
//           "location": "lat: 49.283415, lng: -123.109452",
//           "address": "325 CAMBIE ST.",
//           "contact": "604-558-4444",
//           "website": "http://revolvercoffee.ca",
//               "image": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0NjkuOTE1cHgiIGhlaWdodD0iMzUxLjMzOXB4IiB2aWV3Qm94PSIwIDAgNDY5LjkxNSAzNTEuMzM5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NjkuOTE1IDM1MS4zMzkiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnPjxnPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xOTAuNTUyLDEyMC4zOTZjMCw0Ny4zOTQsNTYuNjU0LDg1Ljk0MywxMjYuMjcsODUuOTQzYzY5LjYzMywwLDEyNi4yODMtMzguNTQ5LDEyNi4yODMtODUuOTQzYzAtNDcuMzgyLTU2LjY1LTg1Ljk1My0xMjYuMjgzLTg1Ljk1M0MyNDcuMjA2LDM0LjQ0NCwxOTAuNTUyLDczLjAxNSwxOTAuNTUyLDEyMC4zOTZ6IE0xOTYuMTAxLDEyMC4zOTZjMC00NC4zNDIsNTQuMTUzLTgwLjQwOCwxMjAuNzIxLTgwLjQwOGM2Ni41NzcsMCwxMjAuNzQ1LDM2LjA2NiwxMjAuNzQ1LDgwLjQwOGMwLDQ0LjMzLTU0LjE2OCw4MC40MDEtMTIwLjc0NSw4MC40MDFDMjUwLjI1NCwyMDAuNzk4LDE5Ni4xMDEsMTY0LjcyNywxOTYuMTAxLDEyMC4zOTZ6Ii8+PC9nPjxnPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zMjcuODk5LDIuNDk0Yy0xNi4wNTgsMjMuMzgyLTI0LjEyMyw1MC4yMjItMzEuOTQxLDc2LjE2N2wtNi4yODYsMjAuMjY5bC00LjQ4LDEzLjAzYy0wLjIyMiwwLjYzOC0wLjQ0LDEuMjY4LTAuNjYzLDEuODg4Yy0xLjc2MS0xMC4zODctNC4yMjUtMjEuODUtNy40ODYtMzQuNDMzbC0wLjE0OC0wLjYwOGwtMi45MDIsMC4yNDljLTEuNDkxLDE3LjUzMy04LjkwOSwzMi4zODgtMTcuMjU4LDQ2LjQ0NmMtMi44ODIsMC4zOS01LjczMywwLjc4LTguNjE0LDEuMTRjLTYuMjc5LTIwLjYyMi0zMi43OTgtNjkuODA3LTYwLjMwOC04MC4wODFsLTEuMDM1LDIuNzc1YzI2LjQwNSw5Ljg1MSw1MS45ODIsNTcuMjQ1LDU4LjM1Nyw3Ny42NjdjLTIyLjk3LDIuODAyLTQ1Ljg3Myw0LjUwOS02Ni42MDksNC41MDFsLTAuMTMzLDIuOTM4YzIwLjk3OSwxLjk0MSw0My4yODEsNC40MDgsNjguMjU5LDcuNTU3Yy00Ljg1Niw3Ljk3My05LjU1OCwxNi4xNzgtMTIuOTkxLDI0Ljc0Yy0zLjYzOCw5LjA2MS01LjAzLDE3LjQ2NS01LjAzLDI0Ljk3OWMwLDEwLjc1LDIuODM4LDE5LjY5Myw1Ljk0NSwyNi4yOTdjNS4wOTgsMTAuODA4LDEyLjM1NSwxOC4wNzQsMTYuNjE3LDE5LjQxNmwwLjU5NywwLjE5M2wwLjU1OS0wLjMxNWM2LjE4My0zLjQ0Niw4LjM3OS0xNC42NjYsOC4zNzktMjguNzU5YzAtMjEuMDQ2LTQuODgxLTQ4LjQyNS04LjY2LTY1Ljg1NGM3LjUzNywwLjk2NiwxNS4yNDksMS45NzksMjMuMzI4LDMuMDczYy0wLjgwNyw0LjcyMS0xLjMwOSw5LjUwOC0xLjMwOSwxNC40NThjMCw1LjMyMywwLjU0MSwxMC44MjEsMS43ODIsMTYuNjE5bDAuNTA4LDIuNDY3bDEuOTEyLTEuNjc5YzUuOTg0LTUuMjY3LDkuMDYyLTE1LjQ5Nyw5LjMwNi0zMC4xNzhjMS4zMTMsMC4xNzcsMi41NzgsMC4zNDksMy45MDUsMC41MzdjMS4xOTQsMC4xNjEsMi40NTEsMC4zNDcsMy42NTgsMC41MDRjLTAuNTIyLDUuNjEzLTAuODg1LDExLjExMS0wLjg4NSwxNi4zNjNjMCwxNy4xNywzLjExNCwzMi4wODEsMTEuMjU4LDQyLjI5MmM4LjU5MiwxMC43NTMsMjIuMjAyLDE1LjY0NSw0MC40NDIsMTQuNTQ0bDEuMTY0LTAuMDg0bDAuMTkxLTEuMTM5YzAuNC0yLjEyNywwLjU4Ni00LjMsMC41ODYtNi40NDRjMC0xMC41MTktNC4yMzgtMjEuMTEzLTguMzQxLTMxLjQyMWMtMi4wMjMtNS4wNDMtNC4xMDQtMTAuMjgyLTUuNTc0LTE1LjI4bC0zLjQ0OS0xMS40NTJjLTAuMjIzLTAuNzI1LTAuNDI2LTEuNDY0LTAuNjczLTIuMTg5YzE5LjMzOCwzLjA2MSwzOS4zOTUsNi42MTQsNTguNzE1LDEwLjg1NWMwLjAwOSwwLDIuNTk5LDAuNTYxLDIuNTk5LDAuNTYxYzcuNTQzLDEuNjY2LDEyLjEwNywyLjY2NCwyMS43OTMsMy4zNWwyLjk5OSwwLjIxbC0xLjY1OC0yLjUwOGMtNi43NDYtMTAuMTc2LTIyLjYwNC0xNy44OTgtMzcuOTM3LTI1LjM4NmMtNy44MDMtMy43OTctMTUuODUzLTcuNzI4LTIyLjYtMTEuOTIzbC0yLjUwOC0xLjU0NmMtNS45NjEtMy42NzQtMTIuODQ5LTcuOTM4LTE4LjgyMS0xMi44ODVjMTEuMDM5LTIuNjM0LDIxLjI0NC01LjM2NSwzMC4yMTMtOC4wOTljNDEuNDExLTEyLjYwMSwxMDAuNTY3LTQ3LjM0LDEwNy4yNDQtNTguMjlsLTIuNTE2LTEuNTMyYy01Ljg2Niw5LjU5My02Mi4yNzQsNDMuODA1LTEwNS41OTQsNTYuOTljLTkuNDYzLDIuODc5LTIwLjM0NSw1Ljc2LTMyLjA5OSw4LjUyOWMtNi44NjctNi4yNzgtMTEuOTctMTMuNjE2LTExLjk3LTIyLjIxYzAtMC4xMzksMC4wMjQtMC4yNzIsMC4wMjQtMC40MTlsLTIuOTY5LTAuMDYzYzAsMC4wMDksMCwwLjAzOCwwLDAuMDM4Yy0wLjAyOCwxLjA4Ny0wLjA0LDIuMTY1LTAuMDQsMy4yNDVjMCw3LjQxOSwwLjgxNiwxNC44NTUsMi4xMTcsMjIuMzAzYy00LjU2NSwwLjk5Mi05LjIyNCwxLjk2LTEzLjk4MiwyLjg5M2M0LjY3Mi0yMi43NjcsMTEuMzgzLTQ1Ljg0MywxNy02NS4wNjdjNi4yODEtMjEuNDQ3LDExLjA3OC0zNy44MywxMS4wNzgtNDYuMjNjMC0xLjQ0Mi0wLjE0Ny0yLjY0Ni0wLjQzOC0zLjYwMWwtMC45MS0yLjlMMzI3Ljg5OSwyLjQ5NHogTTI3NS44NzgsODYuOTc0YzIuOTI0LDEyLjAyMSw1LjEzNCwyMi45OTMsNi41ODIsMzIuODUyYy0wLjIxMywwLjYxOS0wLjQwMSwxLjIwNS0wLjYxOSwxLjgxNWMtNy4wNDcsMS4yMDMtMTQuMTc1LDIuMzIzLTIxLjM1OSwzLjM0MkMyNjcuMjk5LDExMy4zMjIsMjczLjMxNCwxMDEuMDE1LDI3NS44NzgsODYuOTc0eiBNMjg3Ljk4MiwxMTIuOTRsNC40OTctMTMuMTAxbDYuMzAzLTIwLjMyN2M3LjM0My0yNC4zNDUsMTQuOTkyLTQ5LjQ0MiwyOS4xNDMtNzEuNTUxYy0wLjQ4NSw4LjM5MS01LjMzNSwyNS4wNTktMTAuODc3LDQzLjk0MWMtNS43NDksMTkuNjI2LTEyLjU5NCw0My4yNC0xNy4yOTYsNjYuNTE5Yy00LjYzNCwwLjg5NC05LjM1LDEuNzQ1LTE0LjExMSwyLjU3OWMtMC4wNS0wLjMwNS0wLjA4NS0wLjYxMy0wLjEzOS0wLjkzM0MyODYuMzE2LDExNy43MTYsMjg3LjEyNSwxMTUuMzUsMjg3Ljk4MiwxMTIuOTR6IE0zMTguMjI5LDEwMi42MzFjMiwzLjY4NSw0Ljc5Myw3LjA3MSw4LjAxNiwxMC4xOTVjLTIuMTM4LDAuNDk2LTQuMjgyLDAuOTktNi40NzUsMS40NjFDMzE5LjA4MywxMTAuMzg5LDMxOC41NzUsMTA2LjUwNCwzMTguMjI5LDEwMi42MzF6IE0yNDUuOTk5LDEyOS44NjVjMC43NCwyLjc1OCwxLjUyMSw1Ljk0MywyLjMwNSw5LjM2NmMtMTYuNDYzLTIuMDgyLTMxLjc5MS0zLjg3OS00Ni4zMTItNS40MTRDMjE2LjI1OSwxMzMuMDc0LDIzMS4xMTUsMTMxLjY5MiwyNDUuOTk5LDEyOS44NjV6IE0yNTQuNzk3LDEyOC43NDVjLTEuMzkzLDIuMzE0LTIuNzk4LDQuNTgtNC4yMSw2LjgzOWMtMC4wMzQsMC4wNDYtMC4wNjMsMC4xMDYtMC4wOTUsMC4xNThjLTAuNTgzLTIuNTA1LTEuMTA1LTQuNTkxLTEuNTM1LTYuMjI2QzI1MC45MDUsMTI5LjI3MywyNTIuODU2LDEyOS4wMTUsMjU0Ljc5NywxMjguNzQ1eiBNMjM3LjI1NCwyMTYuNzU1Yy0yLjk2OS02LjI4Mi01LjY2MS0xNC44MDYtNS42NjEtMjUuMDM4YzAtNy4xNzQsMS4zMjEtMTUuMTk2LDQuODA4LTIzLjg4MmMzLjM5Ni04LjQ1NCw3LjkzLTE2LjM3LDEyLjg1NC0yNC40NDZjNC4yODYsMTkuMzk5LDguNTg3LDQ1Ljg4NCw4LjU4Nyw2NS41MzJjMCwxMi41My0xLjc4LDIyLjE2Mi02LjQwOCwyNS4zODdDMjQ4LjE3LDIzMi43OTQsMjQxLjkyNCwyMjYuNjUzLDIzNy4yNTQsMjE2Ljc1NXogTTI4MC43ODUsMTI0LjgxN2MtMS45NzQsNi4wNzktMy42OCwxMi4wMTktNC44NjksMTguMDMyYy04LjQ0My0xLjE0LTE2LjQ5OS0yLjIwMy0yNC4zNDktMy4yMDNjMC41MTYtMC44MzQsMS4wMDgtMS42NTcsMS41MzItMi40OTdjMS44MzMtMi45NDQsMy42NDUtNS45MzQsNS40NDctOC45MjJDMjY2LjAyOCwxMjcuMTg2LDI3My40NTQsMTI2LjA1MiwyODAuNzg1LDEyNC44MTd6IE0yODMuMzU0LDEyNi40ODhjMC43OTMsNi40MDYsMS4xODYsMTIuMjYyLDEuMjY4LDE3LjU1OGMtMS45MjUtMC4yNTMtMy44NTktMC41MzUtNS43NjMtMC43ODVDMjc5Ljk4MSwxMzcuNjg2LDI4MS41NDQsMTMyLjEzLDI4My4zNTQsMTI2LjQ4OHogTTI5OS4wODgsMTIxLjU0M2MtMS41Nyw4LjE2NS0yLjc1OSwxNi4xODctMy41ODgsMjQuMDE2Yy0xLjE5MS0wLjE1My0yLjQyNC0wLjMzMy0zLjU5Ni0wLjUwMmMtMS40NjktMC4xOTktMi44NC0wLjM4Mi00LjI5My0wLjU5NGMtMC4wNTMtNi4xMzktMC41NzQtMTIuOTctMS41NjItMjAuNTMxQzI5MC40NCwxMjMuMTYsMjk0LjgxLDEyMi4zNzIsMjk5LjA4OCwxMjEuNTQzeiBNMjc3LjA0MiwxNjAuMjc1YzAtNC43OTgsMC41MDgtOS40NywxLjI5My0xNC4xMDZjMi4wOCwwLjI4OSw0LjIwNiwwLjU4OSw2LjI5NywwLjg3N2MtMC4xMjUsMTIuMTMtMi4yNDMsMjEuMDQ0LTYuMzQ1LDI2LjI4OUMyNzcuNTA5LDE2OC44NTQsMjc3LjA0MiwxNjQuNDk4LDI3Ny4wNDIsMTYwLjI3NXogTTMwNy44NCwyMDUuMzA0Yy03LjcwOC05LjY2NC0xMC42NjctMjMuOS0xMC42NjctNDAuMzk3YzAtNS4xMTEsMC4zNi0xMC41MDgsMC44NjctMTUuOTkzYzkuMjA2LDEuMzA5LDE4Ljc3MywyLjcwMiwyOC42MDEsNC4yNTVjMC4zNjQsMS4xNzgsMC43MjksMi4zODUsMS4wODEsMy41NzlsMy40MzYsMTEuNDE3YzEuNTE1LDUuMTQsMy42MTksMTAuNDI5LDUuNjU4LDE1LjU1MWM0LjAwMywxMC4wMzQsOC4xMTgsMjAuMzU3LDguMTE4LDMwLjM1NWMwLDEuNTc1LTAuMTg2LDMuMTMyLTAuNCw0LjcwNUMzMjcuOTU2LDIxOS41MzIsMzE1LjU5NCwyMTUuMDM1LDMwNy44NCwyMDUuMzA0eiBNMzE3LjM5NywxMTcuODIyYzIuMDQ5LDEwLjgwNiw1LjEwNCwyMS41NzgsOC4yOTcsMzIuMjA0Yy05LjM4LTEuNDU2LTE4LjUxNy0yLjc5My0yNy4zMDgtNC4wNDVjMC44NjEtOC4xNTEsMi4xNjItMTYuNTIyLDMuODM4LTI1LjA0NUMzMDcuMzg4LDExOS45NCwzMTIuNDQxLDExOC44OTQsMzE3LjM5NywxMTcuODIyeiBNMzI4Ljg3NiwxMTUuMjQzYzYuNDkyLDUuNjkyLDE0LjIwMSwxMC40NjUsMjAuODQ3LDE0LjU3OWwyLjQ5NCwxLjUyOWM2Ljg3Miw0LjI3MSwxNS4wMDYsOC4yNDgsMjIuODc3LDEyLjA4MWMxMy42LDYuNjI1LDI3LjU0MSwxMy40NzcsMzQuNzI0LDIxLjgwMmMtNy4yNDMtMC42NDEtMTEuMjk3LTEuNTQ4LTE3Ljk4OC0zLjAyOWwtMi42MDYtMC41NTZjLTE5Ljg2MS00LjM2Ny00MC40ODUtNy45OTItNjAuMjg3LTExLjEwOGMtMy4zMjItMTEuMDE4LTYuNTIzLTIyLjE3Ny04LjY1Mi0zMy4zNTFDMzIzLjE5NywxMTYuNTQ5LDMyNi4wNTQsMTE1LjkwOSwzMjguODc2LDExNS4yNDN6Ii8+PC9nPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMTQuMDYzLDM0OS41MDVoLTUuNjU2di01MC43NjRjMC0xNC4wNjUtMTAuMjQxLTI0LjE1OS0yNC4zMDctMjQuMTU5Yy0xMy45MSwwLTI0LjE1NywxMC4wOTQtMjQuMTU3LDI0LjE1OXY1MC43NjRoLTUuNjU2di01MC43NjRjMC0xNC4wNjUtMTAuMjU4LTI0LjE1OS0yNC4zMjEtMjQuMTU5Yy0xMy45MTMsMC0yNC4xNTQsMTAuMDk0LTI0LjE1NCwyNC4xNTl2NTAuNzY0SDB2LTUwLjc2NGMwLTE3LjI3OSwxMi43MDMtMjkuOTc3LDI5Ljk2OC0yOS45NzdjMTIuODQ4LDAsMjIuNzc4LDYuODg2LDI3LjA3MSwxNy40MjdjNC40My0xMC41NDEsMTQuMzUyLTE3LjQyNywyNy4wNjItMTcuNDI3YzE3LjQxOCwwLDI5Ljk2MiwxMi42OTcsMjkuOTYyLDI5Ljk3N1YzNDkuNTA1eiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNDEuODkzLDI1Ny40NjloLTUuNjU3di0xNC4wODJoNS42NTdWMjU3LjQ2OXogTTE0MS44OTMsMzQ5LjUwNWgtNS42NTd2LTc4Ljc0OGg1LjY1N1YzNDkuNTA1eiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xODkuNzQ3LDM0NC4zMDR2NS4yMDFjLTE2Ljk2NiwxLjUzNS0yNi43NTQtOS42NC0yNi43NTQtMjcuMjI5di04Ni41MjdoNS42NTZ2ODYuNTI3QzE2OC42NDksMzM1LjczMiwxNzQuNzYzLDM0NC45MDMsMTg5Ljc0NywzNDQuMzA0eiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNzEuNTU3LDM0OS41MDVoLTUuNjYzdi0xOC45NTdjLTYuNDE2LDEyLjM3OS0xOC45NjQsMjAuNzkxLTMzLjY0MiwyMC43OTFjLTIxLjcxNywwLTM5LjI5My0xOC4zNDgtMzkuMjkzLTQwLjk4OGMwLTIyLjkyNCwxNy41NzYtNDEuNTg2LDM5LjI5My00MS41ODZjMjEuNzIsMCwzOS4zMDUsMTguNjYyLDM5LjMwNSw0MS41ODZWMzQ5LjUwNXogTTIzMi4yNTIsMjc0LjU4MmMtMTguNTA0LDAtMzMuNjM1LDE2LjA1LTMzLjYzNSwzNS43NjljMCwxOS40NDksMTUuMTMxLDM1LjMyLDMzLjYzNSwzNS4zMmMxOC41MTIsMCwzMy42NDItMTUuODcxLDMzLjY0Mi0zNS4zMkMyNjUuODk0LDI5MC42MzIsMjUwLjc2NCwyNzQuNTgyLDIzMi4yNTIsMjc0LjU4MnoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzU1Ljc4NCwzMDEuOTQ2djQ3LjU1OWgtNS42NnYtNDcuNTU5YzAtMTUuOTA1LTExLjQ0OS0yNy4zNjQtMjcuMzUzLTI3LjM2NGMtMTUuODk2LDAtMjcuNTE5LDExLjQ1OS0yNy41MTksMjcuMzY0djQ3LjU1OWgtNS42NnYtNDcuNTU5YzAtMTkuMjY0LDEzLjkxMy0zMy4xODIsMzMuMTc5LTMzLjE4MkMzNDEuODgsMjY4Ljc2NSwzNTUuNzg0LDI4Mi42ODMsMzU1Ljc4NCwzMDEuOTQ2eiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00NDkuMDY2LDMxMC4zNTFjMCwyMi42NDEtMTcuNzQ0LDQwLjk4OC0zOS40NTUsNDAuOTg4Yy0yMS41NTEsMC0zOS4yODktMTguMzQ4LTM5LjI4OS00MC45ODhjMC0yMi45MjQsMTcuNzM4LTQxLjU4NiwzOS4yODktNDEuNTg2QzQzMS4zMjIsMjY4Ljc2NSw0NDkuMDY2LDI4Ny40MjcsNDQ5LjA2NiwzMTAuMzUxeiBNNDQzLjI2MSwzMTAuMzUxYzAtMjAuMDIxLTE0Ljk5NS0zNi4yMzQtMzMuNjQ5LTM2LjIzNGMtMTguNDk4LDAtMzMuNjMzLDE2LjIxMy0zMy42MzMsMzYuMjM0YzAsMTkuNTg1LDE1LjEzNSwzNS42MzUsMzMuNjMzLDM1LjYzNUM0MjguMjY2LDM0NS45ODUsNDQzLjI2MSwzMjkuOTM2LDQ0My4yNjEsMzEwLjM1MXoiLz48L2c+PC9nPjwvc3ZnPg=="
  
//         },
//         {
//           "id": 6656931557,
//           "name": "Le Marché St George",
//           "short_description": "Warm, rustic-chic cafe offering elevated coffee drinks, baked goods, crêpes & gourmet foods.",
//           "long_description": "Le Marché St George is a general store, a café, an occasional event space, and a home. It’s a place where everyone is welcome. It’s real people making real things. It’s  Christmas events where Santa comes to takes photos with families all day to raise funds for the food bank.  It’s spontaneous moments where musicians come to play. It’s the best artisan chocolate and local jams. It’s fancy dinners and some not-so-fancy dinners.",
//           "location": "lat: 49.246565, lng: -123.094306",
//           "address": "4393 St George St",
//           "contact": "604-565-5107",
//           "website": "http://marchestgeorge.com"
//         },
//         {
//           "id": 8916191742,
//           "name": "49th Parallel",
//           "short_description": "Cozy hangout with a patio serving house-roasted coffee, espresso & freshly baked pastries.",
//           "long_description": "Every cup you drink should be exciting: a delicious representation of the region. To find these coffees, we work directly with farmers who share the same ambition and commitment for their craft as we do.",
//           "location": "lat: 49.259840, lng: -123.100836",
//           "address": "2902 Main St",
//           "contact": "604-872-4901",
//           "website": "https://49thcoffee.com"
//         },
//         {
//           "id": 9351935433,
//           "name": "Elysian Coffee",
//           "short_description": "UNCOMPLICATING COFFEE",
//           "long_description": "At Elysian, we source, roast and brew our coffee. We’ve spent a ton of time (probably too much time if we’re being totally honest) tinkering, measuring and analyzing every step of the process. After years of complexity, it has led us to simplicity. It’s led us to a straightforward, good tasting cup of coffee.",
//           "location": "lat: 49.265270, lng: -123.104963",
//           "address": "2301 Ontario St",
//           "contact": "604-559-0510",
//           "website": "https://elysiancoffee.com"
//         },
//         {
//           "id": 2855052607,
//           "name": "Milano Coffee",
//           "short_description": "Cozy, wood-hued cafe for espresso drinks, cold-brewed coffee & other beverages using its own roast.",
//           "long_description": "The legacy of Vancouver based Milano Coffee’s artisan tradition dates back three generations of Italian coffee heritage blended with over thirty years of West Coast culture. In 1984 visionary founder and Master Roaster, Francesco Curatolo, brought 75 years of Italian roasting and blending expertise to Vancouver, Canada garnering a worldwide reputation for his exquisitely crafted Italian coffees.",
//           "location": "lat: 49.263912, lng: -123.108704",
//           "address": "156 W 8th Ave",
//           "contact": "604-879-4468",
//           "website": "http://www.milanocoffee.ca"
//         },
//         {
//           "id": 6365216952,
//           "name": "JJ Bean",
//           "short_description": "Commercial Drive has an eclectic and cozy atmosphere. This café is the perfect place to warm up on a cold day, with the perfect patio to cool off in summer.",
//           "long_description": "We believe people have intrinsic value and seek to honour our coffee producers, our staff, and our customers by only serving the freshest, best tasting coffee possible. To this end, we source the highest quality green coffee and roast it in small batches daily, guided by one principle: the best taste wins.",
//           "location": "lat: 49.265808, lng: -123.069466",
//           "address": " 2206 Commercial Dr",
//           "contact": "604-254-3723",
//           "website": "https://jjbeancoffee.com"
//         }
//       ]
//     },
//     {
//       "id": "536255888347723",
//       "title": "grocery",
//       "inventory": [
//         {
//           "id": 2504575591,
//           "name": "Famous Foods",
//           "short_description": "Famous Foods has always been the spot in town to shop for Organic and natural foods such as flours, grains, beans, spices, and herbs.",
//           "long_description": "For over 80 years, Famous Foods has been serving generations of families with wholesome, natural foods! First established in 1930, the store was located on Hastings Street. Since then, the store has moved from Hastings to Commercial Drive, and finally to Kingsway, which has been our home for the past 30 years.",
//           "location": "lat: 49.249108, lng: -123.071494",
//           "address": "1595 Kingsway",
//           "contact": "604-872-3019",
//           "website": "www.famousfoods.ca"
//         }, 
//         {
//           "id": 3776309703,
//           "name": "les amis du FROMAGE",
//           "short_description": "les amis du FROMAGE is a family owned and operated specialty cheese store.",
//           "long_description": "les amis du FROMAGE is honoured to have been voted “Best Cheese Shop” by readers of The Georgia Straight, The Westender and The Courier, and has been awarded Vancouver Magazine’s Restaurant Award for Top Food Supplier to Vancouver’s best restaurants and hotels.",
//           "location": "lat: 49.282036, lng: -123.086220", 
//           "address": "843 E Hastings St",
//           "contact": "604-253-4218",
//           "website": "www.buycheese.com"
//         }, 
//         {
//           "id": 1901090132,
//           "name": "Home on the Range Organics Ltd.",
//           "short_description": "Home on the Range Organics is for anyone in the Lower Mainland to buy organic and grass fed products.",
//           "long_description": "We specialize in grass fed, and grass finished animals such as beef, bison, lamb, elk and wild boar, pigs, and pastured poultry such as chicken, Cornish game hens, ducks and geese and turkeys.",
//           "location": "lat: 49.263923, lng: -123.100180",
//           "address": "235 E Broadway",
//           "contact": "604-876-8755",
//           "website": "https://www.facebook.com/HOTRO.CA/"
//         }, 
//         {
//           "id": 4787613825,
//           "name": "The Federal Store",
//           "short_description": "Luncheonette and grocer nestled away in Mount Pleasant.",
//           "long_description": "",
//           "location": "lat: 49.262691, lng: -123.103227",  
//           "address": "2601 Quebec St",
//           "contact": "778-379-2605",
//           "website": "http://federalstore.ca"
//         } 
//       ]
//     }
//   ]
  