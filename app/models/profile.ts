export type image = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type userProfile = {
  _id: string;
  displayname: string;
  displayemail: string;
  contact: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  website: string;
  company: {
    name: string;
    position: string;
  };
  backgroundimage: image;
  user: {
    _id: string;
    image: image;
  };
};
