'use client'
import Cors from 'nextjs-cors';
const clientId = "xstXysccvSkWS6uo7MumQhnmhOGj0ruBNi3hQgJU";
const clientSecret = "drMQGspFC7DTzcBkwA7Dibi6Lon48TcCjR4B7epQq1xAyPqFZkj4Qv1SwTRC4Ja0EAZSDDFUqoiz3hNMC8n4n2b2im8xIsupWWpHchKnk2RkJhfDwZ20s66SPsKecijB";
const url = "https://www.udemy.com/api-2.0/courses/";

const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

const corsOptions = {
  origin: '*', // Allow requests from any origin
};

export default async function handler(req, res) {
  await Cors(req, res, corsOptions);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Udemy API' });
  }
}