import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getLocation = async (req, res) => {
  try {
    const ipAddress = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    if (!ipAddress) {
      return res.status(400).json({ error: "Unable to detect client IP" });
    }
    const token = process.env.APITOKEN;
    const apiUrl = `https://ipinfo.io/${ipAddress}/json?token=${token}`;
    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching location data:", error);
    res.status(500).json({
      error: "Unable to fetch location data from ipinfo.io",
    });
  }
};
