import './outfititems.css';

type PropsType = {
  info: {
    item: string;
    imgs: {
      src: string;
      info: string;
    }[];
  };
};

const OutfitItems = ({ info }: PropsType) => {
  return (
    <div className='outfit-items__container'>
      <h3>{info.item}</h3>
      <div className='outfit-items__infos'>
        {info.imgs.map((img) => (
          <section key={img.info}>
            <img
              src={img.src}
              className='outfit-items__imgs'
              alt={`${info.item} - ${img.info}`}
            />
            <p>{img.info}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OutfitItems;
