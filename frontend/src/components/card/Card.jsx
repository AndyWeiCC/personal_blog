import react from "react";
import "./card.css";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount; 
        if (thumbnail !== undefined && amount !=undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">Chinese struggle</h3>
                  <p className="amount">{amount}</p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
