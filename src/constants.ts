/**
 * Prompt used in any server logs to identify origin
 */
export const PROMPT: string = "[ Server ]";

/**
 * Server port number
 */
export const PORT: number = Number(process.env.PORT) || 5000;

/**
 * Server hostname
 */
export const HOSTNAME: string = process.env.HOSTNAME || "localhost";
