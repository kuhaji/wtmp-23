import MenuFi from '../mock-data/fazer-data.json';
import MenuEn from '../mock-data/fazer-data-en.json';

const coursesFi = MenuFi.MenusForDays[0].SetMenus.map((menuItem) => {
  return menuItem.Components.join(', ');
});
const coursesEn = MenuEn.MenusForDays[0].SetMenus.map((menuItem) =>
  menuItem.Components.join(', ')
);

console.log(MenuFi);
const Fazer = {coursesEn, coursesFi};
export default Fazer;
