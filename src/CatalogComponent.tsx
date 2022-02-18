import { timer } from './index';

const CatalogComponent = () => {
    const handleMobx = () => 
    {
      timer.increase();
    }
    return <div>Catalog</div>
}

export default CatalogComponent;