import type { Request, Response } from "express";
import { generateAIResponse } from "../services/gemini.service.ts";


export const askAiController = async (req: Request, res: Response) => {
    const {prompt} = req.body;
    const result = await generateAIResponse(prompt);

    return res.status(200).json({
        success: true,
        message: "AI response successfully",
        data: result
    });
}