import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
	path: string;
	to: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const LazyLaylout = lazy(
	() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout")
);

const Lazy1 = lazy(
	() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
	() => import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
	() => import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
	{
		path: "/lazyload/*",
		to: "/lazyload/",
		Component: LazyLaylout,
		name: "Lazy Layout - Dashboard",
	},
	{
		path: "/no-lazy",
		to: "no-lazy",
		Component: NoLazy,
		name: "No lazy",
	},
];
