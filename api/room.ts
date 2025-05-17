import { VercelRequest, VercelResponse } from '@vercel/node';

// ⚠ resets every cold start
let userSocketMap: { roomId: string }[] = [];

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const unique = [...new Set(userSocketMap.map((u) => u.roomId))];
  return res.status(200).json({ rooms: unique });
}
