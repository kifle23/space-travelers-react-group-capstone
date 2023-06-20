import image from '../falcon.jpg';

const Rockets = () => {
  const style = {
    width: 200,
  };
  return (
    <div className="container">
      <div className=" d-flex-space g-10 my-20">
        <img src={image} width={style.width} alt="rocket" />
        <div className="rocket-details">
          <h2 className="rocket-name">Falcon 1</h2>
          <p className="rocket-desc">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button type="button" className="rocket-reserve btn">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

export default Rockets;
