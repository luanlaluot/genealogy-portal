import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import MainLayout from "@/layouts";
import HomeView from "@/sections/home/view/home-view";

export default function HomePage() {
  return <HomeView />;
}
