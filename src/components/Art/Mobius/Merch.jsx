import Navigation from "./Navigation";
function App() {
  const merchItems = [
    {
      id: 1,
      name: "Banana Skeleton Dad Hat",
      image: `${import.meta.env.BASE_URL}mobius/banana_hat.jpg`,
      price: "$20",
    },
    {
      id: 2,
      name: "Eyepatch Cat Hoodie",
      image: `${import.meta.env.BASE_URL}mobius/cat_hoodie.PNG`,
      price: "$45",
    },
    {
      id: 4,
      name: "MOBIUS LINE T-Shirt",
      image: `${import.meta.env.BASE_URL}mobius/logo_shirt.PNG`,
      price: "$25",
    },
    {
      id: 4,
      name: "MOBIUS LINE Crewneck Sweatshirt",
      image: `${import.meta.env.BASE_URL}mobius/logo_crewneck.PNG`,
      price: "$45",
    },
    {
      id: 3,
      name: "Eyepatch Cat Bucket Hat",
      image: `${import.meta.env.BASE_URL}mobius/catbuckethat.jpg`,
      price: "$25",
    },
    {
      id: 5,
      name: "MOBIUS LINE Sticker Pack",
      image: `${import.meta.env.BASE_URL}mobius/stickers.png`,
      price: "$10",
    },
  ];

  return (
    <div className="mobiusPageContainer">
      <Navigation />
      <h2>Merch</h2>
      <div className="merch-listings">
        {merchItems.map((item) => (
          <div className="merch-item" key={item.id}>
            <img src={item.image} alt={item.name} className="merch-image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            {item.id != 5 && <button disabled>SOLD OUT</button>}
            {item.id == 5 && <button disabled>RESTOCKING SOON!</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
