import SearchBar from "@/Components/SearchBar";
import Image from "next/image";
import ProductTable from "@/Components/ProductTable";
import FilteredAbleProducts from "@/Components/FilteredAbleProducts";
// export default function Home() {
//   const data = [
//     {
//       category: "Salads",
//       foods: [
//         {
//           name: "CHICKEN CAESER SALAD",
//           ingredients: "Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken",
//           price: "24,900₮"
//         },
//         {
//           name: "GREEK SALAD",
//           ingredients: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.",
//           price: "21,900₮"
//         },
//         {
//           name: "QUINOA POWER SALAD",
//           ingredients: "A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing.",
//           price: "22,500₮"
//         }
//       ]
//     },
//     {
//       category: "Burgers",
//       foods: [
//         {
//           name: "CLASSIC BURGER",
//           ingredients: "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries.",
//           price: "18,900₮"
//         },
//         {
//           name: "BBQ BACON BURGER",
//           ingredients: "Beef patty topped with crispy bacon, BBQ sauce, cheddar, and onion rings.",
//           price: "21,900₮"
//         },
//         {
//           name: "VEGAN BLACK BEAN BURGER",
//           ingredients: "Homemade black bean patty, avocado, lettuce, tomato, and vegan mayo, served on a whole-grain bun.",
//           price: "17,900₮"
//         }
//       ]
//     },
//     {
//       category: "Pasta",
//       foods: [
//         {
//           name: "SPAGHETTI PASTA",
//           ingredients: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta.",
//           price: "20,900₮"
//         },
//         {
//           name: "SEAFOOD MARINARA",
//           ingredients: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.",
//           price: "23,500₮"
//         },
//         {
//           name: "PESTO CHICKEN PASTA",
//           ingredients: "Fettuccine pasta with grilled chicken, basil pesto, and cherry tomatoes.",
//           price: "21,000₮"
//         }
//       ]
//     },
//     {
//       category: "Pizza",
//       foods: [
//         {
//           name: "MARGHERITA PIZZA",
//           ingredients: "Simple and classic with tomato sauce, fresh mozzarella, and basil leaves.",
//           price: "30,900₮"
//         },
//         {
//           name: "PEPPERONI FEAST",
//           ingredients: "Loaded with pepperoni and melted mozzarella on a crispy crust.",
//           price: "34,500₮"
//         },
//         {
//           name: "VEGETARIAN DELIGHT",
//           ingredients: "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes.",
//           price: "29,900₮"
//         }
//       ]
//     }
//   ]


//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       {menu}
//     </div>
//   );
// }


// function Card(props) {
//   let foodCards = []
//   for (let i = 0; i < props.category.foods.length; i++) {
//     foodCards.push(<FoodCard food={props.category.foods[i]} />)
//   }

//   return (
//     <div>
//       <div className="bg-[#351B1A] p-[12px]">
//         <h1 className="text-[#957A7C]">
//           {props.data.category}
//         </h1>
//       </div>
//       {foodCards}
//     </div>
//   )
// }

// function FoodCard(props) {
//   return (
//     <div className="w-[440px] p-[12px] bg-blue-200">
//       <div className="flex justify-between">
//         <h3 className="font-bold">{props.food.name}</h3>
//         <h3 className="font-bold">{props.food.price}</h3>
//       </div>
//       <h3 className="text-base">{props.food.ingredients}</h3>
//     </div>
//   )
// }
export default function Home() {
  const DATA = [{
    category: "Fruits",
    items: [
      {
        name: "Apple",
        price: "$1",
        stocked: true
      },
      {
        name: "Dragonfruit",
        price: "$1",
        stocked: true
      },
      {
        name: "Passionfruit",
        price: "$2",
        stocked: false
      }
    ]
  },
  {
    category: "Vegetables",
    items: [
      {
        name: "Spinach",
        price: "$2",
        stocked: true
      },
      {
        name: "Pumpkin",
        price: "$4",
        stocked: false
      },
      {
        name: "Peas",
        price: "$1",
        stocked: true
      }
    ]
  }
  ]
  return (
    <FilteredAbleProducts data={DATA}></FilteredAbleProducts>
  )
}