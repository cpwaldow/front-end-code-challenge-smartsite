import './icons-legend.css';
import { outfit } from '../utils/outfit';
import OutfitItems from '../OutfitItems';

const IconsLegend = () => {
  return (
    <section className='icons-legend__container'>
      {outfit.map((item) => (
        <OutfitItems info={item} key={item.item} />
      ))}
    </section>
  );
};

export default IconsLegend;
