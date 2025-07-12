// import * as dotenv from "dotenv";
// import { createError } from "../error.js";
// import { Configuration, OpenAIApi } from "openai";

// dotenv.config();

// // Setup open ai api key
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // Controller to generate Image
// export const generateImage = async (req, res, next) => {
//   try {
//     const { prompt } = req.body;

//     const response = await openai.createImage({
//       prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });
//     const generatedImage = response.data.data[0].b64_json;
//     res.status(200).json({ photo: generatedImage });
//   } catch (error) {
//     next(
//       createError(
//         error.status,
//         error?.response?.data?.error.message || error.message
//       )
//     );
//   }
// };

import axios from "axios";
import FormData from "form-data";
import * as dotenv from "dotenv";
import { createError } from "../error.js";

dotenv.config();

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      throw createError(400, "Prompt is required");
    }

    const formData = new FormData();
    formData.append("model", "sdxl");
    formData.append("prompt", prompt);
    formData.append("output_format", "png");
    formData.append("aspect_ratio", "1:1");

    const response = await axios.post(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "image/*",
        },
        responseType: "arraybuffer", // get image buffer
      }
    );

    // Convert to base64 string
    const imageBase64 = Buffer.from(response.data).toString("base64");

    res.status(200).json({ photo: imageBase64 }); // frontend expects `photo` key
  } catch (error) {
    const status = error.response?.status || 500;
    const message =
      error.response?.data?.errors?.[0] ||
      error.response?.data?.error ||
      error.message;

    next(createError(status, message));
  }
};



