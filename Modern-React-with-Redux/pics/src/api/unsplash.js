import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 88edb644808dce2dd69b18699b97d02efc2a6e881138304c45c9483cd8440bd2"
  }
});
