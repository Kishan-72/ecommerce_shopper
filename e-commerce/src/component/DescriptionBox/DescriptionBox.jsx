import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          perspiciatis tempora temporibus officia inventore reiciendis doloribus
          quas adipisci sapiente necessitatibus aspernatur iusto vel aliquam
          magni, in natus velit possimus at asperiores atque hic incidunt iste?
          Quaerat minus iusto dolor facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          aperiam assumenda incidunt ullam. Quidem eum ad dicta nulla soluta
          facere earum maiores accusamus natus delectus reiciendis quae, quos
          rerum, itaque quo expedita? Fugiat quibusdam aspernatur ea alias,
          veritatis facere neque!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
