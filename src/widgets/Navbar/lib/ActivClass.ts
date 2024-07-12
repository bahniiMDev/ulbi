import cls from 'widgets/Navbar/ui/Navbar.module.scss';
import { ClassNames } from 'shared/lib/ClassNames';

type IsActiveNavLink = {
	isActive?: boolean;
};
export const classNavLink = ({ isActive }: IsActiveNavLink) => ClassNames(cls.nav_item, {}, [`${isActive ? cls.active : null}`]);
