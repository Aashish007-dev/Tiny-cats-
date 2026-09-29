import type { Request, Response } from "express";
import { getMcpClient } from "../services/mcp.service.ts"
import { generateAIResponse } from "../services/gemini.service.ts";


export const testMcpController = async (req: Request, res: Response) => {
    const client = await getMcpClient();

    const tools = await client.listTools();

    const result = await client.callTool({
        name: "recommend_cats",
        arguments: {
            kidsFriendly: true,
            apartmentFriendly: false
        }
    })

    const catsData = result.content
        .filter((item) => item.type === "text")
        .map((item) => item.text)
        .join("\n");

    const prompt = `
        Available cats 

        ${catsData}

        recommend a Best Cats from this data
    `

    let aiResponse = await generateAIResponse(prompt)

    return res.json({
        success: true,
        data: aiResponse
    })

    
}