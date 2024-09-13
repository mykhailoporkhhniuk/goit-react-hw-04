import axios from "axios";

export const requestSearchValue = async (searchValue, pageNumber = 1) => {
  const params = {
    query: searchValue,
    page: pageNumber,
    orientation: "landscape",
    per_page: 20,
  };
  const { data } = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=zI-Qr4FP67xS5mQfEWfbajiFo5i62kMFzDCLA-FLIDI",
    {
      params,
      headers: {
        "Accept-Version": "v1",
      },
    }
  );
  return data;
};
