import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "71a37c65a3f144b4881079795737fc30",
  },
});
