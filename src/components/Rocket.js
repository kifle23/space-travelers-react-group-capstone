const Rocket = (rocket) => {
  const { name, img, desc } = rocket;
  return (
    <div className=" d-flex-space g-10 my-20">
      <img src={img} className="logo" alt="rocket" />
      <div className="rocket-details">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-desc">{desc}</p>
        <button type="button" className="rocket-reserve btn">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
