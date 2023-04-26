import "./styles/Prop4.scss";
// 이미지 폴더 만들어서 이미지 다섯 개 넣어야 함 폴더명 images , 이미지파일명 1.png

const Prob4 = () => {
  return (
    <div className="Prob4">
      <div>
        <img src={process.env.PUBLIC_URL + "/images/1.png"} alt="sample" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/2.png"} alt="sample" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/3.png"} alt="sample" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/4.png"} alt="sample" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/5.png"} alt="sample" />
      </div>
    </div>
  );
};

export default Prob4;
