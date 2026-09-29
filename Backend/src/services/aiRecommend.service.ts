import { recommendService } from "./cat.service.ts";
import { generateAIResponse } from "./gemini.service.ts";



export const aiRecommendService = async (kidsFriendly: boolean, apartmentFriendly: boolean) => {
    const matchCatsFromDb = await recommendService(kidsFriendly, apartmentFriendly);

    const prompt = `
You are a professional cat expert and cat adoption consultant with extensive knowledge about cat breeds, personalities, energy levels, family compatibility, and living environments.

You have received cat compatibility data:

Kids Friendly: ${kidsFriendly}
Apartment Friendly: ${apartmentFriendly}

Based on this information, analyze the cat's suitability for the user.

Your task is to provide a clear and practical comparison/assessment.

Consider these factors:
1. Compatibility with children
2. Suitability for apartment living
3. Overall family friendliness
4. Activity and lifestyle compatibility
5. Potential advantages
6. Potential limitations

Rules:
- Do not invent information that is not provided.
- Base your assessment primarily on the given compatibility data.
- Keep the explanation simple and useful for someone looking to adopt a cat.
- Clearly explain why the cat is or is not suitable.
- If both values are true, explain why the cat is a good choice for families and apartment living.
- If one value is false, clearly mention the limitation.
- If both values are false, explain that the cat may require a different living environment or household setup.

Return the response in the following format:

{
  "overallCompatibility": "Good | Moderate | Low",
  "kidsCompatibility": "Suitable | Not Suitable",
  "apartmentCompatibility": "Suitable | Not Suitable",
  "summary": "Short overall assessment",
  "advantages": [
    "Advantage 1",
    "Advantage 2"
  ],
  "considerations": [
    "Consideration 1",
    "Consideration 2"
  ]
}
`;


    const aiResponse = await generateAIResponse(prompt);

    return aiResponse;
};