export type getDataType = {
  results: Array<ImageItemType>;
  total: number;
  total_pages: number;
};

export type ImageItemType = {
  id: string;
  alt_description: string;
  urls: {
    thumb: string;
  };
};
