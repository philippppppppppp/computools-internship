import styles from './Categories.module.css';
import { ReactComponent as FruitsIcon } from '../../assets/categories/fruits_vegetables.svg';
import { ReactComponent as MeatIcon } from '../../assets/categories/meat_and_fish.svg';
import { ReactComponent as SnacksIcon } from '../../assets/categories/snacks.svg';
import { ReactComponent as PetIcon } from '../../assets/categories/pet_care.svg';
import { ReactComponent as HomeIcon } from '../../assets/categories/home_and_cleaning.svg';
import { ReactComponent as DairyIcon } from '../../assets/categories/dairy.svg';
import { ReactComponent as CookingIcon } from '../../assets/categories/cooking.svg';
import { ReactComponent as BreakfastIcon } from '../../assets/categories/breakfast.svg';
import { ReactComponent as BeverageIcon } from '../../assets/categories/beverage.svg';
import { ReactComponent as BeautyIcon } from '../../assets/categories/beauty_and_health.svg';
import CategoriesItem from './CategoriesItem/CategoriesItem';

const Categories = () => {
  return (
    <div className={styles.root}>
      <CategoriesItem
        Icon={FruitsIcon}
        title='Fruits Vegetables'
        childCategories={[
          {
            id: 41,
            title: 'Bread',
          },
          {
            id: 42,
            title: 'Cereal',
          },
        ]}
      />
      <CategoriesItem Icon={MeatIcon} title='Meat & Fish' />
      <CategoriesItem Icon={SnacksIcon} title='Snacks' />
      <CategoriesItem Icon={PetIcon} title='Pet Care' />
      <CategoriesItem Icon={HomeIcon} title='Home & Cleaning' />
      <CategoriesItem Icon={DairyIcon} title='Dairy' />
      <CategoriesItem Icon={CookingIcon} title='Cooking' />
      <CategoriesItem Icon={BreakfastIcon} title='Breakfast' />
      <CategoriesItem Icon={BeverageIcon} title='Beverage' />
      <CategoriesItem Icon={BeautyIcon} title='Beauty & Health' />
    </div>
  );
};

export default Categories;
