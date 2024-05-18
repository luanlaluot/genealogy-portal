import { ListItemButton, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

const DATA = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Login",
    href: "/login",
  },
  {
    title: "Register",
    href: "/register",
  },
];

export default function Nav() {
  return (
    <Stack component={"nav"} direction={"row"}>
      {DATA.map((nav) => {
        return <NavItem key={nav.title} item={nav} />;
      })}
    </Stack>
  );
}

const NavItem = ({ item }: { item: { title: string; href: string } }) => {
  const { title, href } = item;
  return (
    <Link href={href}>
      <ListItemButton title={title}>{title}</ListItemButton>
    </Link>
  );
};
