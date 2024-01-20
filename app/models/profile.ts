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
  displayemails: [
    {
      _key: string;
      place: string;
      emailaddress: string;
    }
  ];
  contacts: [
    {
      _key: string;
      place: string;
      contactnumber: string;
    }
  ];
  facebook: string;
  instagram: string;
  linkedin: string;
  websites: [string];
  company: [
    {
      _key: string;
      link: string;
      name: string;
      position: string;
    }
  ];
  backgroundimage: image;
  user: {
    _id: string;
    image: image;
  };
};
