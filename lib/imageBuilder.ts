import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanity";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: any) => {
  if (!source) {
    return "path/to/default/image.jpg";
  }
  return builder.image(source).url();
};

export default urlFor;
