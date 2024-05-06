import { StaticImageData } from "next/image"

export type THeroProps = {
  heroContent: string
  image: StaticImageData | string
}

export type THeroList = THeroProps[]
